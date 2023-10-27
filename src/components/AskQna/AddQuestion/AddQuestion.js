import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // ES6
import "./index.css";
import Editor from "react-quill/lib/toolbar";
import { selectUser } from "../../../feature/userSlice";
import { useHistory } from "react-router-dom";
import { createQuestion } from "../../../API/api";
import Button from "../../UI/Button";
import swal from "sweetalert";

function AddQuestion() {
  const user = useSelector(selectUser);
  var toolbarOptions = [
    ["bold", "italic", "underline"], // toggled buttons

    // custom button values
    [{ list: "ordered" }, { list: "bullet" }],

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

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

  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [body, setBody] = useState("");
  const history = useHistory();

  const handleQuill = (value) => {
    setBody(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "" && body !== "") {
      const bodyJSON = {
        id: id,
        title: title,
        body: body,
        user: user,
      };

      await createQuestion(bodyJSON);
      swal("Your question is submitted successfully!", " ", "success", {
        timer: 2000,
      });
      history.push("/ask");
    }
  };

  return (
    <div className="add-question">
      <div className="add-question-container">
        <div className="head-title">
          <h1>Ask Your Question</h1>
        </div>
        <div className="question-container">
          <div className="question-options">
            <div className="question-option">
              <div className="title">
                <h3>Add Title</h3>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="e.g What was the merit for BSCS in 2022?"
                />
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3>Question Body</h3>

                <ReactQuill
                  value={body}
                  onChange={handleQuill}
                  modules={Editor.modules}
                  className="react-quill"
                  theme="snow"
                  style={{ backgroundColor: "white" }}
                />
              </div>
            </div>
          </div>
        </div>

        <button onClick={handleSubmit} className="button">
          Add your question
        </button>
      </div>
    </div>
  );
}

export default AddQuestion;
