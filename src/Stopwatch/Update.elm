module Stopwatch.Update exposing (..)

import Time
import Task
import Stopwatch.Model exposing (Stopwatch)
import Stopwatch.Messages exposing (StopwatchMsg(..))


update : StopwatchMsg -> Stopwatch -> ( Stopwatch, Cmd StopwatchMsg )
update stopwatchMsg stopwatch =
    case stopwatchMsg of
        Tick time ->
            let
                timeElapsed = stopwatch.timeElapsed + 1
            in
                ( { stopwatch | timeElapsed = timeElapsed  }, Cmd.none )

        ToggleIsRunning ->
            ( { stopwatch | isRunning = not stopwatch.isRunning }, Cmd.none )

        Lap ->
            ( stopwatch, Task.perform AddLap Time.now )

        AddLap time ->
            let
                lap = stopwatch.timeElapsed
            in
                ( { stopwatch | laps = lap :: stopwatch.laps }, Cmd.none )

        Reset ->
            ( { stopwatch
                | isRunning = False
                , timeElapsed = 0
                , laps = []
              }
            , Cmd.none
            )
