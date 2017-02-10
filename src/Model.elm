module Model exposing (..)

import Messages exposing (Msg(..))
import Clock.Model exposing (Clock, initialClock)
import Stopwatch.Model exposing (Stopwatch, initialStopwatch)


type alias Model =
    { clockWidget : Clock
    , stopwatchWidget : Stopwatch
    }


model : Model
model =
    { clockWidget = initialClock
    , stopwatchWidget = initialStopwatch
    }


initialModel : ( Model, Cmd Msg )
initialModel =
    ( model, Cmd.none )
