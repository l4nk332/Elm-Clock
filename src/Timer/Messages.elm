module Timer.Messages exposing (TimerMsg(..))

import Time exposing (Time)

type TimerMsg
    = Tick Time
    | ToggleIsRunning
    | Reset
    | TimeUp
