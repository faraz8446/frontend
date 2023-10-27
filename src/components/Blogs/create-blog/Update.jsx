import React, { useState, useEffect } from "react";
import {
  Box,
  makeStyles,
  TextareaAutosize,
  FormControl,
  Typography,
  InputBase,
} from "@material-ui/core";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { AddCircle as Add } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import Button from "../../UI/Button";
import { updateBlog, getBlog } from "../../../API/api";
import swal from "sweetalert";

const initialPost = {
  title: "",
  description: "",
  picture: "",
  username: "umair",
  categories: "Tech",
  createdDate: new Date(),
};

const Update = ({ match }) => {
  const classes = useStyle();
  const history = useHistory();
  const [categories, setCategories] = useState();
  const [post, setPost] = useState(initialPost);

  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  useEffect(() => {
    const fetchData = async () => {
      let data = await getBlog(match.params.id);
      setPost(data);
    };
    fetchData();
  }, []);

  const updateBlogPost = async () => {
    post.categories = categories;
    await updateBlog(match.params.id, post);
    swal("Your article is updated successfully!", " ", "success", {
      timer: 2000,
    });
    history.push(`/details/${match.params.id}`);
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
      <Typography className={classes.heading}>Update Your Post Here</Typography>
      <FormControl className={classes.title}>
        <InputBase
          onChange={(e) => handleChange(e)}
          value={post.title}
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
        rowsMin={5}
        placeholder="Tell your story..."
        className={classes.textarea}
        name="description"
        onChange={(e) => handleChange(e)}
        value={post.description}
      />
      <br />
      <div>
        <Button
          onClick={() => updateBlogPost()}
          variant="contained"
          color="primary"
        >
          Update
        </Button>
      </div>
      {/* <label htmlFor="fileInput">
        <Add className={classes.addIcon} fontSize="large" color="action" />
      </label>
      <input type="file" id="fileInput" style={{ display: "none" }} />
      <img src={url} alt="post" className={classes.image} /> */}
    </Box>
  );
};

export default Update;

const useStyle = makeStyles((theme) => ({
  container: {
    margin: "50px 100px",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
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
  heading: {
    marginLeft: 390,
    fontSize: 25,
    color: "#787878",
  },
  textfield: {
    flex: 1,
    margin: "0 30px",
    fontSize: 25,
  },
  textarea: {
    width: "100%",
    border: "none",
    marginTop: 10,
    fontSize: 18,
    background: "#d8e4ec",
    "&:focus-visible": {
      outline: "none",
    },
  },
}));
