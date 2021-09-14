import React from "react";
import PropTypes from "prop-types";

const Login = (props) => {
    return(
        <div className='login'>
            <h2 className='login__title'>Authorization</h2>
            <p className='login__descr'>Please log in using one of the following</p>
            <div className='login__buttons'>
                <button onClick={()=>{props.authenticate('github')}} className='select-button login__button'>Login with GItHub
                    <span>Login with GItHub</span>
                </button>
                <button onClick={()=>{props.authenticate('google')}} className='select-button login__button'>Login with Google
                    <span>Login with Google</span>
                </button>
            </div>
        </div>
    )
}

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
}
export default Login;