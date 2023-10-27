import React from "react";
import Semes from "../Service/Semes";
import { useHistory } from "react-router-dom";

const Psychology = () => {
  const navigate = useHistory();
  const filterFunc = (names) => {
    const updatedList = Semes.filter((currElem) => {
      return currElem.names === names;
    });
    // console.log(updatedList);
    if (updatedList[0].names === "First Semester") {
      return navigate.push("/PsychFirst");
    } else if (updatedList[0].names === "Second Semester") {
      return navigate.push("/PsychSecond");
    } else if (updatedList[0].names === "Third Semester") {
      return navigate.push("/PsychThird");
    } else if (updatedList[0].names === "Forth Semester") {
      return navigate.push("/PsychForth");
    } else if (updatedList[0].names === "Fifth Semester") {
      return navigate.push("/PsychFifth");
    } else if (updatedList[0].names === "Sixth Semester") {
      return navigate.push("/PsychSixth");
    } else if (updatedList[0].names === "Seventh Semester") {
      return navigate.push("/PsychSeventh");
    } else if (updatedList[0].names === "Eighth Semester") {
      return navigate.push("/PsychEighth");
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

export default Psychology;
