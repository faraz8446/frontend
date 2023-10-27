import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "2em",
    marginLeft: "1200px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar({ check, change }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Switch
        defaultChecked
        color="default"
        // inputProps={{ "aria-label": "checkbox with default color" }}
        onChange={change}
        checked={check}
      />
    </div>
  );
}
