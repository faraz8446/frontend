import React from "react";

import "./Banner.css";

const Banner = ({}) => {
  //const [modal, setModal] = React.useState(false);

  return (
    <div className="ban">
      <div className="ban-container">
        <div className="ban-content">
          <h2>
            Write experiences <br /> Share information
            <br />
          </h2>
          <h6>
            A place for you to share your thoughts, experiences and
            <br />
            information related to jobs, internships and scholarships here.
          </h6>
          {/* <button onClick={() => setModal(true)}>Start Writing</button> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
// import { makeStyles, Box, Typography } from "@material-ui/core";

// const useStyle = makeStyles({
//   image: {
//     width: "100%",
//     background: `url(${"https://www.buetk.edu.pk/wp-content/uploads/2020/02/Hostels.png"})`,
//     height: "50vh",
//     // display: "flex",
//     // flexDirection: "column",
//     backgroundSize: "cover",
//     opacity: 0.7,
//     alignItems: "center",
//     marginTop: 0,
//     marginBottom: 30,
//     justifyContent: "center",
//     "& :first-child": {
//       fontSize: 90,
//       color: "#347c91",
//       fontFamily: "Cursive",
//       opacity: 1.0,
//     },
//     "& :last-child": {
//       fontSize: 25,
//       //background: '#FFFFFF',
//       color: "black",
//       fontFamily: "Monospace",
//       opacity: 1.0,
//     },
//   },
//   txt: {
//     opacity: 1,
//   },
// });

// const Banner = () => {
//   const classes = useStyle();

//   return (
//     <>
//       <div className={classes.image}>
//         {/* <h1 className={classes.txt}>AskCUI</h1>
//         <p>One Stop Solution for all your worries in University!!</p> */}
//       </div>
//     </>
//   );
// };

// export default Banner;
