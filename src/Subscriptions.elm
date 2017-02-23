module Subscriptions exposing (subscriptions)

import Model exposing (Model)
import Messages exposing (Msg(..))
import Clock.Subscriptions
import Stopwatch.Subscriptions
import Timer.Subscriptions


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch [
        Sub.map RouteClock (Clock.Subscriptions.subscriptions model.clockWidget)
        , Sub.map RouteStopwatch (Stopwatch.Subscriptions.subscriptions model.stopwatchWidget)
        , Sub.map RouteTimer (Timer.Subscriptions.subscriptions model.timerWidget)
    ]
