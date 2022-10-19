import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {userService} from "../../services";
import {userActions} from "../../redux";
import {User} from "../User/User";

const Users = () => {
    const dispatch = useDispatch();

    const {users} = useSelector(state => state.userReducer);

    useEffect(() => {
        console.log(userActions.getAll())
        userService.getAll().then(({data}) => dispatch(userActions.getAll(data)));
    }, [dispatch])
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    )
}
export {Users};