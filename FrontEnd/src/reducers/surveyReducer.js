import {Surveys} from '../types/types';
const surveyReducer = (state=null , action)=>{
    if(action.type===Surveys)
    return action.payload;
    return state;
}

export default surveyReducer;