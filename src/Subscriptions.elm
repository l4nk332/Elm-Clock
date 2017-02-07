module Subscriptions exposing (subscriptions)

import Model exposing (Model)
import Messages exposing (Msg(..))
import Clock.Subscriptions


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.map RouteClock (Clock.Subscriptions.subscriptions model.clockWidget)
