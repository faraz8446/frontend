import { Box, makeStyles, Typography, Link } from "@material-ui/core";
import { Email } from "@material-ui/icons";

const useStyles = makeStyles({
  banner: {
    backgroundImage: `url(${"https://r2.community.samsung.com/t5/image/serverpage/image-id/763058iA58E95820D3B3562/image-size/large?v=v2&px=999"})`,
    width: "100%",
    height: "100vh",
    backgroundPosition: "left 0px bottom 0px",
    backgroundSize: "cover",
  },
  wrapper: {
    "& > *": {
      marginTop: 20,
    },
  },
  text: {
    color: "#878787",
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.wrapper}>
        <Typography variant="h3">AskCUI</Typography>
        <Typography variant="h5" className={classes.text}>
          AskCUI University Students whether freshmen or seniors face many
          problems in their university journey. They face problems related to
          admissions, exams, teachers, courses and so on. Another problem
          theyface is hostel accomodation as many students come from far places.
          Finding related documents to their cources is another big challenge
          for students. Selection a career path and interaction with seniors and
          alumni is also difficult for students. Why AskCUI There is no specific
          platform for students where they can get their queries resolved and
          find out all their related stuff at one place is a dream for students.
          AskCUI provides them this platform. What AskCUI Provides A web based
          one stop solution for students. Students ask their queries and other
          students answer them, comment on them. Students add study materials
          and also download them. Blog portion where alumni can share their
          experiences and add about job, internships, scholarships etc. Hostel
          management add hostel details.
        </Typography>
        <Box className={classes.banner}></Box>
        <Typography variant="h5" className={classes.text}>
          AskCUI is our FYP project. The purpose of this project is to provide
          students a platform where they can resolve all their queries.
          <br />
          This project is done by,
          <br />
          Umair Ghaffar (SP19-BCS-035)
          <br />
          Hamza Nadeem Khan (SP19-BCS-077)
          <br />
          Abdul Rafay (SP19-BCS-014)
        </Typography>
        <Typography variant="h5" className={classes.text}>
          Feel free to send us an Email
          <Link target="_blank" color="inherit">
            <Email />
          </Link>
          .
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
