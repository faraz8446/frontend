import { makeStyles, Box, Typography } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../feature/userSlice";
const useStyle = makeStyles({
  container: {
    margin: 40,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    borderLeft: "1px solid #b4b4b4",
    borderTop: "1px solid #b4b4b4",
    borderRight: "1px solid #b4b4b4",
    borderBottom: "1px solid #b4b4b4",
    height: 250,
    opacity: 1,
    //width: "85%",
    "& > *": {
      padding: "0px 0px 0px 0px",
    },
    "&:hover": {
      opacity: 0.5,
      border: "1px solid white",
      transform: "scale(1.13)",
    },
  },
  image: {
    width: "99.5%",
    objectFit: "cover",
    borderRadius: "0px 0px 0 0",
    // height: 250,
    marginTop: "3px",
    marginLeft: "1px",
    objectFit: "cover",
    //: "453px",
    height: 95,
  },
  textColor: {
    color: "blue",
    fontSize: 14,
    marginTop: "5px",
  },
  heading: {
    padding: "5px",
    color: "red",
    fontSize: 18,
    fontWeight: 50,
    fontFamily: "Varela Round",
  },
  detail: {
    fontSize: 12,
    wordBreak: "break-word",
    fontFamily: "Josefin Sans",
    marginLeft: "5px",
    marginBottom: "5px",
  },
  author: {
    fontSize: 12,
    color: "Blue",
  },
});

const Post = ({ post }) => {
  const classes = useStyle();
  const user = useSelector(selectUser);
  const url = post.image
    ? post.image
    : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";

  const addEllipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };

  return (
    <Card
      style={{
        width: "24rem",
        height: "23rem",
        marginLeft: "10px",
        padding: "5px",
        marginTop: "30px",
        //   marginBottom: "5px",
        //   border: "1px solid LightSteelBlue",
      }}
    >
      <div
        class="card-footer text-muted"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Avatar src={post.picture} />
        <Typography className={classes.textColor}>{post.categories}</Typography>
      </div>
      <Card.Img
        variant="top"
        className={classes.image}
        style={{ borderBottom: "1px solid LightGrey" }}
        src={url}
      />
      <Card.Body>
        <Card.Title>
          <Typography style={{ fontWeight: "bold" }}>
            {addEllipsis(post.title, 40)}
          </Typography>
        </Card.Title>
        <Card.Text>
          <Typography>{addEllipsis(post.description, 70)}</Typography>
        </Card.Text>
      </Card.Body>

      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          {" "}
          <Typography className={classes.author}>
            {" "}
            By: {post.username}
          </Typography>{" "}
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default Post;
