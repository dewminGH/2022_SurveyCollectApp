import axios from "axios";
import { Fetch_User , Log_In, Log_Out , Confirm_CreateSurvey , Surveys} from "../types/types";

export const confrimCreateSurvey = (confrim)=>{
    return {type : Confirm_CreateSurvey , payload : confrim}
}

export const fetchUser = ()=> async dispatch =>{
    const response=await axios.get('/api/current');
    dispatch({type : Fetch_User , payload : response.data});
}

export const Logout = ()=> async dispatch =>{
    dispatch({type : Log_Out});
    dispatch(fetchUser());
}

export const Login = ()=> async dispatch =>{
    dispatch({type : Log_In})
    dispatch(fetchUser());
}


export const handleToken = token => async dispatch =>{
    const response=await axios.post('/api/stripe' , token);
    dispatch({type : Fetch_User , payload : response.data});
}


export const CreateNewSurvey = 
({survey_title, survey_email_subject, survey_email_body, survey_recipients}) => async dispatch =>{
    const survey ={
        title : survey_title,
        subject : survey_email_subject,
        body : survey_email_body,
        recipients : survey_recipients
    }
    const response=await axios.post('/api/surveys' , survey);
    dispatch({type : Fetch_User , payload : response.data});
}

export const fetchSurveys= ()=> async dispatch=>{
    const response=await axios.get('/api/surveys');
    dispatch({type : Surveys , payload : response.data})
}