import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect(() => {
    const getResponse = async () => {
      const response = await getRedirectResult(auth);

      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    };
    getResponse().catch(console.error);
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
