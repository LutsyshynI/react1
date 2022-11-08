import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {postService} from "../../services";
import {postAction} from "../../redux/slices/post.slice";
import {Post} from "../Post/Post";

const Posts = () => {
const dispatch = useDispatch();
const {posts} = useSelector(state => state.postReducer);
useEffect(()=> {
    postService.getAll().then(({data})=> dispatch(postAction.getAll(data)))
},[dispatch])
return (
    <div>
        {posts.map(post => <Post key={post.id} post={post}/>)}
    </div>
  )}
  export {Posts}; 