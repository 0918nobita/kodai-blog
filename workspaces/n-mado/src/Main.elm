module Main exposing (main)

import Browser exposing (element)
import Counter
import Form
import GetText
import Html exposing (Html, div)
import Reverser


main : Program () Model Msg
main =
    element
        { init = init
        , update = update
        , subscriptions = subscriptions
        , view = view
        }


type alias Model =
    { counter : Counter.Model
    , reverser : Reverser.Model
    , form : Form.Model
    , getText : GetText.Model
    }


init : () -> ( Model, Cmd Msg )
init _ =
    let
        ( model, cmd ) =
            GetText.init ()
    in
    ( { counter = Counter.init
      , reverser = Reverser.init
      , form = Form.init
      , getText = model
      }
    , Cmd.map GetTextMsg cmd
    )


type Msg
    = CounterMsg Counter.Msg
    | ReverserMsg Reverser.Msg
    | FormMsg Form.Msg
    | GetTextMsg GetText.Msg


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        CounterMsg counterMsg ->
            let
                newCounterModel =
                    Counter.update counterMsg model.counter
            in
            ( { model | counter = newCounterModel }, Cmd.none )

        ReverserMsg reverserMsg ->
            let
                newReverserModel =
                    Reverser.update reverserMsg model.reverser
            in
            ( { model | reverser = newReverserModel }, Cmd.none )

        FormMsg formMsg ->
            let
                newFormModel =
                    Form.update formMsg model.form
            in
            ( { model | form = newFormModel }, Cmd.none )

        GetTextMsg getTextMsg ->
            let
                ( newModel, cmd ) =
                    GetText.update getTextMsg model.getText
            in
            ( { model | getText = newModel }, Cmd.map GetTextMsg cmd )


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none


view : Model -> Html Msg
view model =
    div []
        [ Counter.view model.counter |> Html.map CounterMsg
        , Reverser.view model.reverser |> Html.map ReverserMsg
        , Form.view model.form |> Html.map FormMsg
        , GetText.view model.getText |> Html.map GetTextMsg
        ]
