module Messages exposing (Msg(..), Widget(..))

import Clock.Messages exposing (ClockMsg(..))
import Stopwatch.Messages exposing (StopwatchMsg(..))
import Timer.Messages exposing (TimerMsg(..))

type Widget = ClockWidget
            | StopwatchWidget
            | TimerWidget

type Msg
    = RouteClock ClockMsg
    | RouteStopwatch StopwatchMsg
    | RouteTimer TimerMsg
    | Activate Widget
