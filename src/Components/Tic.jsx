import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./Tic.css";

var x = Array(9).fill(null);

let Tic = (props) => {
  // console.log(props);
  var [start, newStart] = useState(true);
  var [value, newValue] = useState("O");
  var winner = (x) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (x[a] && x[a] === x[b] && x[a] === x[c]) {
        // console.log("winner1");
        props.winner1(x[a]);
        x.fill(null);

        setTimeout(() => {
          restart();
        },10000)
        
      }
      
    }
  };

  let handelClick = (e) => {
    var z = e.target.id;

    var y = +[z];

    if (value === "O") {
      if (x[y] == null) {
        x[y] = "O";

        newValue("X");
        winner(x);
        // newStart(true)
      }
    } else {
      if (x[y] == null) {
        x[y] = "X";

        newValue("O");
        winner(x);
        // newStart(true)
      }
    }
  };
  let restart = () => {
    x.fill(null);
    if (start === true) {
      newStart(false);
      props.newOld("");
      props.newWinner(false);
    } else {
      newStart(true);
      props.newOld("");
      props.newWinner(false);
    }
  };

  return (
    <>
      <div>
        <div className="row1">
          <div onClick={handelClick} id="0">
            {x[0]}
          </div>
          <div onClick={handelClick} id="1">
            {x[1]}
          </div>
          <div onClick={handelClick} id="2">
            {x[2]}
          </div>
        </div>
        <div className="row2">
          <div onClick={handelClick} id="3">
            {x[3]}
          </div>
          <div onClick={handelClick} id="4">
            {x[4]}
          </div>
          <div onClick={handelClick} id="5">
            {x[5]}
          </div>
        </div>
        <div className="row3">
          <div onClick={handelClick} id="6">
            {x[6]}
          </div>
          <div onClick={handelClick} id="7">
            {x[7]}
          </div>
          <div onClick={handelClick} id="8">
            {x[8]}
          </div>
        </div>
      </div>
      <Button className="btn" variant="primary" onClick={restart}>
        RESTART
      </Button>
    </>
  );
};
export default Tic;
