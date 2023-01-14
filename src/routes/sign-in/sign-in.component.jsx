import { createUserDocFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const res = await signInWithGooglePopup()
        const user = res.user;
        const userDocRef = await createUserDocFromAuth(user)
        console.log(userDocRef);
    }

    return (<>
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign-in with Google</button>
        </div>
    </>)
}

export default SignIn;