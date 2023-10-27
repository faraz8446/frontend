import React from "react";
import Semes from "../Service/Semes";
import { useHistory } from "react-router-dom";

const Pharmacy = () => {
  const navigate = useHistory();
  const filterFunc = (names) => {
    const updatedList = Semes.filter((currElem) => {
      return currElem.names === names;
    });
    // console.log(updatedList);
    if (updatedList[0].names === "First Semester") {
      return navigate.push("/PharmFirst");
    } else if (updatedList[0].names === "Second Semester") {
      return navigate.push("/PharmSecond");
    } else if (updatedList[0].names === "Third Semester") {
      return navigate.push("/PharmThird");
    } else if (updatedList[0].names === "Forth Semester") {
      return navigate.push("/PharmForth");
    } else if (updatedList[0].names === "Fifth Semester") {
      return navigate.push("/PharmFifth");
    } else if (updatedList[0].names === "Sixth Semester") {
      return navigate.push("/PharmSixth");
    } else if (updatedList[0].names === "Seventh Semester") {
      return navigate.push("/PharmSeventh");
    } else if (updatedList[0].names === "Eighth Semester") {
      return navigate.push("/PharmEighth");
    }
  };
  return (
    <>
      <section className="main-card--cointainer">
        {Semes.map((currEl) => {
          return (
            <>
              <div className="card-container">
                <div className="card">
                  <div className="card-body">
                    <button
                      onClick={() => filterFunc(currEl.names)}
                      className="card-title"
                    >
                      {currEl.names}
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

export default Pharmacy;
