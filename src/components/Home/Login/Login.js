import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import firebaseConfig from './FirebaseConfig';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.scss';
import facebook from '../../../images/logos/Group 2.png';
import google from '../../../images/logos/Group 573.png';
import Topbar from '../../Shared/Topbar/Topbar';

const Login = () => {
    const { userData } = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = userData;

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const googleLogIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const googleNewUser = { name: displayName, email: email }
            setUser(googleNewUser);
            history.replace(from);
        })
            .catch(function (error) {
                console.log(error.message);
            });
    }
    const fbLogIn = () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider)
            .then(function (result) {
                const { displayName, email } = result.user;
                const googleNewUser = { name: displayName, email: email }
                setUser(googleNewUser);
                history.replace(from);

            }).catch(function (error) {
                console.log(error.message);
            });
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    history.replace(from);
                    user.updateProfile({
                        displayName: user.name,
                    })

                })
                .catch(function (error) {
                    const newUserInfo = { ...user };
                    newUserInfo.message = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const { displayName, email } = res.user;
                    const googleNewUser = { name: displayName, email: email }
                    setUser(googleNewUser);
                    history.replace(from);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.message = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();
    }
    const handleChange = (e) => {
        let emailValid = true;
        if (e.target.name === 'Fname') {
            emailValid = e.target.value;
            console.log(emailValid);
        }
        if (e.target.name === 'Lname') {
            emailValid = e.target.value;
            console.log(emailValid);
        }
        if (e.target.name === 'email') {
            emailValid = /\S+@\S+\.\S+/.test(e.target.value);
            console.log(emailValid);
        }
        if (e.target.name === "password") {
            const passwordValid = e.target.value.length >= 6;
            emailValid = passwordValid;
            console.log(emailValid);
        }
        if (emailValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
            console.log(newUserInfo);
        }
    }
    return (
        <>
            <Topbar />
            <div className="form_wrapper mt-5">
                <div className='container'>
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6 offset-3">
                            <Form className='loginFrom' onSubmit={handleSubmit}>
                                <h4>{!newUser ? 'Log In' : 'Create an account'}</h4>
                                {newUser && <Form.Group className='mt-4'>
                                    <Form.Control onBlur={handleChange} name='Fname' className='formInput' type="text" placeholder="First Name" />
                                </Form.Group>}
                                {newUser && <Form.Group className='mt-4'>
                                    <Form.Control onBlur={handleChange} name='Lname' className='formInput' type="text" placeholder="Lest Name" />
                                </Form.Group>}
                                <Form.Group className='mt-4'>
                                    <Form.Control onBlur={handleChange} name='email' className='formInput' type="email" placeholder="Username Or Email" />
                                </Form.Group>
                                <Form.Group className='mt-4'>
                                    <Form.Control onBlur={handleChange} name='password' className='formInput' type="password" placeholder="Password" />
                                </Form.Group>
                                {!newUser &&
                                    <Form.Group className='forgot d-flex justify-content-between'>
                                        <Form.Check type="checkbox" label="Remember Me " />
                                        <Link className='password'>Forgot Password</Link>
                                    </Form.Group>
                                }
                                <div className='d-flex justify-content-center'>
                                    <input className='logInBtn' variant="primary" type="submit" value='Log In' />
                                </div>
                                <div className='text-center'>
                                    <span>
                                        {newUser ? 'You already have an account?' : 'Don’t have an account?'}
                                        <Link className='ml-1' to='/login' onClick={() => setNewUser(!newUser)}>
                                            {newUser ? "Log In" : "create new account"}
                                        </Link>
                                    </span>
                                </div>
                            </Form>

                            <div className="formSocial">
                                <div className='d-flex justify-content-center'>
                                    <span></span>
                                    <h6>OR</h6>
                                    <span></span>
                                </div>
                                <div className='fbToGoogle'>
                                    <button className='google btn' onClick={fbLogIn}>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <div className="mr-5">
                                                <img height="35px" width="35px" src={facebook} alt="" />
                                            </div>
                                            <div>
                                                Continue with Facebook
                                            </div>
                                        </div>
                                    </button> <br />
                                    <button className='facebook btn' onClick={googleLogIn}>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <div className="mr-5">
                                                <img height="35px" width="35px" src={google} alt="" />
                                            </div>
                                            <div>
                                                Continue with Google
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;