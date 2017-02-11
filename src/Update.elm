module Update exposing (update)

import Messages exposing (Msg(..))
import Model exposing (Model)
import Clock.Update
import Clock.Messages
import Stopwatch.Update
import Stopwatch.Messages


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        RouteClock clockMsg ->
            ( { model | clockWidget = (Clock.Update.update clockMsg model.clockWidget) }
            , Cmd.none
            )

        RouteStopwatch stopwatchMsg ->
            let
                (stopwatchModel, childMsg) = Stopwatch.Update.update stopwatchMsg model.stopwatchWidget
            in
                ( { model | stopwatchWidget = stopwatchModel }, Cmd.map RouteStopwatch childMsg )
