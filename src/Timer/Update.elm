module Timer.Update exposing (..)

import Task
import Time
import Timer.Model exposing (Timer, TrackTime)
import Timer.Messages exposing (TimerMsg(..))


calculateUnderflow : Int -> Int -> ( Int, Int )
calculateUnderflow count floor =
    if count < floor then
        ( 59, 1 )
    else
        ( count, 0 )


updateTrackTime : TrackTime -> TrackTime
updateTrackTime trackTime =
    let
        ( s, sUnderflow ) =
            calculateUnderflow (trackTime.second - 1) 0

        ( m, mUnderflow ) =
            calculateUnderflow (trackTime.minute - sUnderflow) 0

        hr =
            trackTime.hour - mUnderflow
    in
        { hour = hr
        , minute = m
        , second = s
        }

timerReachedZero : TrackTime -> Bool
timerReachedZero timer =
    (timer.hour == 0) && (timer.minute == 0) && (timer.second == 0)


update : TimerMsg -> Timer -> ( Timer, Cmd TimerMsg )
update timerMsg timer =
    case timerMsg of
        Tick _ ->
            let
                timeRemaining =
                    timer.timeRemaining

                updatedTimeRemaining =
                    updateTrackTime timeRemaining

                updatedTimer =
                    { timer | timeRemaining = updatedTimeRemaining }
            in
                if timerReachedZero updatedTimeRemaining then
                    update TimeUp updatedTimer
                else
                    (updatedTimer, Cmd.none)

        ToggleIsRunning ->
            ( { timer | isRunning = not timer.isRunning, alarm = False }, Cmd.none )

        Reset ->
            ( { timer
                | isRunning = False
                , alarm = False
                , timeRemaining =
                    { hour = timer.timeSet.hour
                    , minute = timer.timeSet.minute
                    , second = timer.timeSet.second
                    }
              }
            , Cmd.none
            )

        TimeUp ->
            ( { timer | isRunning = False, alarm = True }, Cmd.none )
