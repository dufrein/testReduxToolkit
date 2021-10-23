import React from "react";
import { connect } from "react-redux";
// import { fetchDog } from "../../store/sagas";
import { IStore, fetchDog } from "../../store/reducers";

interface IProps {
  url: string;
  isLoading: boolean;
  fetchDog: () => void;
}

const Page1: React.FC<IProps> = ({ url, isLoading, fetchDog }) => {
  const getUrl = () => {
    console.log("!!!!");
    fetchDog();
  };
  return (
    <div
      className="pageWrapper"
      style={{
        backgroundColor: "#55dd99",
        padding: "50px",
      }}
    >
      <div
        style={{
          padding: "10px",
          margin: "20px",
          border: "1px solid #ff0",
          borderRadius: "2px",
          cursor: "pointer",
        }}
        onClick={getUrl}
      >
        {url ? "Обновить" : "Загрузить"} пёселя
      </div>
      {url && !isLoading ? (
        <img
          style={{ maxWidth: "500px", maxHeight: "400px" }}
          alt="пёсель"
          src={url}
        ></img>
      ) : isLoading ? (
        <div style={{ textAlign: "center" }}>Loading</div>
      ) : (
        <div style={{ textAlign: "center" }}>:(</div>
      )}
    </div>
  );
};

const mapStateToProps = (state: IStore) => ({
  url: state.stuff.url,
  isLoading: state.stuff.isLoading,
});

export default connect(mapStateToProps, { fetchDog })(Page1);
