import React,{Component} from "react";
import '../../css/surveyCard.css';
class SurveyCard extends Component{

  RenderRecipientList(){
    const {recipients}=this.props.survey;
    if(!recipients)
    return null;
    return recipients.map(recipient => {return(<div key={recipient.email}>
      <i className="material-icons icon-recipients">attachment</i>
      <div className="mail-recipients">{recipient.email}</div> </div>)}
      )
  }

    render(){
      let {subject,title,lastRespond,yes,no}  = this.props.survey;
      if(!lastRespond)
      lastRespond='Unknown';
        return(
    <div className="col s12 m12  boxCard">
      <div className="card   boxCard">
        <div className="card-content white-text">
          <span className="card-title"><b>SURVEY TITLE :</b> {title}</span>
          <b>SURVEY SUBJECT :</b> {subject}<br/>
          {this.RenderRecipientList()}
        </div>
        <div className="card-action " >
             <div style={{marginTop:'2%'}}>Response</div>
             <div className="extra">Yes {yes}</div>
             <div className="extra">No  {no}</div>
             <div style={{marginTop:'2%'}}>LastRespond</div>
             <div className="extra">{lastRespond}</div>
        </div>
      </div>
    </div>
 
         
        )
    }
}

export default SurveyCard;