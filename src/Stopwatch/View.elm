module Stopwatch.View exposing (..)

import Html exposing (Html, h1, div, ul, li, button, text)
import Html.Events exposing (onClick)
import Stopwatch.Model exposing (Stopwatch)
import Stopwatch.Messages exposing (StopwatchMsg(..))


showStartStop : Stopwatch -> String
showStartStop stopwatch =
    if stopwatch.isRunning then
        "Stop"
    else
        "Start"

showLap : Float -> Html StopwatchMsg
showLap lap =
    li [] [ text (toString lap) ]

showLaps : List Float -> Html StopwatchMsg
showLaps laps =
    ul [] (List.map showLap laps)


view : Stopwatch -> Html StopwatchMsg
view stopwatch =
    div []
        [ h1 [] [ text (toString (stopwatch.timeElapsed)) ]
        , button [ onClick ToggleIsRunning ] [ text (showStartStop stopwatch) ]
        , button [ onClick Reset ] [ text "Reset" ]
        , button [ onClick Lap ] [ text "Lap" ]
        , showLaps stopwatch.laps
        ]
