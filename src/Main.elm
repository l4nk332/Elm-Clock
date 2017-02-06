module Main exposing (main)

import Model exposing (Model, initialModel)
import View exposing (view)
import Update exposing (update)
import Subscriptions exposing (subscriptions)
import Messages exposing (Msg(..))
import Html exposing (program)


main : Program Never Model Msg
main =
    program
        { init = initialModel
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
