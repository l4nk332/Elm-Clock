module Stopwatch.Utils.Validation exposing (..)

import Stopwatch.Model exposing (Stopwatch)


stopwatchHasNotStarted : Stopwatch -> Bool
stopwatchHasNotStarted stopwatch =
    stopwatch.timeElapsed.hour == 0 && stopwatch.timeElapsed.minute == 0 && stopwatch.timeElapsed.second == 0
