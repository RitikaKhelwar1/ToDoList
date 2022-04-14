import types from "../types";
import { getData, storeData } from "../../utils/utils"


const initialState = {
    todoItems: [],
}

const AddTask = (state = initialState, action) => {

    switch (action.type) {
        case types.CREATE_TODOITEMS:{

 
            console.log("pyalod data", action.payload)
            const data = action.payload;
            // data=[...state.todoItems]
            // data.push(item)
            console.log("item+++",action.payload)

            const mapdata = data.map((element,index)=>{
                return{
                    userId: element.userId,
                    name: element.name,
                    age: element.age,
                    address: element.address,
                    phone: element.phone,
                    roll: element.roll
                }
            })
           

            let mergeData = [
                ...state.todoItems, ...mapdata
            ]
            storeData(mergeData).then((val)=>{
                console.log("my store data",val)
            })
            return {
                ...state,
                todoItems: mergeData,

                // ...state,
                // todoItems:storeArr
            }
        }

        case types.DELETE_TODOITEMS:
            const newList1 = [...state.todoItems]
            const index = state.todoItems.findIndex((items) => items.userId === action.userId)

            if (index >= 0) {
                newList1.splice(index, 1)
            }
            return {
                ...state,
                todoItems: newList1
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





        default: return state;
    }
}

export default AddTask;