import React, {useState} from "react"
import LoginPage from "../../Pages/LoginPage";


const Logout = () => {

    // const user = LoginPage.user;
    // console.log(user);

    // const User =  user => {
    //     console.log(user)
    // }

    // const [user, setUser] = useState({
    //     email: '',
    //     password : ''
    // });

    return (
        <div>
            email = {LoginPage.user.email} password = {LoginPage.user.password}
        </div>
    )

}

export default Logout