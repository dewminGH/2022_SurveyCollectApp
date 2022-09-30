 import { Fetch_User } from '../types/types'
const fetchUserReducer = (state=null , action)=>{
    if(action.type===Fetch_User)
    return action.payload || false;
    return state;
}

export default fetchUserReducer;