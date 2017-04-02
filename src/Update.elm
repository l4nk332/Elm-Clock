module Update exposing (update)

import Messages exposing (Msg(..), Widget(..))
import Model exposing (Model)
import Clock.Update
import Stopwatch.Update
import Timer.Update


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        RouteClock clockMsg ->
            ( { model | clockWidget = (Clock.Update.update clockMsg model.clockWidget) }
            , Cmd.none
            )

        RouteStopwatch stopwatchMsg ->
            let
                ( stopwatchModel, childMsg ) =
                    Stopwatch.Update.update stopwatchMsg model.stopwatchWidget
            in
                ( { model | stopwatchWidget = stopwatchModel }, Cmd.map RouteStopwatch childMsg )

        RouteTimer timerMsg ->
            let
                ( timerModel, childMsg ) =
                    Timer.Update.update timerMsg model.timerWidget
            in
                ( { model | timerWidget = timerModel }, Cmd.map RouteTimer childMsg )

        Activate widget ->
            ( { model | activeWidget = widget }, Cmd.none )
