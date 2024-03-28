import React, { useState } from "react";
import * as math from "mathjs";
import "./styles.css";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [output, setOutput] = useState("");

  const removeExpression = () => {
    setOutput("");
    setExpression("");
  };

  const handleExpression = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const calculate = () => {
    try {
      // const fnCalculate = new Function("return " + expression);
      // const result = fnCalculate();
      const result = math.evaluate(expression);
      setOutput(result.toString());
    } catch (error) {
      console.log(error);
      setOutput("Error");
    }
  };

  return (
    <div className="wrapper">
      <h1>React Calculator</h1>
      <input className="expression" type="text" readOnly value={expression} />
      <div className="output">{output}</div>

      <div className="buttonWrapper">
        <button onClick={() => handleExpression("7")}>7</button>
        <button onClick={() => handleExpression("8")}>8</button>
        <button onClick={() => handleExpression("9")}>9</button>
        <button onClick={() => handleExpression("+")}>+</button>
        <br />

        <button onClick={() => handleExpression("4")}>4</button>
        <button onClick={() => handleExpression("5")}>5</button>
        <button onClick={() => handleExpression("6")}>6</button>
        <button onClick={() => handleExpression("-")}>-</button>
        <br />

        <button onClick={() => handleExpression("1")}>1</button>
        <button onClick={() => handleExpression("2")}>2</button>
        <button onClick={() => handleExpression("3")}>3</button>
        <button onClick={() => handleExpression("*")}>*</button>
        <br />

        <button onClick={removeExpression}>C</button>
        <button onClick={() => handleExpression("0")}>0</button>
        <button className="calculate" onClick={calculate}>
          =
        </button>
        <button onClick={() => handleExpression("/")}>/</button>
      </div>
    </div>
  );
};
export default Calculator;
