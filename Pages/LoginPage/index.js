import React, {useState} from "react"

import './style.css';
import axios from 'axios';


const LoginPage = () => {

  const [user, setUser] = useState({
                                email: '',
                                password : ''
                            });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    axios.post("http://localhost:9001/users/login", user)
    .then((response) => {
        console.log(response.data);
    }).catch((error) => {
        console.log(error)
    })
};

function onChangeHandler(event){
    //console.log(event.target.name)
    setUser({...user,
        [event.target.name]: event.target.value
    })
}

    return ( 

        <form onSubmit = {submitHandler}>
            <div className = "registrationWrapper ">  
                <section className="vh-100 gradient-custom">
                    <div className="container py-5 h-100">
                        {user.email} , {user.password}
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-5 col-xl-5">
                                <div className="card bg-primary text-white">
                                    <div className="card-body p-5 text-center">

                                        <div className="mb-md-5 mt-md-4 pb-5">
                                            {/*{(error != "") ? (<div className="error">{error}</div>) :""}*/}
                                            <h2 className="fw-bold mb-2 text">Login Form</h2>
                                            <p className="text-white-50 mb-5">Please enter your email and password</p>

                                            <div className="form-outline form-white mb-4">
                                                <input type="text" id="username" className="form-control form-control-lg" name="email" onChange = {onChangeHandler} value ={user.email}/>
                                                <label className="form-label" htmlFor="username" >Email</label>
                                            </div>

                                            <div className="form-outline form-white mb-4">
                                                <input type="password" id="password" className="form-control form-control-lg" name="password" onChange = {onChangeHandler} value ={user.password}/>
                                                <label className="form-label" htmlFor="password">Password</label>
                                            </div>

                                            <button className="btn btn-outline-primary btn-lg px-10" type="submit" value = "login">Login</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </form>

)
}

export default LoginPage;