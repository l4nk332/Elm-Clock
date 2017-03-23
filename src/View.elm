module View exposing (view)

import Model exposing (Model)
import Html exposing (Html, div, button, span, i, text)
import Html.Events exposing (onClick)
import Html.Attributes exposing (class)
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

generateWidgetSwitches : Model -> List (Html Msg)
generateWidgetSwitches model =
    case model.activeWidget of
        ClockWidget ->
            [ div [ onClick (Activate ClockWidget), class "widget-switch" ]
                [ i [ class "material-icons widget-switch-icon" ] [ text "access_time"]
                , span [ class "widget-switch-text" ] [ text "Clock" ]
                ]
            , div [ onClick (Activate TimerWidget), class "widget-switch inactive" ]
                [ i [ class "material-icons widget-switch-icon" ] [ text "av_timer" ]
                , span [ class "widget-switch-text" ] [ text "Timer" ]
                ]
            , div [ onClick (Activate StopwatchWidget), class "widget-switch inactive" ]
                [ i [ class "material-icons widget-switch-icon" ] [ text "timer" ]
                , span [ class "widget-switch-text" ] [ text "Stopwatch" ]
                ]
            ]

        StopwatchWidget ->
            [ div [ onClick (Activate ClockWidget), class "widget-switch inactive" ]
                [ i [ class "material-icons widget-switch-icon" ] [ text "access_time" ]
                , span [ class "widget-switch-text" ] [ text "Clock" ]
                ]
            , div [ onClick (Activate TimerWidget), class "widget-switch inactive" ]
                [ i [ class "material-icons widget-switch-icon" ] [ text "av_timer" ]
                , span [ class "widget-switch-text" ] [ text "Timer" ]
                ]
            , div [ onClick (Activate StopwatchWidget), class "widget-switch" ]
                [ i [ class "material-icons widget-switch-icon" ] [ text "timer" ]
                , span [ class "widget-switch-text" ] [ text "Stopwatch" ]
                ]
            ]

        TimerWidget ->
            [ div [ onClick (Activate ClockWidget), class "widget-switch inactive" ]
                [ i [ class "material-icons widget-switch-icon" ] [ text "access_time" ]
                , span [ class "widget-switch-text" ] [ text "Clock" ]
                ]
            , div [ onClick (Activate TimerWidget), class "widget-switch" ]
                [ i [ class "material-icons widget-switch-icon" ] [ text "av_timer" ]
                , span [ class "widget-switch-text" ] [ text "Timer" ]
                ]
            , div [ onClick (Activate StopwatchWidget), class "widget-switch inactive" ]
                [ i [ class "material-icons widget-switch-icon" ] [ text "timer" ]
                , span [ class "widget-switch-text" ] [ text "Stopwatch" ]
                ]
            ]

view : Model -> Html Msg
view model =
    div [ class "widget-container" ] [
        (displayActiveWidget model)
        , div [ class "widget-switch-group" ] (generateWidgetSwitches model)
    ]
