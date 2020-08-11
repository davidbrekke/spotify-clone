import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      {/* spotify logo */}
      <img
        src="http://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="SPOTIFY"
      />
      {/* login with spotify */}
      <a href={loginUrl}>login with SPOTIFY</a>
    </div>
  );
}

export default Login;
