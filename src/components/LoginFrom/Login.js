import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../foodhooks/hooks/useAuth';
import './Login.css'
import logo from '../../assets/logo03.png'
const Login = () => {
    const {signInUsingGoogle,signInWithEmailAndPass,handleEmailChange,handlePasswordChange,user,error}=useAuth()
    console.log(user);



    return (
        <div className="login">
            	<div className="container-fluid">
		<div className="row main-content bg-success text-center m-auto">
			<div className="col-md-4 text-center company__info">
            <Link to="/"><Navbar.Brand href="#home"><img src={logo} alt="logo" /></Navbar.Brand></Link>
			
			</div>
			<div className="col-md-8 col-xs-12 col-sm-12 login_form ">
				<div className="container-fluid">
					<div className="row">
						<h2>Login</h2>
					</div>
					<div className="row">
						<form onSubmit={signInWithEmailAndPass} control="" className="form-group">
							<div className="row">
								<input onBlur={handleEmailChange} type="email" id="username" className="form__input" placeholder="Email"/>
							</div>
							<div className="row">
								{/* <!-- <span className="fa fa-lock"></span> --> */}
								<input onBlur={handlePasswordChange} type="password" name="password" id="password" className="form__input" placeholder="Password"/>
							</div>
							<div className="row">
								<input type="checkbox" name="remember_me" id="remember_me" className=""/>
								<label htmlFor="remember_me">Remember Me!</label>
							</div>
							<div className="row">

								<div className="text-danger my-3">{error}</div>


								<input type="submit" value="Submit" className="btn Buttoitemn"/>
                                <button onClick={signInUsingGoogle} type="button" className="btn btn-outline-warning"><i class="fab fa-google"></i> Google</button>
							</div>
						</form>
					</div>
					<div className="row">
						<p>Don't have an account? <Link to="/Register">Register Here</Link></p>
					</div>
				</div>
			</div>
		</div>
	</div>
        </div>
    );
};

export default Login;