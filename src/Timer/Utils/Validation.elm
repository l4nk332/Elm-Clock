module Timer.Utils.Validation exposing (..)

import Timer.Model exposing (TrackTime)


trackTimeIsValid : TrackTime -> Bool
trackTimeIsValid trackTime =
    let
        hourIsValid =
            (trackTime.hour >= 0 && trackTime.hour <= 24)

        minuteIsValid =
            (trackTime.minute >= 0 && trackTime.minute <= 59)

        secondIsValid =
            (trackTime.second >= 0 && trackTime.second <= 59)

        timeIsNotZero =
            (trackTime.hour > 0) || (trackTime.minute > 0) || (trackTime.second > 0)
    in
        (hourIsValid && minuteIsValid && secondIsValid && timeIsNotZero)
