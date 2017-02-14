module Stopwatch.Update exposing (..)

import Task
import Stopwatch.Model exposing (Stopwatch, TrackTime)
import Stopwatch.Messages exposing (StopwatchMsg(..))



calculateOverflow : Int -> Int -> ( Int, Int )
calculateOverflow count limit =
    if count == limit then
        (0, 1)
    else
        (count, 0)


updateTrackTime : TrackTime -> ( Int, Int, Int )
updateTrackTime trackTime =
    let
        (s, sOverflow) = calculateOverflow (trackTime.second + 1) 60
        (m, mOverflow) = calculateOverflow (trackTime.minute + sOverflow) 60
        hr = trackTime.hour + mOverflow
    in
        ( hr, m, s )


update : StopwatchMsg -> Stopwatch -> ( Stopwatch, Cmd StopwatchMsg )
update stopwatchMsg stopwatch =
    case stopwatchMsg of
        Tick _ ->
            let
                ( hour
                , minute
                , second) = updateTrackTime stopwatch.timeElapsed
                timeElapsed = stopwatch.timeElapsed
                updatedTime =
                    { timeElapsed
                    | hour = hour
                    , minute = minute
                    , second = second
                    }
            in
                ( { stopwatch | timeElapsed = updatedTime }, Cmd.none )

        ToggleIsRunning ->
            ( { stopwatch | isRunning = not stopwatch.isRunning }, Cmd.none )

        Lap ->
            let
                lap = stopwatch.timeElapsed
            in
                ( { stopwatch | laps = lap :: stopwatch.laps }, Cmd.none )

        Reset ->
            ( { stopwatch
                | isRunning = False
                , timeElapsed =
                    { hour = 0
                    , minute = 0
                    , second = 0
                    }
                , laps = []
              }
            , Cmd.none
            )
