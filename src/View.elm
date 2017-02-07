module View exposing (view)

import Model exposing (Model)
import Html exposing (Html, div)
import Messages exposing (Msg(..))
import Clock.View

view : Model -> Html Msg
view model =
    div [] [ Html.map RouteClock (Clock.View.view model.clockWidget) ]
