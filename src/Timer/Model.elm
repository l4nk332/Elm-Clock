module Timer.Model exposing (..)


type alias TrackTime =
    { hour : Int
    , minute : Int
    , second : Int
    }

type alias Timer =
    { isRunning : Bool
    , alarm : Bool
    , timeSet : TrackTime
    , timeRemaining : TrackTime
    }

initialTimer : Timer
initialTimer =
    { isRunning = False
    , alarm = False
    , timeSet =
        { hour = 0
        , minute = 1
        , second = 0
        }
    , timeRemaining =
        { hour = 0
        , minute = 1
        , second = 0
        }
    }
