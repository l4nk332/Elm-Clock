module Clock.Update exposing (update)

import Date
import Clock.Model exposing (Clock)
import Clock.Messages exposing (ClockMsg(..))
import Clock.Utils exposing (convertTo12HourTime, padWithZero, determineMeridien)


update : ClockMsg -> Clock -> Clock
update msg clock =
    case msg of
        Tick timeInSeconds ->
            let
                date =
                    Date.fromTime timeInSeconds

                meridien =
                    determineMeridien (Date.hour date)

                hours =
                    padWithZero (toString (convertTo12HourTime (Date.hour date)))

                minutes =
                    padWithZero (toString (Date.minute date))

                seconds =
                    padWithZero (toString (Date.second date))
            in
                { clock
                    | hours = hours
                    , minutes = minutes
                    , seconds = seconds
                    , meridien = meridien
                }
