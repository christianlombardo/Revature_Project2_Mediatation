import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css'
import NavbarHome from '../../Components/NavbarHome';


const initialState = {
    name: '',
    email: '',
    password: '',
    meditationInterests: ''
}

const RegistrationPage = () => {

    const [user, setUser] = useState({
        initialState
    })

    const onChangeHandler = (event) => {
        //console.log(event.target.name)
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const clearState = () => {
        setUser({ ...initialState });
      };

    const registerHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9001/users/register", user)
        .then(response => {
            console.log(response.data);
            clearState()
        })
        .catch(error => {
            console.error(error);
        })
    };

    return (
        <div>
            <NavbarHome />
        <form className="regFormWapper" onSubmit={registerHandler}>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                {/* {user.name} , {user.email} , {user.password} , {user.entry} */}
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-5 col-xl-5">
                            <div className="card bg-primary text-white">
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">

                                        <h2 className="fw-bold mb-2 text">Registration Form</h2>
                                        <p className="text-white-50 mb-5">Please fillout the form the continue</p>

                                        <div className="form-outline form-white mb-4">
                                            <input type="text" id="name" className="form-control form-control-lg" name="name" value = {user.name} onChange={onChangeHandler} />
                                            <label className="form-label" htmlFor="username" >Name</label>
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <input type="email" id="email" className="form-control form-control-lg" name="email" value = {user.email} onChange={onChangeHandler}/>
                                            <label className="form-label" htmlFor="email" >Email</label>
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <input type="password" id="password" className="form-control form-control-lg" name="password" value = {user.password} onChange={onChangeHandler}/>
                                            <label className="form-label" htmlFor="password">Password</label>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlTextarea1">Lists your meditation interests</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="meditationInterests" value = {user.meditationInterests} onChange={onChangeHandler}></textarea>
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
        </div>
    )
}

export default RegistrationPage;
