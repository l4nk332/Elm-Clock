module Stopwatch.Update exposing (..)

import Task
import Time
import Stopwatch.Model exposing (Stopwatch)
import Stopwatch.Messages exposing (StopwatchMsg(..))


update : StopwatchMsg -> Stopwatch -> ( Stopwatch, Cmd StopwatchMsg )
update stopwatchMsg stopwatch =
    case stopwatchMsg of
        Tick time ->
            ( { stopwatch | time = Just time }, Cmd.none )

        ToggleIsRunning ->
            ( { stopwatch | isRunning = not stopwatch.isRunning }, Cmd.none )

        Lap ->
            ( stopwatch, Task.perform AddLap Time.now )

        AddLap time ->
            ( { stopwatch | laps = time :: stopwatch.laps }, Cmd.none )

        Reset ->
            ( { stopwatch
                | isRunning = False
                , time = Nothing
                , laps = []
              }
            , Cmd.none
            )
