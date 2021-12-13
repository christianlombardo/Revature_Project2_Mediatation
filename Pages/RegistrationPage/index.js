import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './style.css'


const RegistrationPage = () => {


    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        entry: ''
    })

    function onChangeHandler(event){
        //console.log(event.target.name)
        setUser({...user,
            [event.target.name]: event.target.value
        })
    }

    const register = () => {
        Axios.post("https://localhost9001/RegistrationPage",{
            name: user.name,
            email: user.email,
            password: user.password,
            entry: user.entry,

        }).then((response) =>{
            console.log(response);
        });
    };

    return ( 
        
        <form className = "regFormWapper">
    <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-5 col-xl-5">
                    <div className="card bg-primary text-white">
                        <div className="card-body p-5 text-center">

                            <div className="mb-md-5 mt-md-4 pb-5">

                                <h2 className="fw-bold mb-2 text">Registration Form</h2>
                                <p className="text-white-50 mb-5">Please fillout the form the continue</p>

                                <div className="form-outline form-white mb-4">
                                    <input type="text" id="name" className="form-control form-control-lg" name="name" value = {user.name} onChange={onChangeHandler} />
                                    <label className="form-label" for="username" >Name</label>
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <input type="email" id="email" className="form-control form-control-lg" name="username" value = {user.email} onChange={onChangeHandler}/>
                                    <label className="form-label" for="email" >Email</label>
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <input type="password" id="password" className="form-control form-control-lg" name="password" value = {user.password} onChange={onChangeHandler}/>
                                    <label className="form-label" for="password">Password</label>
                                </div>

                                <div class="form-group">
                                <label for="exampleFormControlTextarea1">Why did you choose Reconnect?</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value = {user.entry} onChange={onChangeHandler}></textarea>
                                </div>

                                
                                <button className="btn btn-outline-primary btn-lg px-10" type="submit" value = "register">Register</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</form>
    )
}

export default RegistrationPage;
