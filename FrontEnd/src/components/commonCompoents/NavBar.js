import React from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom";

import '../../css/navbar.css';
import Payemnt from "../Payment";

const NavBar = ( 
    {title,buttonName,onClick,buttonPath,logoPath,buttonicon,Current_User} )=>{

if(window.location.pathname.includes('/surveys/feedback/'))
return null;  
    const UserStatus = ()=>{
        if(Current_User)
        return <Payemnt CurrentBal={Current_User.Credits}/>
        else
        return null;
    }
    return(
    <nav>
           <div className=" nav-wrapper nav-bar ">
            <div className="nav-margin">
               <Link to={`${logoPath}`} className="brand-logo ac_unit-icons Medium nav-mobile-title">{title}</Link>
               <ul id="nav-mobile" className="right hide-on-med-and-down nav-items">
                      {UserStatus()}
                      <li>
                        <a href={`${buttonPath}`}
                             onClick={()=>onClick()}
                             >{buttonName}
                                  <i className="material-icons left">
                                    {buttonicon}
                                  </i>
                        </a>
                      </li>
                </ul>
            </div>
            </div>
    </nav>
    )
}
const mapStateToProps =({Current_User})=>{
    return{Current_User}
}
export default connect (mapStateToProps)(NavBar);


//connect --> helper add jsx i need then i can check log or not
// --> then show JSx for Coin using helper 