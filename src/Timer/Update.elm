module Timer.Update exposing (..)

import Task
import Timer.Model exposing (Timer, TrackTime)
import Timer.Messages exposing (TimerMsg(..))


calculateOverflow : Int -> Int -> ( Int, Int )
calculateOverflow count limit =
    if count == limit then
        ( 0, 1 )
    else
        ( count, 0 )


updateTrackTime : TrackTime -> TrackTime
updateTrackTime trackTime =
    let
        ( s, sOverflow ) =
            calculateOverflow (trackTime.second + 1) 60

        ( m, mOverflow ) =
            calculateOverflow (trackTime.minute + sOverflow) 60

        hr =
            trackTime.hour + mOverflow
    in
        { hour = hr
        , minute = m
        , second = s
        }


update : TimerMsg -> Timer -> ( Timer, Cmd TimerMsg )
update timerMsg timer =
    case timerMsg of
        Tick _ ->
            let
                timeRemaining =
                    timer.timeRemaining

                updatedTimeElapsed =
                    updateTrackTime timeRemaining
            in
                ( { timer
                    | timeRemaining = updatedTimeElapsed
                  }
                , Cmd.none
                )

        ToggleIsRunning ->
            ( { timer | isRunning = not timer.isRunning }, Cmd.none )

        Reset ->
            ( { timer
                | isRunning = False
                , timeSet =
                    { hour = 0
                    , minute = 0
                    , second = 0
                    }
                , timeRemaining =
                    { hour = 0
                    , minute = 0
                    , second = 0
                    }
              }
            , Cmd.none
            )
