module View exposing (view)

import Model exposing (Model)
import Html exposing (Html, div, button, text)
import Html.Events exposing (onClick)
import Messages exposing (Msg(..), Widget(..))
import Clock.View
import Stopwatch.View
import Timer.View

displayActiveWidget : Model -> Html Msg
displayActiveWidget model =
    case model.activeWidget of
        ClockWidget ->
            Html.map RouteClock (Clock.View.view model.clockWidget)

        StopwatchWidget ->
            Html.map RouteStopwatch (Stopwatch.View.view model.stopwatchWidget)

        TimerWidget ->
            Html.map RouteTimer (Timer.View.view model.timerWidget)

view : Model -> Html Msg
view model =
    div [] [
        div [] [
            displayActiveWidget model
        ]
        , div [] [
            button [ onClick (Activate ClockWidget) ] [ text "Clock" ]
            , button [ onClick (Activate StopwatchWidget) ] [ text "Stopwatch" ]
            , button [ onClick (Activate TimerWidget) ] [ text "Timer" ]
        ]
    ]
