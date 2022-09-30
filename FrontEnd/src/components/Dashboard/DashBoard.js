import  { Component } from "react";
import {connect}  from "react-redux";
import { Link } from "react-router-dom";
import {confrimCreateSurvey,fetchSurveys} from '../../actions/index';

import '../../css/dashboard.css';
import SurveyCard from "./SurveyCard";

class DashBoard extends Component{
   
    componentDidMount(){
       const {confrimCreateSurvey,fetchSurveys} = this.props;
       confrimCreateSurvey(false);
       fetchSurveys();
    }

    RenderSurveyList(){
        if(!this.props.Surveys)
            return null
        else   
        return this.props.Surveys.map(survey =>{
            return <div className="smarginsurveyCard row " key={survey._id}><SurveyCard survey={survey}/></div>
        })
    }

    RenderFreashDashBoard(){
        return(
        <>
        <div style={{height:window.innerHeight,textAlign:'center' , fontWeight:'600'}}>
        <h1>Create Your First Survey For Only 1$</h1>
        </div>
        <div className="fixed-action-btn dashboard-survey-btn">
        <Link to='/surveys/new' className="btn-floating btn-large  ">
               <i className="large material-icons">add</i>
        </Link>
        </div>
        </>
        )
    }

    render(){
      if(!this.props.Surveys)
       return null;
      if(this.props.Surveys.length===0)
      return this.RenderFreashDashBoard()
        return(
            <div>
            <h1 style={{textAlign:'center' , fontWeight:'600'}}>Your Survey List</h1>
               {this.RenderSurveyList()}
               <div className="fixed-action-btn dashboard-survey-btn">
                <Link to='/surveys/new' className="btn-floating btn-large  ">
                       <i className="large material-icons">add</i>
                </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps= ({Surveys}) => {return {Surveys}}

export default connect(mapStateToProps , {confrimCreateSurvey,fetchSurveys} ) (DashBoard);