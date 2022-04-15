import { useDispatch } from "react-redux";
import { getLogin, removeLoginData, storeLogin } from "../../utils/utils";
import types from "../types";

const initialState = {
    userData:{}
};





const Auth = (state = initialState, action) => {
    switch(action.type){
        case types.LOGIN : 
        const data = action.payload
        storeLogin(data)
        return {
           
            userData:data
        };

        case types.USER_LOGOUT : 
        removeLoginData();
        getLogin().then((res)=>{
            console.log("alkjhgfds,mnbvcxz",res)
            return {userData:res}
        })
        return {userData:undefined}
        
        default : return state;
    }
}

export default Auth;