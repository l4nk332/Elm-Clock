module Stopwatch.Utils.Format exposing (..)

import Time

formatHMS : Float -> String
formatHMS elapsedInMs =
    let
        hour = floor (Time.inHours elapsedInMs)
        timeRemainingA = elapsedInMs - (toFloat (hour * 3600000))
        minute = floor (Time.inMinutes timeRemainingA)
        timeRemainingB = timeRemainingA - (toFloat (minute * 60000))
        second = floor (Time.inSeconds timeRemainingB)
        timeRemainingC = timeRemainingB - (toFloat (second * 1000))
        millisecond = Time.inMilliseconds timeRemainingC
    in
        (toString hour) ++ ":" ++ (toString minute) ++ ":" ++ (toString second) ++ ":" ++ (toString millisecond)
