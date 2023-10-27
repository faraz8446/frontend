import { makeStyles, Grid, Button, Box } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../feature/userSlice";
import { Link, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { categories } from "../../../constants/data";
import "./blogstabs.css";
import SearchIcon from "@material-ui/icons/Search";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import swal from "sweetalert";
import { getAllBlogs } from "../../../API/api";

const useStyle = makeStyles({
  table: {
    border: "1px 1px 1px 1px solid black",
    // padding: "20px",
    borderRadius: 10,
    //background: "#d8e4ec",
    //position: "sticky",
    top: 10,

    marginLeft: 10,
  },
  write: {
    margin: 25,
    //width: "85%",
    background: "#347c91",
    color: "white",
    textDecoration: "none",
    marginTop: 20,
    marginRight: 10,
  },
  link: {
    textDecoration: "none",

    "&:hover": {
      background: "#fafdfb",
      color: "black",
    },
  },
});

const Categories = () => {
  const classes = useStyle();
  const user = useSelector(selectUser);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  //const location = useLocation();
  //const category = new URLSearchParams(location.search);
  const { search } = useLocation();
  const location = useLocation();
  //let params = new URLSearchParams(location.search);
  //let search = window.location.search;

  //const category = new URLSearchParams(search);
  //const id = params.get("q");
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let data = await getAllBlogs(search);
      setPosts(data.reverse());
      setLoading(false);
      //getPosts(data);
    };
    fetchData();
  }, [search]);
  const history = useHistory();
  // useEffect(() => {
  //   async function getQuestion() {
  //     setLoading(true);
  //     await axios.get("/api/question").then((response) => {
  //       setPosts(response.data.reverse());
  //       setLoading(false);
  //       // console.log(res.data)
  //     });
  //   }
  //   getQuestion();
  // }, []);

  const checkAuth = () => {
    if (user === null) {
      swal("Login or Signup to Answer!", " ", "warning", { timer: 2000 });
      history.push("/auth");
    } else {
      history.push("/add-question");
    }
  };
  const [value, setValue] = useState("");
  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };
  return (
    <div>
      <Link
        // to={`/create/${location.search}`}
        to={`/create/${location.search}`}
        style={{ marginLeft: "70px" }}
      >
        <Button
          variant="contained"
          className={classes.write}
          onClick={checkAuth}
        >
          Write an article!
        </Button>
      </Link>

      {/* <Link to={"/myblogs"}>
        <Button className={classes.write} style={{ marginTop: "20px" }}>
          My Blogs
        </Button>
      </Link> */}
      <div
        className="Filter"
        style={{ marginLeft: "465px", marginTop: "-58px" }}
      >
        <SearchIcon />
        <input
          style={{ width: "300px", height: "35px" }}
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchTitle(e.target.value)}
        />

        {posts
          .filter((value) => {
            if (searchTitle === "") {
              //return value;
            } else if (
              value?.title?.toLowerCase().includes(searchTitle?.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item) => (
            <div
              style={{ width: "50%", marginTop: "20px", marginRight: "300px" }}
            >
              <div class="card">
                <h5 class="card-header">
                  {" "}
                  <span style={{ color: "red" }}>Category: </span>
                  {item?.categories}
                </h5>
                <div class="card-body">
                  <h6>
                    <span style={{ color: "red" }}>Title: </span>
                    {item?.title}
                  </h6>
                  <Link to={`details/${item?._id}`} key={item.id}>
                    Click To View
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* <DropdownButton
        style={{ marginLeft: "1040px", marginTop: "-61px" }}
        alignRight
        title="Categories List"
        id="dropdown-menu-align-right"
        onSelect={handleSelect}
      >
        {categories.map((category) => (
          <Dropdown.Item eventKey="category"> */}
      {/* <Link to={`/?category=${category.type}`} className={classes.link}> */}
      {/* <Link to="/ourhome" className={classes.link}>
              {category}
            </Link>
          </Dropdown.Item>
        ))}
      </DropdownButton> */}
    </div>
    // <>
    //   <Link
    //     // to={`/create/${location.search}`}
    //     to={`/create?category=${category}`}
    //     style={{ textDecoration: "none" }}
    //   >
    //     <Button
    //       variant="contained"
    //       className={classes.write}
    //       onClick={checkAuth}
    //     >
    //       Write an article!
    //     </Button>
    //   </Link>

    //   <Table className={classes.table}>
    //     <TableHead>
    //       <TableCell>
    //         <Link to={"/ourhome"} className={classes.link}>
    //           All Categories
    //         </Link>
    //       </TableCell>
    //     </TableHead>
    //     <TableBody>
    //       {categories.map((category) => (
    //         <TableRow key={category.id}>
    //           <TableCell style={{ padding: "15px" }}>
    //             {/* <Link to={`/?category=${category}`} className={classes.link}>
    //               {category}
    //             </Link> */}
    //             {/* <Link to={`/?category=${category}`} className={classes.link}> */}
    //             <Link to={"/ourhome"} className={classes.link}>
    //               {category}
    //             </Link>
    //           </TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </>
  );
};

export default Categories;

// // import {
// //   Button,
// //   Table,
// //   TableHead,
// //   TableRow,
// //   TableCell,
// //   TableBody,
// //   styled,
// // } from "@mui/material";

// import {
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   makeStyles,
//   Grid,
//   Button,
// } from "@material-ui/core";
// import { Link, useLocation } from "react-router-dom";

// import { categories } from "../../../constants/data";
// const useStyle = makeStyles({
//   table: {
//     border: "1px 1px 1px 1px solid black",
//     // padding: "20px",
//     borderRadius: 10,
//     background: "#d8e4ec",
//     position: "sticky",
//     top: 10,

//     marginLeft: 10,
//   },
//   write: {
//     margin: 25,
//     width: "85%",
//     background: "#347c91",
//     color: "white",
//     textDecoration: "none",
//     marginTop: 20,
//     marginRight: 10,
//   },
//   link: {
//     textDecoration: "none",

//     "&:hover": {
//       background: "#fafdfb",
//       color: "black",
//     },
//   },
// });

// // const StyledTable = styled(Table)`
// //   border: 1px solid rgba(224, 224, 224, 1);
// // `;

// // const StyledButton = styled(Button)`
// //   margin: 20px;
// //   width: 85%;
// //   background: #6495ed;
// //   color: #fff;
// //   text-decoration: none;
// // `;

// // const StyledLink = styled(Link)`
// //   text-decoration: none;
// //   color: inherit;
// // `;

// const Categories = () => {
//   //const [searchParams] = useSearchParams();
//   //const category = searchParams.get("category");
//   const location = useLocation();
//   let category = new URLSearchParams(location.search);
//   return (
//     <>
//       <Link
//         to={`/create?category=${category || ""}`}
//         style={{ textDecoration: "none" }}
//       >
//         <Button variant="contained">Create Blog</Button>
//       </Link>

//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>
//               <Link to={"/"}>All Categories</Link>
//             </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {categories.map((category) => (
//             <TableRow key={category.id}>
//               <TableCell>
//                 <Link to={`/?category=${category.type}`}>{category}</Link>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </>
//   );
// };

// export default Categories;
