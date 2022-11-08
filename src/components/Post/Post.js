import {useDispatch} from "react-redux";
import {postAction} from "../../redux/slices/post.slice";

const Post = ({post}) => {
const dispatch = useDispatch();
    return (
        <div>
            <div>id:{post.id}</div>
            {/*<div>title:{post.title}</div>*/}
            <button onClick={() => dispatch(postAction.setPost(post))  }>select post</button>
        </div>
    )
}
export {Post};