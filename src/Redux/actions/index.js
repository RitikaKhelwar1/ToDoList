import types from "../types";


export const login=()=>{
    return{

        type: types.LOGIN
    }
}

export const logout=()=>{
    return{

        type: types.USER_LOGOUT
    }
}
export const createToDoItems = () =>{
    return types.CREATE_TODOITEMS
}

export const deleteToDoItems = () =>{
    return types.DELETE_TODOITEMS
}


