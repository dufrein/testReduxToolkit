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
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#55dd99",
        fontSize: "30px",
      }}
    >
      Page1
      <div
        style={{
          padding: "20px",
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
          style={{ maxWidth: "500px", maxHeight: "500px" }}
          alt="пёсель"
          src={url}
        ></img>
      ) : isLoading ? (
        <div>Loading</div>
      ) : (
        <div>:(</div>
      )}
    </div>
  );
};

const mapStateToProps = (state: IStore) => ({
  url: state.stuff.url,
  isLoading: state.stuff.isLoading,
});

export default connect(mapStateToProps, { fetchDog })(Page1);
