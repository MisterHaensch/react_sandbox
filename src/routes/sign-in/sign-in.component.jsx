import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log({ user });
  };
  return (
    <div>
      <h1> SIGN IN PAGE</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <button onClick={logGoogleRedirectUser}>
        Sign in with GoogleRedirect
      </button>
    </div>
  );
};

export default SignIn;
