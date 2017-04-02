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
        input [ (onInput SetHour), class "digit-box", type_ "text", maxlength 2 ] []
        , text ":"
        , input [ (onInput SetMinute), class "digit-box", type_ "text", maxlength 2 ] []
        , text ":"
        , input [ (onInput SetSecond), class "digit-box", type_ "text", maxlength 2 ] []
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
    else if trackTimeIsValid timer.timeSet then
        button [ class "green-button", onClick StartRunning ] [ text "Start" ]
    else
        button [ class "green-button inactive" ] [ text "Start" ]

generateWidgetClasses : Timer -> String
generateWidgetClasses timer =
    if timer.alarm then
        "widget timer-widget alarm"
    else
        "widget timer-widget"

generateAlarmAudio : Timer -> Html TimerMsg
generateAlarmAudio timer =
    if timer.alarm then
        audio [ src "alarm.mp3", autoplay True, loop True ] []
    else
        span [] []

view : Timer -> Html TimerMsg
view timer =
    div [ class (generateWidgetClasses timer) ]
        [ (generateTimestamp timer)
        , div [ class "flex-button-group" ]
              [ button [ onClick Reset, class "default-button" ] [ text "Reset" ]
              , generateStartStopButton timer
              ]
        , (generateAlarmAudio timer)
        ]
