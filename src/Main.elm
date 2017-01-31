module Main exposing (main)

import Html exposing (Html, program, text)


-- Model


type alias Model =
    { hours : Float
    , minutes : Float
    , seconds : Float
    }


model : Model
model =
    { hours = 10
    , minutes = 6
    , seconds = 55
    }


initialModel : ( Model, Cmd Msg )
initialModel =
    ( model, Cmd.none )



-- Update


type Msg
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )



-- View


view : Model -> Html Msg
view model =
    text (toString (model.hours) ++ ":" ++ toString (model.minutes) ++ ":" ++ toString (model.seconds))



-- Subscriptions


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


main : Program Never Model Msg
main =
    program
        { init = initialModel
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
