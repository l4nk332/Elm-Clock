module Clock.Messages exposing (ClockMsg(..))

import Time exposing (Time)


type ClockMsg
    = Tick Time
