import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { SiFacebook } from 'react-icons/si';

const Facebook = () => {
    const handleFacebookAuth = () => {
        const facebookProvider = new firebase.auth.FacebookAuthProvider();
        firebase
            .auth()
            .signInWithPopup(facebookProvider)
            .then((result) => {
                //
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div>
            <button onClick={handleFacebookAuth}>
                <SiFacebook style={{ color: '#3b5998' }} /> Continue with
                Facebook
            </button>
        </div>
    );
};

export default Facebook;
