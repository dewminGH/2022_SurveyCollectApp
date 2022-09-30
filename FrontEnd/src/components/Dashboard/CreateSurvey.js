import React,{Component} from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";

import SurveyConfrim from "./SurveyConfrim";
import '../../css/createsurvey.css';
import {confrimCreateSurvey as confrimCreateSurveyAction} from '../../actions/index';
import validateEmail from "../../utils/validateEmail";

class CreateSurvey extends Component{
    RenderInvaliEmails = (error)=>{
        if(error && error.includes('invalid e-mails'))
        return <div className="survey-invalied-email">{`${error}`}</div>
        return null;
    }
//review enteries
    RenderCreateConfirm = (formData)=>{
        this.render=()=>{
            return <SurveyConfrim formData={formData}/>
        }
    }

    onSubmit =(formData)=>{
        this.props.confrimCreateSurveyAction(true);
        this.RenderCreateConfirm(formData);
    }

    RenderError=({error,touched})=>{
        if(error && touched)
        return error;
        return null;
    }

    InputField=( {input_fieldPlaceHolder , input_fieldId , input  , meta} )=>{
        const error=this.RenderError(meta)

        const  FieldPlaceHolder=error ? {error,color : 'input-field-red'} : {error:input_fieldPlaceHolder ,color : 'input-field-gray'};
        return(
            <div className="row">
                 <div className="input-field col s12">
                 <br/><br/>
                      <input { ...input }  placeholder={`${FieldPlaceHolder.error}`} id={`${input_fieldId}`} className={`${FieldPlaceHolder.color}`} type="text" />
                      <label htmlFor={`${input_fieldId}`} className="input-lebal">{`${input_fieldId}`}</label><br/>
                       {this.RenderInvaliEmails(error)}
                 </div>
            </div>
        )
    }


    render(){
        if(!this.props.ConfrimSurvey)
        return(
            <div  className="create-survey">
            <h1 className="survey-header">Create Your Survey</h1>
            <div className="row form-wapper">
            <form className="col s10"  onSubmit={this.props.handleSubmit(this.onSubmit)}>

                 <Field name='survey_title'
                 component={this.InputField} 
                 input_fieldId='Title' 
                 input_fieldPlaceHolder='enter sevey title'
                  />
                
                <Field name='survey_email_subject'
                 component={this.InputField} 
                 input_fieldId='Email Subject' 
                 input_fieldPlaceHolder='provide subject for e-mails'
                  />

                <Field name='survey_email_body'
                 component={this.InputField} 
                 input_fieldId='Email Messege' 
                 input_fieldPlaceHolder='provide messege for e-mails'
                  />
                
                <Field name='survey_recipients'
                 component={this.InputField} 
                 input_fieldId='Recipients' 
                 input_fieldPlaceHolder='mail1@.x.com , mail2@.x.com'
                  />

                
               <button className="btn waves-effect waves-light" style={{position: 'inherit'}}>Next
               <i className="material-icons right">send</i>
               </button>

            </form>
            </div>
            </div>
        )
    }
}

const validate = formData =>{
const err={};
 err.survey_recipients=validateEmail(formData.survey_recipients || '');

 if(!formData.survey_title)
 err.survey_title="title required";

 if(!formData.survey_email_subject)
 err.survey_email_subject="email subject required";

 if(!formData.survey_email_body)
 err.survey_email_body="email body required";

 if(!formData.survey_recipients)
 err.survey_recipients="recipients are required";
 return err;
}

const Wapper =reduxForm({form : 'CreateSurvey' , validate})(CreateSurvey);
const mapStateToProps = ({ConfrimSurvey}) =>{
    return {ConfrimSurvey}
}
export default connect(mapStateToProps , {confrimCreateSurveyAction} )(Wapper);


