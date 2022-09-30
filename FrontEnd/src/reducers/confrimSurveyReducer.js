import { Confirm_CreateSurvey } from '../types/types';

const  confrimSurveyReducer = (state=false , action)=>{
    if(action.type===Confirm_CreateSurvey)
    return action.payload;
    return state;
}

export default confrimSurveyReducer;