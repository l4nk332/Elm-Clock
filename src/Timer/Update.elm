module Timer.Update exposing (..)

import Task
import Time
import Timer.Model exposing (Timer, TrackTime)
import Timer.Messages exposing (TimerMsg(..))
import Timer.Utils.Format exposing (..)


calculateUnderflow : Int -> Int -> ( Int, Int )
calculateUnderflow count floor =
    if count < floor then
        ( 59, 1 )
    else
        ( count, 0 )

updateHourSet : String -> Timer -> TrackTime
updateHourSet userInput timer =
    let
        hourSet = Result.withDefault 0 (String.toInt userInput)
        timeSet = timer.timeSet
    in
        { timeSet | hour = hourSet }

updateMinuteSet : String -> Timer -> TrackTime
updateMinuteSet userInput timer =
    let
        minuteSet = Result.withDefault 0 (String.toInt userInput)
        timeSet = timer.timeSet
    in
        { timeSet | minute = minuteSet }

updateSecondSet : String -> Timer -> TrackTime
updateSecondSet userInput timer =
    let
        secondSet = Result.withDefault 0 (String.toInt userInput)
        timeSet = timer.timeSet
    in
        { timeSet | second = secondSet }



updateTrackTime : TrackTime -> TrackTime
updateTrackTime trackTime =
    let
        ( s, sUnderflow ) =
            calculateUnderflow (trackTime.second - 1) 0

        ( m, mUnderflow ) =
            calculateUnderflow (trackTime.minute - sUnderflow) 0

        hr =
            trackTime.hour - mUnderflow
    in
        { hour = hr
        , minute = m
        , second = s
        }

timerReachedZero : TrackTime -> Bool
timerReachedZero timer =
    (timer.hour == 0) && (timer.minute == 0) && (timer.second == 0)

toggleIsRunning : Timer -> Timer
toggleIsRunning timer =
    if timer.isSet then
        { timer | isRunning = not timer.isRunning, alarm = False }
    else if trackTimeIsValid timer.timeSet then
        { timer | timeRemaining = timer.timeSet, isSet = True, isRunning = True, alarm = False }
    else
        timer

update : TimerMsg -> Timer -> ( Timer, Cmd TimerMsg )
update timerMsg timer =
    case timerMsg of
        Tick _ ->
            let
                timeRemaining =
                    timer.timeRemaining

                updatedTimeRemaining =
                    updateTrackTime timeRemaining

                updatedTimer =
                    { timer | timeRemaining = updatedTimeRemaining }
            in
                if timerReachedZero updatedTimeRemaining then
                    update TimeUp updatedTimer
                else
                    (updatedTimer, Cmd.none)

        SetHour userInput ->
            ({ timer | timeSet = (updateHourSet userInput timer) }, Cmd.none)

        SetMinute userInput ->
            ({ timer | timeSet = (updateMinuteSet userInput timer) }, Cmd.none)

        SetSecond userInput ->
            ({ timer | timeSet = (updateSecondSet userInput timer) }, Cmd.none)

        StartRunning ->
            ({ timer | isSet = True, isRunning = True, timeRemaining = timer.timeSet }, Cmd.none)

        ToggleIsRunning ->
            ( toggleIsRunning timer, Cmd.none )

        Reset ->
            ( { timer
                | isRunning = False
                , isSet = False
                , alarm = False
                , timeSet =
                    { hour = 0
                    , minute = 0
                    , second = 0
                    }
                , timeRemaining =
                    { hour = 0
                    , minute = 0
                    , second = 0
                    }
              }
            , Cmd.none
            )

        TimeUp ->
            ( { timer | isRunning = False, alarm = True }, Cmd.none )
