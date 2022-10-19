import {useSelector} from "react-redux";

const Header = () => {
    const {currentUser} = useSelector(state => state.userReducer)
    return (
        <div>
            {currentUser && currentUser.name}
        </div>
    )
}
export {Header};