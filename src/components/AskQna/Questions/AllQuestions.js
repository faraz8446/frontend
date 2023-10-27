import { Avatar } from "@material-ui/core";
import "./css/AllQuestions.css";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../../feature/userSlice";

function AllQuestions({ data }) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  const user = useSelector(selectUser);

  return (
    <div class="card text-center" style={{ width: "100ch", height: "42ch" }}>
      <div class="card-header" style={{ background: "rgb(196 226 255)" }}>
        <Avatar
          src={data?.user?.photo}
          style={{
            cursor: "pointer",
            marginTop: "10px",
          }}
        />
        <p style={{ marginTop: "-30px" }}>
          {data?.user?.displayName
            ? data?.user?.displayName
            : data?.user?.email}
        </p>
      </div>
      <Link className="all-questions-container" to={`/question?q=${data?._id}`}>
        <div class="card-body">
          <h5 class="card-title" style={{ color: "black", fontSize: "2rem" }}>
            {" "}
            {ReactHtmlParser(truncate(data.title, 50))}
          </h5>
          <p class="card-text" style={{ color: "blue" }}>
            {ReactHtmlParser(truncate(data.body, 150))}
          </p>
        </div>
      </Link>
      <div
        class="card-footer text-muted"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <small>asked at {new Date(data?.created_at).toLocaleString()}</small>
        <p>{data?.answerDetails?.length} Answers</p>
      </div>
    </div>
  );
}

export default AllQuestions;
