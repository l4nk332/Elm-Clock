module Clock.Subscriptions exposing (subscriptions)

import Time
import Clock.Model exposing (Clock)
import Clock.Messages exposing (Msg(..))

subscriptions : Clock -> Sub Msg
subscriptions clock =
    Time.every Time.second Tick
