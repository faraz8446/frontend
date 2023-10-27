import React from "react";
import Semes from "../Service/Semes";
import { useHistory } from "react-router-dom";

function Mathematics() {
  const navigate = useHistory();
  const filterFunc = (names) => {
    const updatedList = Semes.filter((currElem) => {
      return currElem.names === names;
    });
    // console.log(updatedList);
    if (updatedList[0].names === "First Semester") {
      return navigate.push("/MathsFirst");
    } else if (updatedList[0].names === "Second Semester") {
      return navigate.push("/MathsSecond");
    } else if (updatedList[0].names === "Third Semester") {
      return navigate.push("/MathsThird");
    } else if (updatedList[0].names === "Forth Semester") {
      return navigate.push("/MathsForth");
    } else if (updatedList[0].names === "Fifth Semester") {
      return navigate.push("/MathsFifth");
    } else if (updatedList[0].names === "Sixth Semester") {
      return navigate.push("/MathsSixth");
    } else if (updatedList[0].names === "Seventh Semester") {
      return navigate.push("/MathsSeventh");
    } else if (updatedList[0].names === "Eighth Semester") {
      return navigate.push("/MathsEighth");
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
}

export default Mathematics;
