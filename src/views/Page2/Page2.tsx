import React, { useState } from "react";
import { connect } from "react-redux";
// import { createUserNameAction, SetUserNameAction } from "../../store/actions";

import { IStore, setUserName } from "../../store/reducers";

interface IProps {
  setUserName: (arg: string) => any;
  userName: string;
}

const Page2: React.FC<IProps> = ({ setUserName, userName }) => {
  const [isShownName, setIsShownName] = useState(false);
  const setName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const showName = () => {
    setIsShownName(false);
  };
  const hideName = () => {
    setIsShownName(true);
  };
  return (
    <div
      className="pageWrapper"
      style={{
        backgroundColor: "#d68eb0",
        padding: "50px",
      }}
    >
      {isShownName ? (
        <>
          <div>Каково ваше имя?</div>
          <input
            value={userName}
            onChange={setName}
            style={{ height: "30px", fontSize: "16px", margin: "10px" }}
          />
          <div
            style={{
              padding: "20px",
              margin: "20px",
              border: "1px solid #70baeb",
              borderRadius: "2px",
              cursor: "pointer",
            }}
            onClick={showName}
          >
            Save your name
          </div>
        </>
      ) : (
        <div style={{ textAlign: "center" }}>
          Ваше имя {userName}
          <div
            style={{
              padding: "20px",
              margin: "20px",
              border: "1px solid #9aee81",
              borderRadius: "2px",
              cursor: "pointer",
            }}
            onClick={hideName}
          >
            Изменить имя
          </div>
        </div>
      )}
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
