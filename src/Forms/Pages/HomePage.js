import React from "react";
import { useAuth } from "../../hooks/use-auth";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const { isAuth, email } = useAuth();
  return isAuth ? (
    <NavLink to={"/"}></NavLink>
  ) : (
    <div>
      <h1>false</h1>
    </div>
  );
};

export default HomePage;
