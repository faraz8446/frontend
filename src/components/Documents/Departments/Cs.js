import React from "react";
import Semes from "../Service/Semes";
import { useHistory } from "react-router-dom";

const Cs = () => {
  const navigate = useHistory();
  const filterFunc = (names) => {
    const updatedList = Semes.filter((currElem) => {
      return currElem.names === names;
    });
    // console.log(updatedList);
    if (updatedList[0].names === "First Semester") {
      return navigate.push("/CsFirst");
    } else if (updatedList[0].names === "Second Semester") {
      return navigate.push("/CsSecond");
    } else if (updatedList[0].names === "Third Semester") {
      return navigate.push("/CsThird");
    } else if (updatedList[0].names === "Forth Semester") {
      return navigate.push("/CsForth");
    } else if (updatedList[0].names === "Fifth Semester") {
      return navigate.push("/CsFifth");
    } else if (updatedList[0].names === "Sixth Semester") {
      return navigate.push("/CsSixth");
    } else if (updatedList[0].names === "Seventh Semester") {
      return navigate.push("/CsSeventh");
    } else if (updatedList[0].names === "Eighth Semester") {
      return navigate.push("/CsEighth");
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

export default Cs;
