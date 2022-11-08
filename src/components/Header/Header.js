import {useSelector} from "react-redux";
import './header.css'
const Header = () => {
    const {currentUser} = useSelector(state => state.userReducer)
    const {currentPost} = useSelector(state => state.postReducer)
    return (
        <div className="header">
            {currentUser && currentUser.name}
            <div>
                {currentPost && currentPost.title}
            </div>
        </div>
    )
}
export {Header};