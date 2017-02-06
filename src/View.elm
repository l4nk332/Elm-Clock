module View exposing (view)

import Model exposing (Model)
import Html exposing (Html, text)
import Messages exposing (Msg(..))

view : Model -> Html Msg
view model =
    text (toString (model.hours) ++ ":" ++ toString (model.minutes) ++ ":" ++ toString (model.seconds))
