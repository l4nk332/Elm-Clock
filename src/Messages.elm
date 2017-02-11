module Messages exposing (Msg(..))

import Clock.Messages exposing (ClockMsg(..))
import Stopwatch.Messages exposing (StopwatchMsg(..))

type Msg
    = RouteClock ClockMsg
    | RouteStopwatch StopwatchMsg
