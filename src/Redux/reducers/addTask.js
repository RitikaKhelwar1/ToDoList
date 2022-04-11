import types from "../types";

const initialState = {
    todoItems : [],
}

const AddTask = (state = initialState, action) =>{
    switch(action.type){
        case types.CREATE_TODOITEMS : return {
            ...state,
            todoItems : [...state.todoItems, action.item]
        }
        default : return state;
    }
}

export default AddTask;