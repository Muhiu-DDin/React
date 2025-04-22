import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    todos : [{
        id : Date.now(),
        text : "hellow Todo"
    }] 

}

export const slice = createSlice(
    {
        name : 'todo' ,
        initialState ,
        reducers : {
            addTodo : (state , action)=>{
                const todo = {
                    id : Date.now() ,
                    text : action.payload
                }
                state.todos.push(todo);
            } ,
              removeTodo : (state , action)=>{
                    state.todos = state.todos.filter((obj)=>obj.id !== action.payload)
              } , 
              updateTodo : (state , action)=>{
                const {id , text } = action.payload;
                state.todos = state.todos.map(
                (obj)=>obj.id === id ? {...obj , text} : obj
                )
              }
        }

    }
);

export const {addTodo , removeTodo, updateTodo} = slice.actions ;
export default slice.reducer ;