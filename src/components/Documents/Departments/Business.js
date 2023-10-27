import React from "react";
import Semes from "../Service/Semes";
import { useHistory } from "react-router-dom";

const Business = () => {
  const navigate = useHistory();
  const filterFunc = (names) => {
    const updatedList = Semes.filter((currElem) => {
      return currElem.names === names;
    });
    // console.log(updatedList);
    if (updatedList[0].names === "First Semester") {
      return navigate.push("/BusinFirst");
    } else if (updatedList[0].names === "Second Semester") {
      return navigate.push("/BusinSecond");
    } else if (updatedList[0].names === "Third Semester") {
      return navigate.push("/BusinThird");
    } else if (updatedList[0].names === "Forth Semester") {
      return navigate.push("/BusinForth");
    } else if (updatedList[0].names === "Fifth Semester") {
      return navigate.push("/BusinFifth");
    } else if (updatedList[0].names === "Sixth Semester") {
      return navigate.push("/BusinSixth");
    } else if (updatedList[0].names === "Seventh Semester") {
      return navigate.push("/BusinSeventh");
    } else if (updatedList[0].names === "Eighth Semester") {
      return navigate.push("/BusinEighth");
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

export default Business;
