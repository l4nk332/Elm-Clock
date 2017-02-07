module Messages exposing (Msg(..))

import Clock.Messages exposing (ClockMsg(..))

type Msg
    = RouteClock ClockMsg
