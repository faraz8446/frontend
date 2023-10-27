import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../home/blog/blog";
import { Grid, Box, CircularProgress } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../../feature/userSlice";
import { getAllBlogs } from "../../../API/api";
const UserBlogs = () => {
  const user = useSelector(selectUser);
  const [posts, getPosts] = useState([]);
  const { search } = useLocation();

  //const id = localStorage.getItem("userId");
  useEffect(() => {
    const fetchData = async () => {
      let data = await getAllBlogs(search); // params in url
      getPosts(data);
    };
    fetchData();
  }, [search]);

  return (
    <>
      {posts?.length ? (
        posts.map((post) => (
          <Grid item lg={6} sm={4} xs={12} style={{ marginLeft: "330px" }}>
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
              to={`details/${post._id}`}
            >
              <Post post={post} />
            </Link>
          </Grid>
        ))
      ) : (
        // <Box style={{ color: "878787", margin: "30px 80px", fontSize: 18 }}>
        //   No data is available for selected category
        // </Box>
        <Grid item xs={12}>
          <Box
            p={5}
            mt={5}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress />
          </Box>
        </Grid>
      )}
    </>
  );
};

export default UserBlogs;
