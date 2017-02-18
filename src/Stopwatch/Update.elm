module Stopwatch.Update exposing (..)

import Task
import Stopwatch.Model exposing (Stopwatch, TrackTime)
import Stopwatch.Messages exposing (StopwatchMsg(..))


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


update : StopwatchMsg -> Stopwatch -> ( Stopwatch, Cmd StopwatchMsg )
update stopwatchMsg stopwatch =
    case stopwatchMsg of
        Tick _ ->
            let
                timeElapsed =
                    stopwatch.timeElapsed

                updatedTimeElapsed =
                    updateTrackTime timeElapsed

                currentLap =
                    stopwatch.currentLap

                updatedLapTime=
                    updateTrackTime currentLap

            in
                ( { stopwatch
                    | timeElapsed = updatedTimeElapsed
                    , currentLap = updatedLapTime
                  }
                , Cmd.none
                )

        ToggleIsRunning ->
            ( { stopwatch | isRunning = not stopwatch.isRunning }, Cmd.none )

        Lap ->
            ( { stopwatch
                | laps = stopwatch.currentLap :: stopwatch.laps
                , currentLap = { hour = 0, minute = 0, second = 0 }
              }
            , Cmd.none
            )

        Reset ->
            ( { stopwatch
                | isRunning = False
                , timeElapsed =
                    { hour = 0
                    , minute = 0
                    , second = 0
                    }
                , currentLap =
                    { hour = 0
                    , minute = 0
                    , second = 0
                    }
                , laps = []
              }
            , Cmd.none
            )
