module Clock.Subscriptions exposing (subscriptions)

import Time
import Clock.Model exposing (Clock)
import Clock.Messages exposing (ClockMsg(..))


subscriptions : Clock -> Sub ClockMsg
subscriptions clock =
    Time.every Time.second Tick
