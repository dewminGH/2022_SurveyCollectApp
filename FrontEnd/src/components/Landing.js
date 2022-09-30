import React from "react";

import '../css/landingpage.css';


const Landing = ()=>{
    return(
      <>
       <img src={require('../css/img.png')} alt="xx" 
       className=" responsive-img landing-image" />
            <div className="container">
            <h1 className="landing-header">Emaliy</h1>
            <h2> <b>Are you </b> Having hard time with your <b>Business ?</b> </h2>
            <h2>You are lucky </h2>
            <h3>Create Your Survey for <b>Just 1$</b></h3>
            <h3 className="landing-magin">We can collect user feedbacks for you <b>SIGN UP TO EMALIY</b></h3>


            <h3><b>Why Emaliy Diffrent ?</b></h3>
            <div className="content">

            <h5> 
            <i className="material-icons">favorite_border</i>
            Easy / Secure Payemnts methods</h5>

            <h5><i className="material-icons">favorite_border</i>
            Fast Results</h5>

            <h5><i className="material-icons">favorite_border</i>
            Custermizabale Surveys</h5>

            <h5 ><i className="material-icons">favorite_border</i>
            Free Access Ten Surveys</h5>

            <h5 ><i className="material-icons">favorite_border</i>
            Complete Summey Reports</h5>
            </div>
            </div>
       </>
    )
}
export default Landing;