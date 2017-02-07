module Clock.View exposing (view)

import Html exposing (Html, div, text)
import Clock.Model exposing (Clock)
import Clock.Messages exposing (ClockMsg(..))

view : Clock -> Html ClockMsg
view clock =
    div [] [ text (clock.hours ++ ":" ++ clock.minutes ++ ":" ++ clock.seconds ++ " " ++ clock.meridiem ) ]
