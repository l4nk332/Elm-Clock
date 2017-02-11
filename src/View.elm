module View exposing (view)

import Model exposing (Model)
import Html exposing (Html, div)
import Messages exposing (Msg(..))
import Clock.View
import Stopwatch.View

view : Model -> Html Msg
view model =
    div []
        [ Html.map RouteClock (Clock.View.view model.clockWidget)
        , Html.map RouteStopwatch (Stopwatch.View.view model.stopwatchWidget)
        ]
