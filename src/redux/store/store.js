
import {userReducer} from "../slices/user.slice";
import {combineReducers,configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    userReducer
});
const setupStore =() => configureStore({
    reducer: rootReducer
})
export {setupStore}