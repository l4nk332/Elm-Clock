module Stopwatch.Utils.Format exposing (..)

import Stopwatch.Model exposing (TrackTime)

formatHMS : TrackTime -> String
formatHMS timeElapsed =
    let
        hour = timeElapsed.hour
        minute = timeElapsed.minute
        second = timeElapsed.second
    in
        (toString hour) ++ ":" ++ (toString minute) ++ ":" ++ (toString second)
