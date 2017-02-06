module Model exposing (..)

import Messages exposing (Msg(..))
import Clock.Model exposing (Clock, intialClock)

type alias Model =
    { clockWidget : Clock }


model : Model
model =
    { clockWidget = initialClock }


initialModel : ( Model, Cmd Msg )
initialModel =
    ( model, Cmd.none )
