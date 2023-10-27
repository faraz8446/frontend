import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../UI/Button";
import { makeStyles, Grid } from "@material-ui/core";
import { green, grey } from "@material-ui/core/colors";
import Footer from "../../../Blogs/footer/Footer";
import Slider from "../../../Blogs/sliders/Slider";
import AskDetail from "../../../Blogs/sliders/AskDetail";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./HomeDetail.css";

const useStyle = makeStyles({
  mycontainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingTop: "5px",
    //flexDirection: "column",
  },

  mytext1: {
    border: "1px  #b4b4b4",
    color: "Blue",
    margin: 40,
    fontWeight: 1000,
    //marginTop: 150,
    fontSize: 500,
    //display: "flex",
    fontWeight: "bold",
    //alignItems: "center",
    //flexDirection: "column",
    //justifyContent: "center",
    height: 20,
  },
});

const HomeDetail = () => {
  const classes = useStyle();
  return (
    <React.Fragment>
      <Slider />
      <CardGroup>
        <Link to="/ourhome">
          <Card
            style={{
              width: "20rem",
              height: "28rem",
              marginLeft: "40px",
              padding: "5px",
              marginTop: "30px",
              marginRight: "10px",
            }}
          >
            <Card.Img
              style={{ width: "18rem", height: "22rem" }}
              variant="top"
              src="https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
            />
            <Card.Body>
              <Card.Title>Blogs</Card.Title>
              <Card.Text>This is where you can share your thoughts.</Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link to="/ask">
          <Card
            style={{
              width: "20rem",
              height: "28rem",
              marginLeft: "10px",
              padding: "5px",
              marginTop: "30px",
              marginRight: "10px",
            }}
          >
            <Card.Img
              variant="top"
              style={{ width: "18rem", height: "22rem" }}
              src="https://www.secondnature.com.au/wp-content/uploads/2015/10/shutterstock_1916496068-1024x384.jpg"
            />
            <Card.Body>
              <Card.Title>Ask</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link to="/docs">
          <Card
            style={{
              width: "20rem",
              height: "28rem",
              marginLeft: "10px",
              padding: "5px",
              marginTop: "30px",
              marginRight: "10px",
            }}
          >
            <Card.Img
              variant="top"
              style={{ width: "18rem", height: "22rem" }}
              src="https://www.careeraddict.com/uploads/article/58365/illustration-business-documents.jpg"
            />
            <Card.Body>
              <Card.Title>Docs</Card.Title>
              <Card.Text>
                Here you can find documents related to your course.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link to="/hostel">
          <Card
            style={{
              width: "20rem",
              height: "28rem",
              marginLeft: "10px",
              padding: "5px",
              marginTop: "30px",
              marginRight: "10px",
            }}
          >
            <Card.Img
              variant="top"
              style={{ width: "18rem", height: "22rem" }}
              src="https://q-xx.bstatic.com/xdata/images/hotel/max500/173277397.jpg?k=9266967bd847aeadc985896476ac397443c8d36113b469c5bc0898dd8fd648e3&o="
            />
            <Card.Body>
              <Card.Title>Hostel</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </CardGroup>

      <div>
        <AskDetail />
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </React.Fragment>
  );
};

export default HomeDetail;

// import React from "react";
// import { Link } from "react-router-dom";
// import Button from "../../../UI/Button";
// import { makeStyles, Grid } from "@material-ui/core";
// import { green, grey } from "@material-ui/core/colors";
// import Footer from "../../../Blogs/footer/Footer";
// import Slider from "../../../Blogs/sliders/Slider";
// import AskDetail from "../../../Blogs/sliders/AskDetail";
// import "./HomeDetail.css";

// const useStyle = makeStyles({
//   mycontainer: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     width: "100%",
//     paddingTop: "5px",
//     //flexDirection: "column",
//   },
//   container1: {
//     border: "1px solid #84afbc",
//     background: grey,

//     background: `url(${"https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"})`,
//     borderRadius: 10,
//     borderColor: green,
//     margin: 20,
//     fontSize: 30,
//     display: "flex",
//     fontWeight: "bold",
//     alignItems: "center",
//     flexDirection: "column",
//     justifyContent: "center",
//     height: 300,

//     width: "70%",
//     "& > *": {
//       padding: "0px 0px 0px 0px",
//     },
//     "&:hover": {
//       opacity: 0.4,
//       border: "1px solid white",
//     },
//   },

//   container2: {
//     border: "1px solid #84afbc",
//     background: grey,

//     background: `url(${"https://www.secondnature.com.au/wp-content/uploads/2015/10/shutterstock_1916496068-1024x384.jpg"})`,
//     borderRadius: 10,
//     borderColor: green,
//     margin: 20,
//     fontSize: 30,
//     display: "flex",
//     fontWeight: "bold",
//     alignItems: "center",
//     flexDirection: "column",
//     justifyContent: "center",

//     height: 300,
//     width: "70%",
//     "& > *": {
//       padding: "0px 0px 0px 0px",
//     },
//     "&:hover": {
//       opacity: 0.4,
//       border: "1px solid white",
//     },
//   },
//   container3: {
//     border: "1px solid #84afbc",
//     background: grey,

//     background: `url(${"https://www.careeraddict.com/uploads/article/58365/illustration-business-documents.jpg"})`,
//     borderRadius: 10,
//     borderColor: green,
//     margin: 20,
//     display: "flex",
//     alignItems: "center",
//     flexDirection: "column",
//     justifyContent: "center",
//     fontSize: 30,

//     fontWeight: "bold",
//     height: 300,
//     width: "70%",
//     "& > *": {
//       padding: "0px 0px 0px 0px",
//     },
//     "&:hover": {
//       opacity: 0.4,
//       border: "1px solid white",
//     },
//   },
//   container4: {
//     border: "1px solid #84afbc",
//     background: grey,

//     background: `url(${"https://q-xx.bstatic.com/xdata/images/hotel/max500/173277397.jpg?k=9266967bd847aeadc985896476ac397443c8d36113b469c5bc0898dd8fd648e3&o="})`,
//     borderRadius: 10,
//     borderColor: green,
//     margin: 20,
//     fontSize: 30,
//     fontWeight: "bold",
//     display: "flex",
//     alignItems: "center",
//     flexDirection: "column",
//     justifyContent: "center",
//     height: 300,

//     width: "70%",
//     "& > *": {
//       padding: "0px 0px 0px 0px",
//     },
//     "&:hover": {
//       opacity: 0.4,
//       border: "1px solid white",
//     },
//   },
//   text1: {
//     opacity: 1,
//   },
//   mytext1: {
//     border: "1px  #b4b4b4",
//     color: "Blue",
//     margin: 40,
//     fontWeight: 1000,
//     //marginTop: 150,
//     fontSize: 500,
//     //display: "flex",
//     fontWeight: "bold",
//     //alignItems: "center",
//     //flexDirection: "column",
//     //justifyContent: "center",
//     height: 20,
//   },
// });

// const HomeDetail = () => {
//   const classes = useStyle();
//   return (
//     <React.Fragment>
//       <Slider />
//       <div className={classes.mycontainer}>
//         <Link className={classes.container1} to="/ourhome">
//           <div className={classes.mytext1}>
//             <h1>BLOGS</h1>
//           </div>
//         </Link>
//         <Link className={classes.container2} to="/ask">
//           <div className={classes.mytext1}>
//             <h1>ASK</h1>
//           </div>
//         </Link>
//         <Link className={classes.container3} to="/docs">
//           <div className={classes.mytext1}>
//             <h1>DOCS</h1>
//           </div>
//         </Link>
//         <Link className={classes.container4} to="/hostel">
//           <div className={classes.mytext1}>
//             <h1>HOSTELS</h1>
//           </div>
//         </Link>
//       </div>
//       <div>
//         <AskDetail />
//       </div>
//       {/* <div>
//         <Footer />
//       </div> */}
//     </React.Fragment>
//   );
// };

// export default HomeDetail;
