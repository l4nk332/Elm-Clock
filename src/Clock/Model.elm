module Clock.Model exposing (Clock, initialClock)

type alias Clock = {
    hours : String,
    minutes : String,
    seconds : String,
    meridien : String
}

initialClock : Clock
initialClock =
    { hours = ""
    , minutes = ""
    , seconds = ""
    , meridien = ""
    }
