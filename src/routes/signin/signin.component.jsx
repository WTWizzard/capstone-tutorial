import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

import { createUserDocFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userRefDoc = await createUserDocFromAuth(user);
    createUserDocFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Click</button>
    </div>
  );
};

export default SignIn;
