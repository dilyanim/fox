import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Forms from "./Forms";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
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
  return <Forms title="Войти" handleClick={handleLogin} />;
};

export default Login;
