import types from "../types";

const initialState = {
    todoItems : [],
}

const AddTask = (state = initialState, action) =>{
    switch(action.type){
        case types.CREATE_TODOITEMS : 
        const{item,id}=action.payload;
         return {
            ...state,
            todoItems : [
                ...state.todoItems, {
                    id:id,
                    name: item.name,
                    age : item.age,
                    address: item.address,
                    phone : item.phone,
                    roll : item.roll
                }
            
            ]
        }
        case types.DELETE_TODOITEMS : 
        const newList = state.todoItems.filter((items)=>items.id!==action.id)
        return{
            ...state,
            todoItems:newList
        }
    
        default : return state;
    }
}

export default AddTask;