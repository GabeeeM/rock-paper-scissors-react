import rock from "./images/icon-rock.svg";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";
import { useState } from "react";
import Stats from "./components/Stats";

function App() {
  const [stance, setStance] = useState();
  const [botStance, setBot] = useState();
  const [result, setResult] = useState();
  const [score, setScore] = useState(0);

  let game = (choice) => {
    pickStance(choice);
    setResult((x) => (x = versus(stance, botStance)));
    setTimeout(() => {
      updateScore();
    }, 100);
  };

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
  };

  let versus = (player, bot) => {
    if (player === "rock") {
      switch (bot) {
        case "rock":
          return "TIE";
        case "paper":
          return "DEFEAT";
        case "scissors":
          return "VICTORY";
        default:
          pickStance(player);
          break;
      }
    } else if (player === "paper") {
      switch (bot) {
        case "rock":
          return "VICTORY";
        case "paper":
          return "TIE";
        case "scissors":
          return "DEFEAT";
        default:
          pickStance(player);
          break;
      }
    } else if (player === "scissors") {
      switch (bot) {
        case "rock":
          return "DEFEAT";
        case "paper":
          return "VICTORY";
        case "scissors":
          return "TIE";
        default:
          pickStance(player);
          break;
      }
    }
  };

  let updateScore = () => {
    switch (result) {
      case "TIE":
        break;
      case "VICTORY":
        setScore((x) => (x += 1));
        break;
      case "DEFEAT":
        setScore((x) => (x -= 1));
        break;
      default:
        break;
    }
  };

  return (
    <div className="App bg-slate-600 h-screen m-0 text-center">
      <Stats />
      <div className="flex flex-col gap-[3rem] items-center justify-center h-full">
        <div className="flex gap-[5rem]">
          <div>
            <img
              src={rock}
              alt="rock"
              className="cursor-pointer"
              onClick={() => game("rock")}
            />
          </div>
          <div>
            <img
              src={paper}
              alt="paper"
              className="cursor-pointer"
              onClick={() => game("paper")}
            />
          </div>
        </div>
        <div>
          <div>
            <img
              src={scissors}
              alt="scissors"
              className="cursor-pointer"
              onClick={() => game("scissors")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
