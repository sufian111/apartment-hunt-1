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
            <button onClick={handleGoogleSignIn}>
                {' '}
                <FcGoogle />
                Continue with Google
            </button>
        </div>
    );
};

export default Google;
