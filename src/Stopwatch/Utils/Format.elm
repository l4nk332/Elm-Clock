module Stopwatch.Utils.Format exposing (..)

import Stopwatch.Model exposing (TrackTime)


leftPadWithZero : Int -> String
leftPadWithZero n =
    if n < 10 then
        String.padLeft 2 '0' (toString n)
    else
        toString n

formatHMS : TrackTime -> String
formatHMS timeElapsed =
    let
        hour = timeElapsed.hour
        minute = timeElapsed.minute
        second = timeElapsed.second
    in
        (leftPadWithZero hour) ++ ":" ++ (leftPadWithZero minute) ++ ":" ++ (leftPadWithZero second)
