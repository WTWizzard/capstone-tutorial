import React, { useState } from "react";
import Button from "../button/button.component";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";

const defaultFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFields);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleGoogleSignIn = async () => {
    const { user } = await signInWithGooglePopup();
    const userRefDoc = await createUserDocFromAuth(user);
  };

  const resetFields = () => {
    setFormFields(defaultFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        formFields.email,
        formFields.password
      );

      console.log(response);
      resetFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password");
          break;
        case "auth/user-not-found":
          alert("Email not found");
          break;
        default:
          alert(error.code);
      }

      console.log("SHIIIT THIS IS ERROR: ", error);
    }
  };

  return (
    <div className="sign-in-container">
      <h2>I have an account</h2>
      <span>Sign In with you email & password</span>
      <form>
        <FormInput
          label={"Email"}
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={formFields.email}
        />
        <FormInput
          label={"Password"}
          type="password"
          onChange={handleChange}
          required
          name="password"
          value={formFields.password}
        />
        <div className="sign-in-btn-container">
          <Button type="submit" onClick={handleSubmit}>
            sign in
          </Button>
          <Button type="button" buttonType={"google"} onClick={handleGoogleSignIn}>
            google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
