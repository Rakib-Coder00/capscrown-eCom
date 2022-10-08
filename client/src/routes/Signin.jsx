import React from 'react'
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../components/utils/firebase.init';

const Signin = () => {
    const googleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
        <div>Signin
            <button onClick={googleUser}>Sign in</button>
        </div>
    )
}

export default Signin