module Stopwatch.Messages exposing (StopwatchMsg(..))

import Time exposing (Time)


type StopwatchMsg
    = Tick Time
    | ToggleIsRunning
    | AddLap Time
