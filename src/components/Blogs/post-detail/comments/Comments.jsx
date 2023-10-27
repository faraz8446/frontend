import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextareaAutosize,
  makeStyles,
} from "@material-ui/core";
import { selectUser } from "../../../../feature/userSlice";
import { useSelector } from "react-redux";
import { newComment, getComments } from "../../../../API/api";
import swal from "sweetalert";
//components
import Comment from "./Comment";
import Button from "../../../UI/Button";

const useStyles = makeStyles({
  container: {
    marginTop: 100,
    width: "80%",
    marginLeft: "100",
    display: "flex",
    "& > *": {
      // padding: '10px '
    },
  },
  container1: {
    marginTop: 20,
    marginLeft: 70,
    display: "flex",
    "& > *": {
      // padding: '10px '
    },
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: "50%",
  },
  textarea: {
    height: 100,
    width: "100%",
    margin: "0 20px",
  },
  button: {
    height: 20,
  },
});
const initialValue = {
  name: "",
  postId: "",
  date: new Date(),
  comments: "",
};

const Comments = ({ post }) => {
  const user = useSelector(selectUser);

  const classes = useStyles();
  const url = "https://static.thenounproject.com/png/12017-200.png";

  const [comment, setComment] = useState(initialValue);
  const [comments, setComments] = useState([]);
  const [data, setData] = useState();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await getComments(post._id);
      setComments(response);
    };
    getData();
    post.username = user.displayName;
  }, [toggle, post]);

  const handleChange = (e) => {
    setComment({
      ...comment,
      name: post.username,
      postId: post._id,
      comments: e.target.value,
    });
    setData(e.target.value);
  };

  const addComment = async () => {
    await newComment(comment);
    swal("Your comment is added successfully!", " ", "success", {
      timer: 2000,
      text: "Redirecting...",
    });
    setData("");
    setToggle((prev) => !prev);
  };

  console.log(post);
  return (
    <Box>
      <Box className={classes.container} style={{ marginLeft: "100px" }}>
        <img src={url} className={classes.image} alt="dp" />
        <TextareaAutosize
          rowsMin={5}
          className={classes.textarea}
          placeholder=" Ask what's on your mind.."
          onChange={(e) => handleChange(e)}
          value={data}
        />
      </Box>
      <Box className={classes.container1} style={{ marginLeft: "170px" }}>
        <Button
          color="primary"
          marginTop="10"
          className={classes.button}
          onClick={(e) => addComment(e)}
        >
          Post
        </Button>
      </Box>
      <Box>
        {comments &&
          comments.map((comment) => (
            <Comment comment={comment} setToggle={setToggle} />
          ))}
      </Box>
    </Box>
  );
};

export default Comments;
