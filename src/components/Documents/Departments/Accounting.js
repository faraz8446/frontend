import React from "react";
import Semes from "../Service/Semes";
import { useHistory } from "react-router-dom";

const Accounting = () => {
  const navigate = useHistory();
  const filterFunc = (names) => {
    const updatedList = Semes.filter((currElem) => {
      return currElem.names === names;
    });
    // console.log(updatedList);
    if (updatedList[0].names === "First Semester") {
      return navigate.push("/AccFirst");
    } else if (updatedList[0].names === "Second Semester") {
      return navigate.push("/AccSecond");
    } else if (updatedList[0].names === "Third Semester") {
      return navigate.push("/AccThird");
    } else if (updatedList[0].names === "Forth Semester") {
      return navigate.push("/AccForth");
    } else if (updatedList[0].names === "Fifth Semester") {
      return navigate.push("/AccFifth");
    } else if (updatedList[0].names === "Sixth Semester") {
      return navigate.push("/AccSixth");
    } else if (updatedList[0].names === "Seventh Semester") {
      return navigate.push("/AccSeventh");
    } else if (updatedList[0].names === "Eighth Semester") {
      return navigate.push("/AccEighth");
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

export default Accounting;
