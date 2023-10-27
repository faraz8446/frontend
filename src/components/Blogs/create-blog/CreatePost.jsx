import React, { useState, useEffect, useContext } from "react";

import {
  Box,
  makeStyles,
  TextareaAutosize,
  FormControl,
  InputBase,
  Typography,
} from "@material-ui/core";
import { AddCircle as Add, CallEnd } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";
import Button from "../../UI/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import swal from "sweetalert";
import { createBlog } from "../../../API/api";
import { useSelector } from "react-redux";
import { selectUser } from "../../../feature/userSlice";
const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

const CreatePost = () => {
  const user = useSelector(selectUser);
  const classes = useStyle();
  const history = useHistory();

  const [categories, setCategories] = useState();
  const initialPost = {
    title: "",
    description: "",
    picture: "",
    image: "",
    username: "umair g ",
    categories: "All:",
    createdDate: new Date(),
  };
  const [post, setPost] = useState(initialPost);

  const url =
    "https://www.shutterstock.com/image-photo/career-businessman-on-blurred-abstract-260nw-1152345887.jpg";

  useEffect(() => {
    // post.categories = location.search?.split("=")[1] || "All";
    post.categories = categories;
    post.picture = user.photo;
    post.username = user.displayName;
  }, [categories]);

  const savePost = async () => {
    await createBlog(post);
    swal("Your article is submitted successfully!", " ", "success", {
      timer: 2000,
    });

    history.push("/ourhome");
  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <Box
      border={1}
      borderColor="linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)"
      borderRadius={10}
      boxShadow="10px 10px 20px #ccc"
      padding={6}
      margin={"auto"}
      marginTop={4}
      marginBottom={4}
      display="flex"
      flexDirection={"column"}
      width={"80%"}
    >
      <Typography className={classes.heading}>
        Write Your Experience Here
      </Typography>
      <FormControl className={classes.title}>
        <InputBase
          onChange={(e) => handleChange(e)}
          name="title"
          placeholder="Title"
          className={classes.textfield}
        />
      </FormControl>
      <br />
      <select
        id="categories"
        value={categories}
        onChange={(e) => setCategories(e.target.value)}
        class="form-select"
        aria-label="Default select example"
      >
        <option>Select Category</option>
        <option value="Jobs">Jobs</option>
        <option value="Scholarships">Scholarships</option>
        <option value="Career">Career</option>
        <option value="Internships">Internships</option>
        <option value="Technology">Technology</option>
        <option value="Experience">Experience</option>
      </select>

      <TextareaAutosize
        style={{ width: "100%" }}
        rowsMin={5}
        placeholder="Tell your story..."
        className={classes.textarea}
        name="description"
        onChange={(e) => handleChange(e)}
      />

      {/* <Add className={classes.addIcon} fontSize="large" color="action" />
      <img
        className={classes.image}
        src={url}
        alt="banner"
        style={{ width: "100%" }}
      /> */}
      <div>
        <Button
          onClick={() => savePost()}
          variant="contained"
          marginTop="20px"
          color="primary"
        >
          Publish
        </Button>
      </div>
    </Box>
  );
};

export default CreatePost;

const useStyle = makeStyles((theme) => ({
  container: {
    margin: "50px 100px",
    width: "75%",

    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  heading: {
    marginLeft: 390,
    fontSize: 25,
    color: "Blue",
    marginTop: "-30px",
    marginBottom: "30px",
  },
  image: {
    width: "100%",
    height: "25vh",
    objectFit: "cover",
    marginBottom: 20,
  },
  title: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    background: "#d8e4ec",
  },
  textfield: {
    flex: 1,
    margin: "0 30px",
    fontSize: 25,
  },
  dropdown: {
    marginTop: "20px",
  },
  textarea: {
    width: "100%",
    border: "none",
    marginTop: 50,
    fontSize: 18,
    background: "#d8e4ec",
    "&:focus-visible": {
      outline: "none",
    },
  },
}));
