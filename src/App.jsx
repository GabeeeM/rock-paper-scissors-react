import rock from "./images/icon-rock.svg";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";
import { useEffect, useState } from "react";

function App() {
  const [stance, setStance] = useState();
  const [botStance, setBot] = useState();
  const [result, setResult] = useState();
  const [score, setScore] = useState(0);

  let pickStance = (choice) => {
    setStance((x) => (x = choice));

    switch (Math.floor(Math.random() * 3)) {
      case 0:
        setBot((x) => (x = "rock"));
        break;
      case 1:
        setBot((x) => (x = "paper"));
        break;
      case 2:
        setBot((x) => (x = "scissors"));
        break;
      default:
        pickStance(choice);
    }

    setScore(updateScore(score));
  };

  let updateScore = (x) => {
    switch (result) {
      case "TIE":
        break;
      case "VICTORY":
        return x + 1;
      case "DEFEAT":
        return x - 1;
      default:
        break;
    }
  };

  useEffect(() => {
    if (stance === "rock") {
      switch (botStance) {
        case "rock":
          setResult((x) => (x = "TIE"));
          break;
        case "paper":
          setResult((x) => (x = "DEFEAT"));
          break;
        case "scissors":
          setResult((x) => (x = "VICTORY"));
          break;
        default:
          break;
      }
    } else if (stance === "paper") {
      switch (botStance) {
        case "rock":
          setResult((x) => (x = "VICTORY"));
          break;
        case "paper":
          setResult((x) => (x = "TIE"));
          break;
        case "scissors":
          setResult((x) => (x = "DEFEAT"));
          break;
        default:
          break;
      }
    } else if (stance === "scissors") {
      switch (botStance) {
        case "rock":
          setResult((x) => (x = "DEFEAT"));
          break;
        case "paper":
          setResult((x) => (x = "VICTORY"));
          break;
        case "scissors":
          setResult((x) => (x = "TIE"));
          break;
        default:
          break;
      }
    }
  }, [botStance, stance]);

  // useEffect(() => {
  //   switch (result) {
  //     case "TIE":
  //       break;
  //     case "VICTORY":
  //       setScore((x) => (x += 1));
  //       break;
  //     case "DEFEAT":
  //       setScore((x) => (x -= 1));
  //       break;
  //     default:
  //       break;
  //   }
  // }, [result]);

  return (
    <div className="App bg-slate-600 h-screen m-0 text-center">
      <h1>{score}</h1>
      <h1>{stance}</h1>
      <h1>{botStance}</h1>
      <h1>{result}</h1>
      <div className="flex flex-col gap-[3rem] items-center justify-center h-full">
        <div className="flex gap-[5rem]">
          <div>
            <img
              src={rock}
              alt="rock"
              className="cursor-pointer"
              onClick={() => pickStance("rock")}
            />
          </div>
          <div>
            <img
              src={paper}
              alt="paper"
              className="cursor-pointer"
              onClick={() => pickStance("paper")}
            />
          </div>
        </div>
        <div>
          <div>
            <img
              src={scissors}
              alt="scissors"
              className="cursor-pointer"
              onClick={() => pickStance("scissors")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
