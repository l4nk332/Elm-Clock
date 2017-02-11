module Stopwatch.Model exposing (..)


type alias Stopwatch =
    { isRunning : Bool
    , timeElapsed : Float
    , laps : List Float
    }

initialStopwatch : Stopwatch
initialStopwatch =
    { isRunning = False
    , timeElapsed = 0
    , laps = []
    }
