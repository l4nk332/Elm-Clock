module Timer.View exposing (..)

import Html exposing (Html, h3, div, p, button, text)
import Html.Events exposing (onClick)
import Html.Attributes exposing (class)
import Timer.Model exposing (Timer, TrackTime)
import Timer.Messages exposing (TimerMsg(..))
import Timer.Utils.Format exposing (..)


generateStartStopButton : Timer -> Html TimerMsg
generateStartStopButton timer =
    if timer.isRunning then
        button [ onClick ToggleIsRunning, class "red-button" ] [ text "Stop" ]
    else
        button [ onClick ToggleIsRunning, class "green-button" ] [ text "Start" ]

showAlarm : Bool -> String
showAlarm isActive =
    if isActive then
        "Time Up!"
    else
        ""

view : Timer -> Html TimerMsg
view timer =
    div [ class "widget timer-widget" ]
        [ h3 [ class "timestamp" ] [ text (formatHMS timer.timeRemaining) ]
        , div [ class "flex-button-group" ]
              [ button [ onClick Reset, class "default-button" ] [ text "Reset" ]
              , generateStartStopButton timer
              ]
        ]
