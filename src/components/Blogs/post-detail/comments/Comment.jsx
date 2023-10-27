import { Typography, Box, makeStyles } from "@material-ui/core";
import { Avatar } from "@material-ui/core";

const Comment = ({ comment }) => {
  const classes = useStyles();

  return (
    <Box className={classes.component}>
      <Box className={classes.container}>
        <Avatar
          src={comment.photo}
          style={{
            cursor: "pointer",
          }}
        />
        <Typography className={classes.name}>{comment.name}</Typography>

        <Typography className={classes.date}>
          {new Date(comment.date).toDateString()}
        </Typography>
      </Box>
      <Typography>{comment.comments}</Typography>
    </Box>
  );
};

export default Comment;

const useStyles = makeStyles({
  component: {
    marginTop: 30,
    background: "#F5F5F5",
    padding: 10,
    width: "80%",
    marginLeft: "100px",
  },
  container: {
    display: "flex",
    marginBottom: 5,
  },
  name: {
    fontWeight: 600,
    fontSize: 18,
    marginRight: 20,
  },
  date: {
    fontSize: 14,
    color: "#878787",
  },
  delete: {
    marginLeft: "auto",
  },
});
