module Messages exposing (Msg(..))

import Clock.Messages

type Msg
    = RouteClock Clock.Messages.Msg
