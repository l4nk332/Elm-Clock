module Stopwatch.Model exposing (..)

import Time exposing (Time)


type alias Stopwatch =
    { isRunning : Bool
    , time : Maybe Time
    , laps : List Time
    }

initialStopwatch : Stopwatch
initialStopwatch =
    { isRunning = False
    , time : Nothing
    , laps : []
    }
