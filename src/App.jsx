import "./App.css";
import rock from "./images/icon-rock.svg";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";

function App() {
  return (
    <div className="App bg-slate-600 h-screen">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex">
          <div>
            <img src={rock} alt="" srcset="" />
          </div>
          <div>
            <img src={paper} alt="" srcset="" />
          </div>
        </div>
        <div>
          <div>
            <img src={scissors} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
