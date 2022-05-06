import ReactDom from "react-dom";
import Navbar from "./navbar";
import Corpo from "./corpo";

function App() {
  return (
    <div>
      <Navbar />
      <Corpo />
    </div>
  );
}

ReactDom.render(<App />, document.querySelector(".root"));
