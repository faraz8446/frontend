import { useEffect, useState } from "react";
import { Grid, Box, CircularProgress } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

import { getAllBlogs } from "../../../../API/api";

//components
import Post from "./blog";

const Posts = () => {
  const [posts, getPosts] = useState([]);
  const { search } = useLocation();

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
          <Grid item lg={4} sm={4} xs={12}>
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

export default Posts;

// import { useEffect, useState } from "react";
// import { Grid, Box } from "@material-ui/core";
// import { Link, useLocation } from "react-router-dom";

// import { getAllPosts } from "../../../../service/api";

// //components
// import Post from "./Post";

// const Posts = () => {
//   const [posts, getPosts] = useState([]);
//   const { search } = useLocation();

//   useEffect(() => {
//     const fetchData = async () => {
//       let data = await getAllPosts(search); // params in url
//       getAllPosts();
//     };
//     fetchData();
//   }, [search]);

//   return (
//     <>
//       {posts?.length ? (
//         posts.map((post) => (
//           <Grid item lg={4} sm={4} xs={12}>
//             <Link
//               style={{ textDecoration: "none", color: "inherit" }}
//               to={`details/${post._id}`}
//             >
//               <Post post={post} />
//             </Link>
//           </Grid>
//         ))
//       ) : (
//         <Box style={{ color: "878787", margin: "30px 80px", fontSize: 18 }}>
//           No data is available for selected category
//         </Box>
//       )}
//     </>
//   );
// };

// export default Posts;
