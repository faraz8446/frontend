import React from "react";
import { NavLink } from "react-router-dom";
import Semes from "./Service/Semes";

import DepData from "./Service/Departments";

import { useHistory } from "react-router-dom";

const Main = ({ initData }) => {
  const navigate = useHistory();

  const filterItem = (name) => {
    const updatedList = DepData.filter((currElem) => {
      return currElem.name === name;
    });
    console.log(updatedList[0].name);
    if (updatedList[0].name === "Computer Science Department") {
      return navigate.push("/Cs");
    } else if (updatedList[0].name === "Mechnical Engineering Department") {
      return navigate.push("/Chemical");
    } else if (updatedList[0].name === "Civil Department") {
      return navigate.push("/Archit");
    } else if (updatedList[0].name === "Energy Department") {
      return navigate.push("/Accounting");
    } else if (updatedList[0].name === "English Department") {
      return navigate.push("/Business");
    } else if (updatedList[0].name === "Electrical Engineering Department") {
      return navigate.push("/Electrical");
    } else if (updatedList[0].name === "Electronics Department") {
      return navigate.push("/Mathematics");
    } else if (updatedList[0].name === "Biomedical Department") {
      return navigate.push("/Physics");
    } else if (updatedList[0].name === "Software Engineering Department") {
      return navigate.push("/Psychology");
    } else if (
      updatedList[0].name === "Media and Communication Studies Department"
    ) {
      return navigate.push("/Media");
    } else if (updatedList[0].name === "Pharmacy Department") {
      return navigate.push("/Pharmacy");
    }
  };

  const addEllipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };

  return (
    <>
      <section className="main-card--cointainer">
        {initData.map((currElem) => {
          return (
            <>
              <div className="card-container">
                <div
                  className="card"
                  style={{
                    height: "70ch",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  <div className="card-body">
                    <h2 className="card-title" style={{ fontSize: "2em" }}>
                      {currElem.name}
                    </h2>
                    <span className="card-description subtle">
                      {addEllipsis(currElem.description, 255)}
                    </span>
                    <div className="card-read">READ</div>
                    <img
                      src={currElem.image}
                      alt="images"
                      className="card-media"
                      style={{ height: "100px" }}
                    />
                    <button
                      className="card-tag subtle"
                      onClick={() => filterItem(currElem.name)}
                    >
                      GO
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Main;
