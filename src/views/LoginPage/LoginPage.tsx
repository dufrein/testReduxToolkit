import React from "react";
import { useHistory } from "react-router-dom";
import { links } from "../../App";

interface IProps {
  logIn: () => void;
}

const LoginPage: React.FC<IProps> = ({ logIn }) => {
  const history = useHistory();
  const loginHandler = () => {
    logIn();
    history.push(links.page1);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e2ce8b",
        fontSize: "30px",
      }}
    >
      Здравствуй жопочка, логинься плиз (тыкни кнопку)
      <button className="loginButton" onClick={loginHandler}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
