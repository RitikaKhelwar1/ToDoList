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
export const createToDoItems = (res) =>{
    return {
        type: types.CREATE_TODOITEMS,
        payload : res
        
    }
}

export const deleteToDoItems = (userId) =>{
    return {
        type: types.DELETE_TODOITEMS,
        userId:userId
    }
}
export const editToDoItems = (item) =>{
    console.log("editItems",item)
    return {
        type: types.EDIT_TODOITEMS,
        payload :   item
    }
}


