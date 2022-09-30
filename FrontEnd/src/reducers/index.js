import { combineReducers } from "redux";


import fetchUserReducer from "./fetchUserReducer";
import confrimSurveyReducer from "./confrimSurveyReducer";
import surveyReducer from "./surveyReducer";
import {reducer as FormReducer} from "redux-form";

export default combineReducers({
    Current_User : fetchUserReducer,
    ConfrimSurvey : confrimSurveyReducer,
    Surveys : surveyReducer,
    form : FormReducer
})