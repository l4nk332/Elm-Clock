module Clock.Model exposing (Clock, initialClock)

type alias Clock = {
    hours: String,
    minutes: String,
    seconds: String
}

initialClock : Clock
initialClock clock =
    { hours = "0"
    , minutes = "0"
    , seconds = "0"
    }
