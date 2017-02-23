module Model exposing (..)

import Messages exposing (Msg(..))
import Clock.Model exposing (Clock, initialClock)
import Stopwatch.Model exposing (Stopwatch, initialStopwatch)
import Timer.Model exposing (Timer, initialTimer)


type alias Model =
    { clockWidget : Clock
    , stopwatchWidget : Stopwatch
    , timerWidget : Timer
    }


model : Model
model =
    { clockWidget = initialClock
    , stopwatchWidget = initialStopwatch
    , timerWidget = initialTimer
    }


initialModel : ( Model, Cmd Msg )
initialModel =
    ( model, Cmd.none )
