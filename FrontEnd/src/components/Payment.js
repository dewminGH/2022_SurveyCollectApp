import React,{Component} from 'react';
import {connect} from "react-redux";
import StripeCheckout from 'react-stripe-checkout';

import {handleToken} from '../actions';
class Payemnt extends Component{

    render(){
        const {handleToken,CurrentBal} = this.props;
        return <StripeCheckout 
        amount={500} 
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        name='Emaliy'
        description='To purchase Emaliy Credits'
        token={token=>{
            handleToken(token)}}
        >
           <li style={{cursor:'grab'}}>
             <i className="material-icons left">attach_money</i>
                 {CurrentBal}
          </li> 
        </StripeCheckout>
    }
} 

export default connect(null, {handleToken} )(Payemnt);


