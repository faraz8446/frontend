import React from "react";
import Semes from "../Service/Semes";
import { useHistory } from "react-router-dom";

function Chemical() {
  const navigate = useHistory();
  const filterFunc = (names) => {
    const updatedList = Semes.filter((currElem) => {
      return currElem.names === names;
    });
    // console.log(updatedList);
    if (updatedList[0].names === "First Semester") {
      return navigate.push("/ChemFirst");
    } else if (updatedList[0].names === "Second Semester") {
      return navigate.push("/ChemSecond");
    } else if (updatedList[0].names === "Third Semester") {
      return navigate.push("/ChemThird");
    } else if (updatedList[0].names === "Forth Semester") {
      return navigate.push("/ChemForth");
    } else if (updatedList[0].names === "Fifth Semester") {
      return navigate.push("/ChemFifth");
    } else if (updatedList[0].names === "Sixth Semester") {
      return navigate.push("/ChemSixth");
    } else if (updatedList[0].names === "Seventh Semester") {
      return navigate.push("/ChemSeventh");
    } else if (updatedList[0].names === "Eighth Semester") {
      return navigate.push("/ChemEighth");
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

export default Chemical;
