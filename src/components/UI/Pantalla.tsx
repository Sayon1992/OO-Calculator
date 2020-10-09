import React from "react";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  pantalla: string;
}

const useStyles = makeStyles({
  pantalla: {
    border: "1px solid #ddd",
    borderRadius: "1px",
    height: "60px",
    paddingRight: "15px",
    paddingTop: "10px",
    textAlign: "right",
    marginRight: "6px",
    fontSize: "2.5rem",
    overflowX: "auto",
    transition: "all .2s ease-in-out",
  },
});

const Pantalla: React.FC<Props> = (props) => {
  const classes = useStyles();
  return <div className={classes.pantalla}>{props.pantalla}</div>;
};

export default Pantalla;
