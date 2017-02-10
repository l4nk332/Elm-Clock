module Stopwatch.View exposing (..)

import Html exposing (Html, h1, div, button, text)
import Html.Events exposing (onClick)
import Time
import Stopwatch.Model exposing (Stopwatch)
import Stopwatch.Messages exposing (StopwatchMsg(..))


view : Stopwatch -> Html StopwatchMsg
view stopwatch =
    div []
        [ h1 [] [ text (toString (stopwatch.time)) ]
        , button [ onClick ToggleIsRunning ] [ text "Toggle" ]
        , button [ onClick Lap ] [ text "Lap" ]
        , button [ onClick Reset ] [ text "Reset" ]
        ]
