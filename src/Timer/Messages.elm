module Timer.Messages exposing (TimerMsg(..))

import Time exposing (Time)


type TimerMsg
    = Tick Time
    | StartRunning
    | ToggleIsRunning
    | Reset
    | TimeUp
    | SetHour String
    | SetMinute String
    | SetSecond String
