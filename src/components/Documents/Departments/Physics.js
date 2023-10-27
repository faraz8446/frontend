import React from "react";
import Semes from "../Service/Semes";
import { useHistory } from "react-router-dom";

const Physics = () => {
  const navigate = useHistory();
  const filterFunc = (names) => {
    const updatedList = Semes.filter((currElem) => {
      return currElem.names === names;
    });
    // console.log(updatedList);
    if (updatedList[0].names === "First Semester") {
      return navigate.push("/PhysFirst");
    } else if (updatedList[0].names === "Second Semester") {
      return navigate.push("/PhysSecond");
    } else if (updatedList[0].names === "Third Semester") {
      return navigate.push("/PhysThird");
    } else if (updatedList[0].names === "Forth Semester") {
      return navigate.push("/PhysForth");
    } else if (updatedList[0].names === "Fifth Semester") {
      return navigate.push("/PhysFifth");
    } else if (updatedList[0].names === "Sixth Semester") {
      return navigate.push("/PhysSixth");
    } else if (updatedList[0].names === "Seventh Semester") {
      return navigate.push("/PhysSeventh");
    } else if (updatedList[0].names === "Eighth Semester") {
      return navigate.push("/PhysEighth");
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

export default Physics;
