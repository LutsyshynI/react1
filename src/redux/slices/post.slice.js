import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    posts: [],
    currentPost: null,
    error: null
}

const postSlice = createSlice({
    name: "postSlice",
    initialState,
    reducers: {
        getAll: (state, action) => {
            state.posts = action.payload;
        },
        setPost:(state, action)=>{
            state.currentPost = action.payload
        }
    }
})
    const {reducer: postReducer, actions: {getAll,setPost}} = postSlice;

const postAction = {
    getAll,
    setPost
};
export {
    postReducer,
    postAction
}
