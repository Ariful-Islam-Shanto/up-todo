import { createSlice } from '@reduxjs/toolkit';

    const initialState = {
        todo : []
    }
   
    export const TodoSlice = createSlice({
        name : 'todo',
        initialState,
        reducers : {
            addToDo : (state, action) => {
                state.todo.push(action.payload);
                // console.log("Action payload", action.payload);
            },
            removeTodo : (state, action) => {
                state.todo = state.todo.filter(item => item._id === action.payload)
                // console.log("Action payload", action.payload);
            }
        }

    })

export const {addToDo, removeTodo} = TodoSlice.actions;
export default TodoSlice.reducer;