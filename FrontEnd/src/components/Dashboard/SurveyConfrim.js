import React from "react";
import {connect} from "react-redux";
import '../../css/createConfirm.css';
import history from '../../history';
import {confrimCreateSurvey , CreateNewSurvey} from '../../actions/index';

const SurveyConfrim = ({formData,confrimCreateSurvey,CreateNewSurvey}) =>{

    if(!formData){
     history.push('/');
    }

    const ConfrimOnClick=()=>{
        confrimCreateSurvey(false);
        CreateNewSurvey(formData);
        history.push('/surveys/dashboard');
    }

    const RenderRecords=({name,value})=>{
    return(
            <div className="row">
                 <div className="confirm-input-field col s12">
                 <input disabled value={`${value}`} id="disabled" type="text" className=""/>
                 <label htmlFor="disabled" className=" confirm-input-lebal">{name}</label>
                 </div>
            </div>
    )
   }

    return(
        <div className="createConfrim-survey ">
        <h1 className="surveyConfrim-header">Summury of Your Servey</h1>
        <div className="row form-wapper">
        <form className="col s10">
               <RenderRecords name='Title of Survey' value={formData.survey_title}/>
               <RenderRecords name='Subject of the Emails' value={formData.survey_email_subject}/>
               <RenderRecords name='Email Messege' value={formData.survey_email_body}/>
               <RenderRecords name='Recipients (pepole who revice your E-mails) ' value={formData.survey_recipients}/>     

               <button className="btn waves-effect waves-light" style={{position: 'inherit'}}
               to="/surveys/dashboard" onClick={()=>ConfrimOnClick()}>Confirm
               <i className="material-icons right">send</i>
               </button>   
        </form>
        </div>
        </div>
    )
}

export default connect (null, {confrimCreateSurvey,CreateNewSurvey}) (SurveyConfrim);