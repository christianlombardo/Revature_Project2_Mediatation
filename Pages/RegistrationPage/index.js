import React from 'react'
import './style.css'

const RegistrationPage = () => {

    return ( /*
        <div className = "registrationWrapper ">  
       <div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="well well-sm">
                <form class="form-horizontal" method="post">
                    <fieldset>
                        <legend class="text-center header">Contact us</legend>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <lable>Email</lable>
                            <div class="col-md-8">
                                <input id="email" name="email" type="email" placeholder="email" class="form-control"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <lable>Password</lable>
                            <div class="col-md-8">
                                <input id="password" name="password" type="password" placeholder="password" class="form-control"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                            <lable>Username</lable>
                            <div class="col-md-8">
                                <input id="Username" name="username" type="text" placeholder="username" class="form-control"/>
                            </div>
                        </div>

                      

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                            <lable>How did you find out about us? What made you want to start with meditation?</lable>
                            <div class="col-md-8">
                                <textarea class="form-control" id="message" name="message" placeholder="Please tell us your story" rows="7"></textarea>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-12 text-center">
                                <button type="submit" class="btn btn-primary btn-lg">Submit</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</div>
        </div>
        */


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
                                    <input type="text" id="username" className="form-control form-control-lg" name="username" />
                                    <label className="form-label" for="username" >Username</label>
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <input type="email" id="email" className="form-control form-control-lg" name="username" />
                                    <label className="form-label" for="email" >Email</label>
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <input type="password" id="password" className="form-control form-control-lg" name="password" />
                                    <label className="form-label" for="password">Password</label>
                                </div>

                                <div class="form-group">
                                <label for="exampleFormControlTextarea1">Why did you choose Reconnect?</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">Click here to subscribe</label>
                                </div>
                                
                                <button className="btn btn-outline-primary btn-lg px-10" type="submit">Login</button>

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
