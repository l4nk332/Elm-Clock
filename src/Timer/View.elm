module Timer.View exposing (..)

import Html exposing (Html, h1, div, ul, li, button, text)
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

showLap : TrackTime -> Html TimerMsg
showLap lap =
    li [] [ text (formatHMS lap) ]

showLaps : List TrackTime -> Html TimerMsg
showLaps laps =
    ul [] (List.map showLap laps)


view : Timer -> Html TimerMsg
view timer =
    div []
        [ h1 [] [ text (formatHMS timer.timeElapsed) ]
        , button [ onClick ToggleIsRunning ] [ text (showStartStop timer) ]
        , button [ onClick Reset ] [ text "Reset" ]
        ]
