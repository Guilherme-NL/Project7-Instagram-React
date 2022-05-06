import Esquerda from "./esquerda";
import FundoMobile from "./fundoMobile";
import Sidebar from "./sidebar";

export default function Corpo() {
  return (
    <div class="corpo">
      <Esquerda />
      <Sidebar />
      <FundoMobile />
    </div>
  );
}
