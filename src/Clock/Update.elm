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
                    date
                        |> Date.hour
                        |> determineMeridien

                hours =
                    date
                        |> Date.hour
                        |> convertTo12HourTime
                        |> toString
                        |> padWithZero

                minutes =
                    date
                        |> Date.minute
                        |> toString
                        |> padWithZero

                seconds =
                    date
                        |> Date.second
                        |> toString
                        |> padWithZero
            in
                { clock
                    | hours = hours
                    , minutes = minutes
                    , seconds = seconds
                    , meridien = meridien
                }
