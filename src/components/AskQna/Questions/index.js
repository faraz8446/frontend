import React, { useEffect, useState } from "react";
import { getAllQuestions } from "../../../API/api";
import Main from "./Main";

import "./css/bar.css";
function Index() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      let data = await getAllQuestions();
      setQuestions(data);
    };
    getQuestions();
  }, []);
  return (
    <div className="ask-index">
      <div className="ask-index-content">
        <Main questions={questions} />
      </div>
    </div>
  );
}

export default Index;
