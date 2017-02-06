module Clock.Update exposing (update)

import Date
import Clock.Model exposing (Clock)
import Clock.Messages exposing (Msg(..))


update : Clock -> Msg -> Clock Msg
update clock msg =
    case msg of
        Tick timeInSeconds ->
            let
                date =
                    Date.fromTime timeInSeconds

                hours =
                    toString(Date.hour date)

                minutes =
                    toString(Date.minute date)

                seconds =
                    toString(Date.second date)
            in
                { clock | hours = hours, minutes = minutes, seconds = seconds }
