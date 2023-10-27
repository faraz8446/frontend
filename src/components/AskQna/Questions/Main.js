import React, { useState, useEffect } from "react";
import "./css/Main.css";
import AllQuestions from "./AllQuestions";
import { getAllQuestions } from "../../../API/api";
import { Link } from "react-router-dom";
import QBox from "./QBox";
import SearchIcon from "@material-ui/icons/Search";

function Main({ questions }) {
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const getQuestion = async () => {
      let data = await getAllQuestions();
      setPosts(data);
    };
    getQuestion();
  }, []);

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <QBox />
        </div>

        <div className="main-desc">
          <p>{questions.length} questions</p>
        </div>
        <div className="Filter">
          <h4>Search Questions</h4>
          <SearchIcon />
          <input
            style={{ width: "30%", height: "30px" }}
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchTitle(e.target.value)}
          />

          {posts
            .filter((value) => {
              if (searchTitle === "") {
                //return value;
              } else if (
                value?.title?.toLowerCase().includes(searchTitle?.toLowerCase())
              ) {
                return value;
              }
            })
            .map((item) => (
              <div class="card">
                <div class="card-body">
                  <Link to={`/question?q=${item?._id}`} key={item.id}>
                    <h5>{item?.title}</h5>
                  </Link>
                </div>
              </div>
            ))}
        </div>
        <div style={{ marginBottom: "20px" }}></div>
        <div className="questions">
          {questions?.map((qd) => (
            <div className="question">
              <AllQuestions data={qd} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
