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
export const createToDoItems = (item) =>{
    console.log(item)
    return {
        type: types.CREATE_TODOITEMS,
        payload : {
            id: Math.floor(Math.random()*1000),
            item:item
        }
    }
}

export const deleteToDoItems = (id) =>{
    return {
        type: types.DELETE_TODOITEMS,
        id:id
    }
}
export const editToDoItems = (index) =>{
    console.log(item)
    return {
        type: types.EDIT_TODOITEMS,
        payload : index
    }
}


