module Timer.View exposing (..)

import Html exposing (..)
import Html.Events exposing (onClick, onInput)
import Html.Attributes exposing (..)
import Timer.Model exposing (Timer, TrackTime)
import Timer.Messages exposing (TimerMsg(..))
import Timer.Utils.Format exposing (..)

generateDigitInputBoxes : Timer -> Html TimerMsg
generateDigitInputBoxes timer =
    h3 [ class "timestamp" ] [
        input [ (onInput SetHour), class "digit-box", type_ "text", placeholder "00", maxlength 2 ] []
        , text ":"
        , input [ (onInput SetMinute), class "digit-box", type_ "text", placeholder "00", maxlength 2 ] []
        , text ":"
        , input [ (onInput SetSecond), class "digit-box", type_ "text", placeholder "00", maxlength 2 ] []
    ]

generateTimestamp : Timer -> Html TimerMsg
generateTimestamp timer =
    if timer.isSet then
        h3 [ class "timestamp" ] [ text (formatHMS timer.timeRemaining) ]
    else
        (generateDigitInputBoxes timer)

generateStartStopButton : Timer -> Html TimerMsg
generateStartStopButton timer =
    if timer.isSet then
        if timer.isRunning then
            button [ onClick ToggleIsRunning, class "red-button" ] [ text "Stop" ]
        else
            button [ onClick ToggleIsRunning, class "green-button" ] [ text "Start" ]
    else
        button [ class "green-button inactive" ] [ text "Start" ]

showAlarm : Bool -> String
showAlarm isActive =
    if isActive then
        "Time Up!"
    else
        ""

view : Timer -> Html TimerMsg
view timer =
    div [ class "widget timer-widget" ]
        [ (generateTimestamp timer)
        , div [ class "flex-button-group" ]
              [ button [ onClick Reset, class "default-button" ] [ text "Reset" ]
              , generateStartStopButton timer
              ]
        ]
