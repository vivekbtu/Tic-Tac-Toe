import "./styles.css";
import Tic from "./Components/Tic";
import Confetti from "react-confetti";
//import Fireworks from "react-native-fireworks";
import { useState } from "react";

export default function App(props) {
  var [old, newOld] = useState("THE WINNER IS ");
  var [winner, newWinner] = useState(false);
  let winner1 = (a) => {
    newOld(`THE WINNER IS "${a}"`);

    newWinner(true);
  };
  let Xyz = () => {
    if (winner) {
      return <Confetti width="1500" />;
    }
  };

  return (
    <div className="App">
      <Xyz />

      <h1 className="heading">{old}</h1>

      <Tic winner1={winner1} newOld={newOld} newWinner={newWinner} />
    </div>
  );
}
// npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
