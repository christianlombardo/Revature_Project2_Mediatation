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
           <LoginPage Logout="Logout" />
        </div>
    )

}

export default Logout