import React, { useState } from "react";
import Botones from "./components/UI/Botones";
import Pantalla from "./components/UI/Pantalla";
import { makeStyles } from "@material-ui/core/styles";
import botones from "./auxiliares/botones";

const useStyles = makeStyles({
  calculadora: {
    padding: "20px",
    WebkitBoxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.2)",
    boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.2)",
    borderRadius: "1px",
  },
  root: {
    width: "500px",
    margin: "4% auto",
    fontFamily: "Roboto",
    letterSpacing: "5px",
    fontSize: "1.8rem",
    MozUserSelect: "none",
    WebkitUserSelect: "none",
    msUserSelect: "none",
  },
});

function App() {
  const classes = useStyles();

  const [input, setInput] = useState<string>("");

  return (
    <div className={classes.root}>
      <div className={classes.calculadora}>
        <Pantalla pantalla={input} />
        <Botones boton="C" ancho={320} setInput={setInput} />
        <Botones boton="%" ancho={80} setInput={setInput} />
        {botones.map((boton) => (
          <Botones boton={boton} ancho={87} setInput={setInput} />
        ))}
        <Botones boton="0" ancho={320} setInput={setInput} />
        <Botones boton="=" ancho={80} setInput={setInput} />
      </div>
    </div>
  );
}

export default App;
