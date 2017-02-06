module Update exposing (update)

import Messages exposing (Msg(..))
import Model exposing (Model)
import Clock.Update
import Clock.Messages

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        RouteClock clockMsg ->
            { model | clockClock.Update.update clockMsg }
