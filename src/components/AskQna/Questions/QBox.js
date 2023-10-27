import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../feature/userSlice";
import "./css/QBox.css";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

function QBox() {
  const user = useSelector(selectUser);
  const history = useHistory();
  const checkAuth = () => {
    if (user === null) {
      swal("Login or Signup to add question!", " ", "warning", { timer: 2000 });

      history.push("/auth");
    } else {
      history.push("/add-question");
    }
  };
  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar src={user?.photo} />
      </div>
      <div className="quoraBox__quora">
        <h5>Ask Your Query And Get Your Answer</h5>
      </div>
      <div className="quoraBoxbutton">
        <Link to="/add-question">
          <Button onClick={checkAuth}>Add Question</Button>
        </Link>
      </div>
    </div>
  );
}

export default QBox;
