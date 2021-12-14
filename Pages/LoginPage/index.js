import React, {useState} from "react"
import Navbar from '../../Components/Navbar';
import './style.css';
import Axios from 'axios';


const LoginPage = () => {

  const [details, setDetails] = useState({email: "", password : ""});

  const submitHandler = e => {
    Axios.get("http://localhost:9001/users/login",{
        email: details.email,
        password: details.password,
        entry: details.entry,

    }).then((response) =>{
        console.log(response);
    }).catch((error) =>{
        
    })
};

function onChangeHandler(event){
    //console.log(event.target.name)
    setDetails({...details,
        [event.target.name]: event.target.value
    })
}

    return ( 

        <form onSubmit = {submitHandler}>
            <div className = "registrationWrapper ">  
                <section className="vh-100 gradient-custom">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-5 col-xl-5">
                                <div className="card bg-primary text-white">
                                    <div className="card-body p-5 text-center">

                                        <div className="mb-md-5 mt-md-4 pb-5">
                                            {/*{(error != "") ? (<div className="error">{error}</div>) :""}*/}
                                            <h2 className="fw-bold mb-2 text">Login Form</h2>
                                            <p className="text-white-50 mb-5">Please enter your email and password</p>

                                            <div className="form-outline form-white mb-4">
                                                <input type="text" id="username" className="form-control form-control-lg" name="username" onChange = {onChangeHandler} value ={details.name}/>
                                                <label className="form-label" for="username" >Email</label>
                                            </div>

                                            <div className="form-outline form-white mb-4">
                                                <input type="password" id="password" className="form-control form-control-lg" name="password" onChange = {onChangeHandler} value ={details.password}/>
                                                <label className="form-label" for="password">Password</label>
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