import React from "react";
import { connect } from "react-redux";
// import { createUserNameAction, SetUserNameAction } from "../../store/actions";

import { IStore, setUserName } from "../../store/reducers";

interface IProps {
  setUserName: (arg: string) => any;
  userName: string;
}

const Page2: React.FC<IProps> = ({ setUserName, userName }) => {
  const setName = () => {
    setUserName("hgfd");
  };
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9e2f63",
        fontSize: "30px",
      }}
    >
      Page2
      <div onClick={setName}>SetUserName</div>
      <div>Your username is {userName || "unknown"}</div>
    </div>
  );
};

const mapStateToProps = (state: IStore) => {
  console.log("state", state);
  return {
    userName: state.user.userName,
  };
};

const mapDispatchToProps = {
  setUserName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Page2);
