import { Todo } from './../../../server/src/entities/todo.entity';


import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {IUser} from '../model/IUser';
import { stat } from 'fs';


//const initialState = null as AuthState; 
export const userSlice = createSlice({
    name: "User",
    initialState: {
        loggedUser: null as IUser,
        token: "",
    },
    reducers: {
        setLogin: (state, action: PayloadAction<IUser>)=> {
        
            state.loggedUser = action.payload;
            
        },
        setLogout: (state, action: PayloadAction<IUser|null>)=> {
            state.loggedUser = null;
        },
        setAccessToken: (state, action: PayloadAction<string>)=> {
            state.token = action.payload;
            
        },
        
    }
});

export const {
    setLogin,
    setLogout,
    setAccessToken
} = userSlice.actions;

export default userSlice;