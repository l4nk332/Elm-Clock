module Timer.Subscriptions exposing (subscriptions)

import Time
import Timer.Model exposing (Timer)
import Timer.Messages exposing (TimerMsg(..))


subscriptions : Timer -> Sub TimerMsg
subscriptions timer =
    if timer.isRunning then
        Time.every Time.second Tick
    else
        Sub.none
