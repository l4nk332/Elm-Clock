module Messages exposing (Msg(..))

import Clock.Messages exposing (ClockMsg(..))
import Stopwatch.Messages exposing (StopwatchMsg(..))
import Timer.Messages exposing (TimerMsg(..))

type Msg
    = RouteClock ClockMsg
    | RouteStopwatch StopwatchMsg
    | RouteTimer TimerMsg
