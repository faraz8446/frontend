import { useState, useEffect, useContext } from "react";
import { Box, makeStyles, Typography, Grid } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { getBlog, deleteBlog, updateBlog } from "../../../API/api";
import { Avatar } from "@material-ui/core";
import swal from "sweetalert";
import { useSelector } from "react-redux";
import { selectUser } from "../../../feature/userSlice";
import { stringAvatar } from "../../../utils/Avatar";
import Comments from "./comments/Comments";

const useStyle = makeStyles((theme) => ({
  container: {
    margin: "50px 100px",
    width: "82%",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  image: {
    width: "80%",
    height: "180px",
    borderRadius: "5px",
    objectFit: "cover",
    marginTop: "30px",
    marginLeft: "120px",
  },
  icons: {
    float: "right",
  },
  icon: {
    margin: 5,
    padding: 5,
    border: "1px solid #878787",
    borderRadius: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 600,
    textAlign: "center",
    margin: "20px 0 10px 0",
    marginLeft: "70px",
  },
  author: {
    color: "#878787",
    display: "flex",
    margin: "20px 0",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const DetailView = ({ match }) => {
  const classes = useStyle();

  const url =
    "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog.png";
  const history = useHistory();

  const [post, setPost] = useState({});
  const user = useSelector(selectUser);

  useEffect(() => {
    const fetchData = async () => {
      let data = await getBlog(match.params.id);
      setPost(data);
    };
    fetchData();
  }, []);

  const deletePost = async () => {
    await deleteBlog(post._id);
    // alert("Blog deleted.");
    swal("Your article is deleted successfully!", " ", "warning", {
      timer: 2000,
      text: "Redirecting...",
    });

    history.push("/ourhome");
  };

  return (
    <Box
      border={0.5}
      borderColor="linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)"
      borderRadius={5}
      boxShadow="10px 10px 20px #ccc"
      padding={2}
      margin={"auto"}
      marginTop={4}
      marginBottom={4}
      display="flex"
      flexDirection={"column"}
      width={"80%"}
    >
      <Box style={{ float: "right", marginRight: "100px", marginTop: "20px" }}>
        {user.displayName === post.username && (
          <>
            <Link to={`/update/${post._id}`} style={{ marginRight: "20px" }}>
              <Edit color="primary" />
            </Link>
            <Delete onClick={() => deletePost()} color="error" />
          </>
        )}
      </Box>
      <Typography className={classes.heading}>{post.title}</Typography>

      <Box className={classes.author}>
        <Link
          to={`/?username=${post.username}`}
          className={classes.link}
          style={{ width: "80%", marginLeft: "120px", color: "blue" }}
        >
          <Avatar
            style={{ marginRight: "250px", marginTop: "-18px" }}
            src={post.picture}
          />
          <Typography>
            <span style={{ fontWeight: 600 }}>{post.username}</span>
          </Typography>
        </Link>
        <Typography style={{ marginRight: "300px", color: "red" }}>
          {post.categories}
        </Typography>
        <Typography
          style={{ width: "80%", marginRight: "-120px", color: "blue" }}
        >
          {new Date(post.createdDate).toDateString()}
        </Typography>
      </Box>

      <Typography style={{ width: "80%", marginLeft: "120px" }}>
        {post.description}
      </Typography>
      <img src={post.image || url} alt="post" className={classes.image} />
      <Comments post={post} />
    </Box>
  );
};

export default DetailView;
