module Stopwatch.Subscriptions exposing (subscriptions)

import Time
import Stopwatch.Model exposing (Stopwatch)
import Stopwatch.Messages exposing (StopwatchMsg(..))

subscriptions : Stopwatch -> Sub StopwatchMsg
subscriptions stopwatch =
    if stopwatch.isRunning then
        Time.every Time.millisecond Tick
    else
        Sub.none
