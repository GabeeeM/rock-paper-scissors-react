import "./App.css";
import rock from "./images/icon-rock.svg";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";
import { useState } from "react";

function App() {
  const [stance, setStance] = useState();
  const [botStance, setBot] = useState();
  const [result, setResult] = useState();
  const [score, setScore] = useState(0);

  let pickStance = (choice) => {
    setStance((x) => (x = choice));

    let botGode = Math.floor(Math.random() * 3);
    switch (botGode) {
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

    setTimeout(() => {
      versus(stance, botStance);
    }, 100);
  };

  let versus = (player, bot) => {
    let outcome;

    if (player === "rock") {
      switch (bot) {
        case "rock":
          outcome = "TIE";
          break;
        case "paper":
          outcome = "DEFEAT";
          break;
        case "scissors":
          outcome = "VICTORY";
          break;
        default:
          pickStance(player);
          break;
      }
    } else if (player === "paper") {
      switch (bot) {
        case "rock":
          outcome = "VICTORY";
          break;
        case "paper":
          outcome = "TIE";
          break;
        case "scissors":
          outcome = "DEFEAT";
          break;
        default:
          pickStance(player);
          break;
      }
    } else if (player === "scissors") {
      switch (bot) {
        case "rock":
          outcome = "DEFEAT";
          break;
        case "paper":
          outcome = "VICTORY";
          break;
        case "scissors":
          outcome = "TIE";
          break;
        default:
          pickStance(player);
          break;
      }
    }

    setResult((x) => (x = outcome));

    switch (outcome) {
      case "TIE":
        break;
      case "VICTORY":
        setScore((x) => (x += 1));
        break;
      case "DEFEAT":
        setScore((x) => (x -= 1));
        break;
      default:
        versus(player, bot);
        break;
    }
  };

  return (
    <div className="App bg-slate-600 h-screen">
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
