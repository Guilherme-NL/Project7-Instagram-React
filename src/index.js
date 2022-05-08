import ReactDom from "react-dom";
import Navbar from "./navbar";
import Corpo from "./corpo";
import FundoMobile from "./fundoMobile";

function App() {
  return (
    <div class="root">
      <Navbar />
      <Corpo />
      <FundoMobile />
    </div>
  );
}

ReactDom.render(<App />, document.querySelector("body"));
