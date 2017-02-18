module Stopwatch.View exposing (..)

import Html exposing (Html, h1, div, ul, li, button, text)
import Html.Events exposing (onClick)
import Stopwatch.Model exposing (Stopwatch, TrackTime)
import Stopwatch.Messages exposing (StopwatchMsg(..))
import Stopwatch.Utils.Format exposing (..)


showStartStop : Stopwatch -> String
showStartStop stopwatch =
    if stopwatch.isRunning then
        "Stop"
    else
        "Start"

showLap : TrackTime -> Html StopwatchMsg
showLap lap =
    li [] [ text (formatHMS lap) ]

showLaps : List TrackTime -> Html StopwatchMsg
showLaps laps =
    ul [] (List.map showLap laps)


view : Stopwatch -> Html StopwatchMsg
view stopwatch =
    div []
        [ h1 [] [ text (formatHMS stopwatch.timeElapsed) ]
        , button [ onClick ToggleIsRunning ] [ text (showStartStop stopwatch) ]
        , button [ onClick Reset ] [ text "Reset" ]
        , button [ onClick Lap ] [ text "Lap" ]
        , showLaps (stopwatch.currentLap :: stopwatch.laps)
        ]
