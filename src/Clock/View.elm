module Clock.View exposing (view)

import Html exposing (Html, div, h3, span, text)
import Html.Attributes exposing (class)
import Clock.Model exposing (Clock)
import Clock.Messages exposing (ClockMsg(..))


view : Clock -> Html ClockMsg
view clock =
    div [ class "widget clock-widget" ]
        [ h3 [ class "timestamp" ]
            [ span [ class "clock-time" ] [ text (clock.hours ++ ":" ++ clock.minutes ++ ":" ++ clock.seconds ++ " ") ]
            , span [ class "meridien" ] [ text clock.meridien ]
            ]
        ]
