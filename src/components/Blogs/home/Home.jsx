import { Grid } from "@material-ui/core";

//components
import Banner from "../sliders/Banner";
import Categories from "./blog-tabs";

import Posts from "./blog/blogs";

const Home = () => {
  return (
    <>
      <Banner />
      <Grid container>
        <Categories />

        <Grid
          container
          item
          xs={12}
          sm={10}
          lg={11}
          style={{ marginTop: "-10px", marginLeft: "50px" }}
        >
          <Posts />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
