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
                    userId:item.userId,
                    name: item.name,
                    age : item.age,
                    address: item.address,
                    phone : item.phone,
                    roll : item.roll
                }
            
            ]
        }
        case types.DELETE_TODOITEMS : 
        const newList1= [...state.todoItems]
        const index = state.todoItems.findIndex((items)=>items.userId===action.userId)

        if(index >= 0){
            newList1.splice(index,1)
        }
        return{
            ...state,
            todoItems:newList1
        }
        case types.EDIT_TODOITEMS:
        const data = action.payload
        let editArr = [...state.todoItems]
        let editUserIndex = state.todoItems.findIndex((index) => index.userId === data.id);
        
            editArr[editUserIndex] = data
            return {
                ...state,
                todoItems: editArr
            }

        


    
        default : return state;
    }
}

export default AddTask;