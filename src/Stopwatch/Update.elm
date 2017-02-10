module Stopwatch.Update exposing (..)

import Task
import Time
import Stopwatch.Model exposing (Stopwatch)
import Stopwatch.Messages exposing (StopwatchMsg(..))

update : StopwatchMsg -> Stopwatch -> ( Stopwatch, Cmd StopwatchMsg )
update stopwatchMsg stopwatch =
    case stopwatchMsg of
        Tick time ->
            { stopwatch | time = Just time }

        ToggleIsRunning ->
            { stopwatch | isRunning = not stopwatch.isRunning }

        Lap ->
            Task.perform AddLap Time.now

        AddLap time ->
            { stopwatch | laps = time :: stopwatch.laps }

        Reset ->
            { stopwatch
            | isRunning = False
            , time = Nothing
            , laps = []
            }
