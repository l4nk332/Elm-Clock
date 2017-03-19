module Clock.Utils exposing (..)


convertTo12HourTime : Int -> Int
convertTo12HourTime hour =
    if hour == 24 then
        12
    else if hour > 12 then
        hour % 12
    else
        hour


padWithZero : String -> String
padWithZero string =
    if String.length string == 1 then
        String.cons '0' string
    else
        string


determineMeridien : Int -> String
determineMeridien hour =
    if hour > 11 && hour < 24 then
        "PM"
    else
        "AM"
