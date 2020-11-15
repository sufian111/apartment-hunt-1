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
            <button className="btn rounded border border-dark d-flex pr-5"onClick={handleFacebookAuth}>
                <div><SiFacebook /></div>
               <div className="ml-auto pl-5">Continue with Google</div>
            </button>
        </div>
    );
};

export default Facebook;
