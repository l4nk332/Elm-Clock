module Stopwatch.View exposing (..)

import Html exposing (Html, h3, div, ul, li, span, button, text)
import Html.Events exposing (onClick)
import Html.Attributes exposing (class)
import Stopwatch.Model exposing (Stopwatch, TrackTime)
import Stopwatch.Messages exposing (StopwatchMsg(..))
import Stopwatch.Utils.Format exposing (formatHMS)
import Stopwatch.Utils.Validation exposing (stopwatchHasNotStarted)


generateStopwatchButtons : Stopwatch -> List (Html StopwatchMsg)
generateStopwatchButtons stopwatch =
    if stopwatch.isRunning then
        [ button [ class "default-button", onClick Lap ] [ text "Lap" ]
        , button [ class "red-button", onClick ToggleIsRunning ] [ text "Stop" ]
        ]
    else if stopwatchHasNotStarted (stopwatch) then
        [ button [ class "default-button disabled" ] [ text "Reset" ]
        , button [ class "green-button", onClick ToggleIsRunning ] [ text "Start" ]
        ]
    else
        [ button [ class "default-button", onClick Reset ] [ text "Reset" ]
        , button [ class "green-button", onClick ToggleIsRunning ] [ text "Start" ]
        ]


generateLapListItem : Int -> TrackTime -> Html StopwatchMsg
generateLapListItem index lap =
    li []
        [ span [] [ text ("Lap " ++ toString (index + 1)) ]
        , span [] [ text (formatHMS lap) ]
        ]


generateLapsList : List TrackTime -> Html StopwatchMsg
generateLapsList laps =
    ul [ class "lap-list" ]
        (laps
            |> List.reverse
            |> List.indexedMap generateLapListItem
            |> List.reverse
        )


view : Stopwatch -> Html StopwatchMsg
view stopwatch =
    div [ class "widget stopwatch-widget" ]
        [ h3 [ class "timestamp" ] [ text (formatHMS stopwatch.timeElapsed) ]
        , div [ class "flex-button-group" ] (generateStopwatchButtons stopwatch)
        , generateLapsList (stopwatch.currentLap :: stopwatch.laps)
        ]
