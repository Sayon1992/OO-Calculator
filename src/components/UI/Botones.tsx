import React from "react";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  boton: string;
  ancho: number;
  setInput: (value: string | ((prevInput: string) => string)) => void;
}

const Botones: React.FC<Props> = (props) => {
  const useStyles = makeStyles((theme) => ({
    boton: {
      display: "inline-block",
      border: "1px solid #bbb",
      borderRadius: "1px",
      width: props.ancho,
      height: "40px",
      textAlign: "center",
      padding: "10px",
      margin: "20px 4px 10px 0",
      cursor: "pointer",
      backgroundColor: "#ddd",
      transition:
        "border-color .2s ease-in-out, background-color .2s, box-shadow .2s",
    },
  }));
  const handleClick = () => {
    switch (props.boton) {
      case "C":
        props.setInput("");
        break;
      case "=":
        console.log("hacer");
        break;
      default:
        props.setInput((prevInput) => prevInput + props.boton);
        break;
    }
  };
  const classes = useStyles();
  return (
    <div className={classes.boton} onClick={handleClick}>
      {props.boton}
    </div>
  );
};

export default Botones;
