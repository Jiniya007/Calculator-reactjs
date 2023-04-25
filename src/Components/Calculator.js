import React, { useState } from "react";
import { Container, Screen, Prevoius, Current, Button } from "../Style/Style";

function Calculator() {
  const [current, setCurrent] = useState("");
  const [prevoius, setPrevoius] = useState("");
  const [operations, setOperations] = useState("");

  const appendValueHandle = (el) => {
    const value = el.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;

    setCurrent(current + value);
  };
  const deleteHandler = () => {
    setCurrent(String(current).slice(0, -1));
    console.log("deleteHandler");
  };
  const allclearHandler = () => {
    setCurrent("");
    setOperations("");
    setPrevoius("");
    console.log("allclearHandler");
  };
  const chooseOperationHandler = (el) => {
    if (current === "") return;
    if (prevoius !== "") {
      let value = compute();
      setPrevoius(value);
    } else {
      setPrevoius(current);
    }
    setCurrent("");
    setOperations(el.target.getAttribute("data"));
  };
  const  equalHandler=()=>{
    let value = compute();
    if (value === undefined || value == null) return;
    setCurrent(value);
    setPrevoius("");
    setOperations("");

  }
  const compute =()=>{
    let result;
    let previousNumber = parseFloat(prevoius);
    let currentNumber = parseFloat(current);
    if (isNaN(previousNumber) || isNaN(currentNumber)) return;
    switch (operations) {
      case "÷":
        result = previousNumber / currentNumber;
        break;
      case "x":
        result = previousNumber * currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      default:
        return;
    }
    return result;
  }
  
  return (
    <>
      <Container>
        <Screen>
          <Prevoius>
            {prevoius} {operations}
          </Prevoius>
          <Current>{current}</Current>
        </Screen>
        <Button gridSpan={2} control onClick={allclearHandler}>
          AC
        </Button>
        <Button onClick={deleteHandler}>DEL</Button>
        <Button operation data={"÷"} onClick={chooseOperationHandler}>
          ÷
        </Button>
        <Button data={7} onClick={appendValueHandle}>
          7
        </Button>
        <Button data={8} onClick={appendValueHandle}>
          8
        </Button>
        <Button data={9} onClick={appendValueHandle}>
          9
        </Button>
        <Button operation data={"x"} onClick={chooseOperationHandler}>
          x
        </Button>
        <Button data={4} onClick={appendValueHandle}>
          4
        </Button>
        <Button data={5} onClick={appendValueHandle}>
          5
        </Button>
        <Button data={6} onClick={appendValueHandle}>
          6
        </Button>
        <Button operation data={"+"} onClick={chooseOperationHandler}>
          +
        </Button>
        <Button data={1} onClick={appendValueHandle}>
          1
        </Button>
        <Button data={2} onClick={appendValueHandle}>
          2
        </Button>
        <Button data={3} onClick={appendValueHandle}>
          3
        </Button>
        <Button operation data={"-"} onClick={chooseOperationHandler}>
          -
        </Button>
        <Button data={"."} decimal onClick={appendValueHandle}>
          .
        </Button>
        <Button data={0} onClick={appendValueHandle}>
          0
        </Button>
        <Button gridSpan={2} equals onClick={equalHandler}>
          =
        </Button>
      </Container>
    </>
  );
}

export default Calculator;
