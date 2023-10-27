import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import Editor from "react-quill/lib/toolbar";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./index.css";
import swal from "sweetalert";
import "./MainQuestion.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../../feature/userSlice";
import Button from "../../UI/Button";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  component: {
    padding: 10,
    width: "100%",
  },
  container: {
    display: "flex",
    marginBottom: 5,
  },
  name: {
    fontWeight: 600,
    fontSize: 18,
    marginRight: 20,
  },
  date: {
    fontSize: 14,
    color: "#878787",
  },
  delete: {
    marginLeft: "auto",
  },
});

function MainQuestion() {
  const history = useHistory();
  const classes = useStyles();
  var toolbarOptions = [
    ["bold", "italic", "underline"], // toggled buttons

    // custom button values
    [{ list: "ordered" }, { list: "bullet" }],

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],

    ["clean"], // remove formatting button
  ];
  Editor.modules = {
    syntax: false,
    toolbar: toolbarOptions,
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  Editor.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  let search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("q");

  const [questionData, setQuestionData] = useState();
  const [answer, setAnswer] = useState("");

  const user = useSelector(selectUser);

  const handleQuill = (value) => {
    setAnswer(value);
  };

  useEffect(() => {
    async function getQuestionDetails() {
      await axios
        .get(`/api/question/${id}`)
        .then((res) => setQuestionData(res.data[0]))
        .catch((err) => console.log(err));
    }
    getQuestionDetails();
  }, [id]);

  async function getUpdatedAnswer() {
    await axios
      .get(`/api/question/${id}`)
      .then((res) => setQuestionData(res.data[0]))
      .catch((err) => console.log(err));
  }

  const handleSubmit = async () => {
    if (user === null) {
      swal("Login or Signup to Answer !!", " ", "warning", {
        timer: 2000,
      });
      history.push("/auth");
    } else if (answer !== "") {
      const body = {
        question_id: id,
        answer: answer,
        user: user,
      };
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios
        .post("/api/answer", body, config)
        .then(() => {
          swal("Your answer is submitted successfully!", " ", "success", {
            timer: 2000,
          });
          setAnswer("");
          getUpdatedAnswer();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="main">
      <div className="main-container">
        <div
          style={{
            backgroundColor: "rgb(196, 220, 243)",
            paddingTop: "8px",
            marginTop: "-10px",
          }}
        >
          <Link
            style={{
              marginLeft: "40px",
            }}
            to="/add-question"
          >
            <Button>Add Question</Button>
          </Link>
          <div className="question-title-container">
            <h2 className="main-question">
              <span>Question Title:</span>
              <br /> {questionData?.title}
            </h2>
          </div>

          <div style={{ marginTop: "20px" }}>
            <p
              style={{
                marginBottom: "20px",
                marginLeft: "40px",
                fontSize: "1.3rem",
                fontWeight: "300",
              }}
            >
              {questionData && questionData?.answerDetails.length} Answers
            </p>
          </div>
        </div>
        <div className="all-set">
          <div className="all-questions-container">
            <div className="all-questions-left1">
              <div className="author">
                <div className="auth-details">
                  <Avatar
                    src={questionData?.user?.photo}
                    style={{
                      cursor: "pointer",
                    }}
                  />
                  <p>
                    {questionData?.user?.displayName
                      ? questionData?.user?.displayName
                      : questionData?.user?.email}
                  </p>
                </div>
                <small>
                  asked {new Date(questionData?.created_at).toLocaleString()}
                </small>
              </div>
            </div>
            <div className="question-answer">
              <p style={{ marginTop: "15px" }}>
                {ReactHtmlParser(questionData?.body)}
              </p>

              {/* Add Your Answer Body */}

              <div
                className="main-answer"
                style={{ width: "93%", marginLeft: "40px" }}
              >
                <h3
                  style={{
                    fontSize: "22px",
                    margin: "10px 0",
                    fontWeight: "400",
                  }}
                >
                  Your Answer
                </h3>
                <ReactQuill
                  value={answer}
                  onChange={handleQuill}
                  modules={Editor.modules}
                  className="react-quill"
                  theme="snow"
                  style={{
                    height: "150px",
                  }}
                />
              </div>
              <button
                onClick={handleSubmit}
                style={{
                  marginTop: "70px",
                  marginLeft: "35px",
                  maxWidth: "fit-content",
                  border: "white",
                }}
              >
                Add Answer
              </button>
            </div>
          </div>
        </div>

        {/* Answer Body To show answers */}

        <div>
          <p
            style={{
              marginLeft: "40px",
              fontSize: "1.3rem",
              fontWeight: "300",
            }}
          >
            {questionData && questionData?.answerDetails.length} Answers
          </p>
        </div>

        {questionData?.answerDetails.map((answerData) => (
          <>
            <div
              style={{
                marginBottom: "5px",
              }}
              key={answerData._id}
              className="all-questions-detail"
            >
              <div className="all-answers-left">
                <div
                  style={{
                    marginTop: "10px",
                  }}
                  className="author"
                >
                  <div className="auth-details">
                    <Avatar
                      src={answerData?.user?.photo}
                      style={{
                        cursor: "pointer",
                      }}
                    />
                    <p>
                      {answerData?.user?.displayName
                        ? answerData?.user?.displayName
                        : "Umair Ghaffar "}
                    </p>
                  </div>
                  <small>
                    answered at
                    <br />
                    {new Date(answerData.created_at).toLocaleString()}
                  </small>
                </div>
              </div>
              <div className="answer-body">
                {ReactHtmlParser(answerData.answer)}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default MainQuestion;
