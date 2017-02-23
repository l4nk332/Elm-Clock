module Timer.View exposing (..)

import Html exposing (Html, h1, div, p, button, text)
import Html.Events exposing (onClick)
import Timer.Model exposing (Timer, TrackTime)
import Timer.Messages exposing (TimerMsg(..))
import Timer.Utils.Format exposing (..)


showStartStop : Timer -> String
showStartStop timer =
    if timer.isRunning then
        "Stop"
    else
        "Start"

showAlarm : Bool -> String
showAlarm isActive =
    if isActive then
        "Time Up!"
    else
        ""

view : Timer -> Html TimerMsg
view timer =
    div []
        [ h1 [] [ text (formatHMS timer.timeRemaining) ]
        , button [ onClick ToggleIsRunning ] [ text (showStartStop timer) ]
        , button [ onClick Reset ] [ text "Reset" ]
        , p [] [ text (showAlarm timer.alarm) ]
        ]
