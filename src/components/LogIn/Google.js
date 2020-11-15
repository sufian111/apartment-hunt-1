import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import { FcGoogle } from 'react-icons/fc';

const Google = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                //
            })
            .catch((error) => {
                // console.log(error.code);
            });
    };

    return (
        <div>
            <button className="btn rounded border border-dark d-flex pr-5"onClick={handleGoogleSignIn}>
                <div><FcGoogle /></div>
               <div className="ml-auto pl-5">Continue with Google</div>
            </button>
        </div>
    );
};

export default Google;
