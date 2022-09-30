import React, { Component } from "react";
import {connect} from "react-redux";
import {Route, Router} from "react-router-dom";

import {fetchUser,Logout,Login} from '../actions/index';
import history from "../history";

import NavBar from "./commonCompoents/NavBar";
import DashBoard from "./Dashboard/DashBoard";
import Landing from "./Landing";
import Footer from "./commonCompoents/Footer";
import FeedBack from "./Feedback";
import CreateSurvey from "./Dashboard/CreateSurvey";


class App extends Component{

    componentDidMount(){
        this.props.fetchUser()
    }

    OnClickNavButton(){
        if(this.props.Current_User)
        return this.props.Logout();
        return this.props.Login();
    }

    render(){
        const {Current_User} = this.props;
        //fix initial render
        if(this.props.Current_User===null)
        return null;
        const buttonName = (!Current_User) ? 'Sign in with Google' : 'Log Out';
        return(
        <>
        <Router history={history}>
                 <NavBar 
                 title={Current_User===false?'Emaliy' : 'Emaliy-DashBoard'}
                 buttonName={buttonName}
                 buttonicon={Current_User===false?'person_add' : 'exit_to_app'}
                 buttonPath={Current_User===false?'/auth/google' : '/api/logout'}
                 logoPath={Current_User===false?'/' : '/surveys/dashboard'}
                 onClick={()=>this.OnClickNavButton()}
                  />
         
           
                 <Route path='/' exact component={Landing} />
                 <Route path='/surveys/dashboard' exact component={DashBoard}/>
                 <Route path='/surveys/new' exact component={CreateSurvey}/>
                 <Route path='/surveys/feedback/:id/:vote' exact component={FeedBack}/>
       
        <Footer/>
        </Router>
        </>
        )
    }
}

const mapStateToProps=(state) =>{
    return {Current_User :state.Current_User}
}
export default connect(mapStateToProps , {fetchUser,Logout,Login}) (App);
