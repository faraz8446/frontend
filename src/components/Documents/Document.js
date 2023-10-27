import "./App.css";
import Home from "./DepHome";


function Document() {
  return (
    <div>
    <Home/>
    </div>
  );
}

export default Document;

// import { Box, makeStyles, Typography, Link } from "@material-ui/core";
// import { GitHub, Instagram, Email } from "@material-ui/icons";

// const useStyles = makeStyles({
//   wrapper: {
//     padding: 20,
//     "& > *": {
//       marginTop: 50,
//     },
//   },
//   text: {
//     color: "#878787",
//   },
// });

// const Document = () => {
//   const classes = useStyles();
//   return (
//     <Box>
//       <Box className={classes.wrapper}>
//         <Typography variant="h3">AskCUI</Typography>
//         <Typography variant="h5" className={classes.text}>
//           AskCUI is our FYP project. The purpose of this project is to provide
//           students a platform where they can resolve all their queries.
//           <br />
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Document;
