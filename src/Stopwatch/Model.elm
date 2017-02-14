module Stopwatch.Model exposing (..)


type alias TrackTime =
    { hour: Int
    , minute: Int
    , second: Int
    }

type alias Stopwatch =
    { isRunning : Bool
    , timeElapsed : TrackTime
    , laps : List TrackTime
    }

initialStopwatch : Stopwatch
initialStopwatch =
    { isRunning = False
    , timeElapsed =
        { hour = 0
        , minute = 0
        , second = 0
        }
    , laps = []
    }
