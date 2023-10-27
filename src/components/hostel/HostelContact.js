import { Box, makeStyles, Typography, Link } from "@material-ui/core";
import { GitHub, Instagram, Email } from "@material-ui/icons";

const useStyles = makeStyles({
  banner: {
    backgroundImage: `url(${"https://cdn.pixabay.com/photo/2016/12/15/12/24/contact-us-1908762__340.png"})`,
    width: "100%",
    height: "40vh",
    backgroundPosition: "left 0px top -100px",
    backgroundSize: "cover",
  },
  wrapper: {
    padding: 20,
    "& > *": {
      marginTop: 50,
    },
  },
  text: {
    color: "#878787",
  },
});

const HostelContact = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.banner}></Box>
      <Box className={classes.wrapper}>
        <Typography variant="h3">
          To get the access of hostel and food portal contact us!
        </Typography>
        <Typography variant="h5" className={classes.text}>
          Reach us out on
          <br />
          03166124141
          <br />
          or send us an Email
          <br />
          alrafay@gmail.com / ughaffar936@gmail.com
        </Typography>
        <Typography>
          You will be given an authentication to get access of the hostel and
          food portal from where you can add hostel and food detail
          <br />
          you can also edit the details when even you want.
        </Typography>
      </Box>
    </Box>
  );
};

export default HostelContact;
