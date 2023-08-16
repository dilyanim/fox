import React from "react";
import Forms from "./Forms";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Register from "../components/reg/register/Register";
const SignUp = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        Navigate("/");
      })
      .catch(console.error);
  };
  return <Forms title="Войти" handleClick={handleRegister} />;
};

export default SignUp;
