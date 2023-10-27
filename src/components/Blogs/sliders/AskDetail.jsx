import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyle = makeStyles({
  image: {
    width: "100%",
    background: `url(${"https://coolbackgrounds.io/images/backgrounds/index/ranger-4df6c1b6.png"})`,
    height: "40vh",
    display: "flex",
    flexDirection: "column",
    backgroundSize: "cover",
    opacity: 0.9,
    alignItems: "center",
    marginTop: 30,
    justifyContent: "center",
    "& :first-child": {
      fontSize: 40,
      marginRight: 1000,
      color: "#347c91",

      opacity: 1.0,
    },
    "& :last-child": {
      fontSize: 20,
      marginRight: 550,
      //background: '#FFFFFF',
      color: "black",
      fontFamily: "Monospace",
      opacity: 1.0,
    },
  },
  txt: {
    opacity: 1,
  },
});

const AskDetail = () => {
  const classes = useStyle();

  return (
    <>
      <div className={classes.image}>
        <h1 className={classes.txt}>AskBUETK</h1>
        <p>One Stop Solution for all your worries in University!!</p>
      </div>
    </>
  );
};

export default AskDetail;
