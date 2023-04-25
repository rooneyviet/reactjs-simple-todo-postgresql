import { Todo } from './../../../server/src/entities/todo.entity';


import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {IUser} from '../model/IUser';


//const initialState = null as AuthState; 
export const userSlice = createSlice({
    name: "User",
    initialState: {
        loggedUser: null as IUser,
        token: "",
        isUserLoggedIn: false
    },
    reducers: {
        setLogin: (state, action: PayloadAction<IUser>)=> {
            state.loggedUser = action.payload;
            state.isUserLoggedIn = true;
        },
        setLogout: (state, action: PayloadAction<IUser|null>)=> {
            state.loggedUser = null;
            state.isUserLoggedIn = false;
        },
        setAccessToken: (state, action: PayloadAction<string>)=> {
            state.token = action.payload;
            localStorage.setItem("accessToken", action.payload);
        },
        
    }
});

export const {
    setLogin,
    setLogout,
    setAccessToken
} = userSlice.actions;

export default userSlice;