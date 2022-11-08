import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../../services";

const initialState = {
    users: [],
    currentUser: null,
    loading: false,
    error: null
}

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await userService.getAll();
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);
const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        // getAll: (state, action) => {
        //     console.log(state);
        //     state.users = action.payload
        // },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        }
    },
    extraReducers: {
        [getAll.fulfilled]: (state, action) => {
            state.users = action.payload
        }
    }
})
const {reducer: userReducer, actions: {setCurrentUser}} = userSlice;

const userActions = {
    getAll,
    setCurrentUser
}
export {
    userReducer,
    userActions
}