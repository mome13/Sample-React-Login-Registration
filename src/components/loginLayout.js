import React from 'react';
import {Link} from "react-router-dom";

const LoginLayout = () => {
    return (
        <div className='position-relative'>
                <div style={{background : 'white', borderRadius : '25px'}} className=" p-5 row shadow product-card">
                    <div style={{marginLeft: '-20px'}}  className='col-md-6 text-start p-0 m-0'>
                        <img className='mt-5 ' src="/test.svg" alt=""/>
                    </div>
                    <div className='col-md-6 text-center p-0 m-0'>
                        <img width='80px' height='80px' src="/test.svg" alt=""/>
                        <p>Sign in to Your account</p>
                        <form className='input-group w-100' action="">
                            <input className='w-75 input-border rounded-pill mt-1 mx-auto' type="email" placeholder='Email'/>
                            <input className='w-75 input-border rounded-pill mt-3 mx-auto' type="password" placeholder='Password'/>
                            <a className='mt-4 mx-auto w-100 mb-4' href="#">Forgot Password?</a>
                            <div className='w-75 mx-auto'>
                                <input className='button-signin w-25 rounded-pill' type="submit" value='Sign in'/>
                                <Link to="/signup">
                                    <input className='offset-1 button-signup w-25 rounded-pill' type="button" value='Sign up'/>
                                </Link>
                            </div>
                            <p style={{color:'#9e9e9e'}} className='w-50 mx-auto mt-4'>OR LOGIN WITH</p>

                            <div className='w-100'>
                                <button className='rounded-circle shadow other-logins fw-bold'>F</button>
                                <button className='rounded-circle shadow other-logins'>G</button>
                                <button className='rounded-circle shadow other-logins '>T</button>
                            </div>


                        </form>
                    </div>
            </div>
        </div>

    );
};

export default LoginLayout;
