import { Todo } from './../../../server/src/entities/todo.entity';


import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {ITodo} from "../model/ITodo";


export const todoSlice = createSlice({
    name: "Todo",
    initialState: {
        todosList: [] as ITodo[]
    },
    reducers: {
        setTodos: (state, action: PayloadAction<ITodo[]>)=> {
            state.todosList = action.payload;
            console.log("SetTodos slice $" + JSON.stringify(state.todosList));
        },
        createNewTodo: (state, action: PayloadAction<ITodo>)=> {
            state.todosList = [action.payload, ...state.todosList];
        },
        removeTodo: (state, action: PayloadAction<ITodo>) => {
            
            state.todosList = [...state.todosList].filter(e => e.id.toString() !== action.payload.id)
        },
        updateTodoItem: (state, action: PayloadAction<ITodo>) => {
            const objIndex = state.todosList.findIndex((obj => action.payload.id === obj.id));
            state.todosList[objIndex] = action.payload;
        },
    
    }
});

export const {
    setTodos,
    createNewTodo,
    removeTodo,
    updateTodoItem
} = todoSlice.actions;

export default todoSlice;