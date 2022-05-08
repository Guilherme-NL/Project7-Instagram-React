import Esquerda from "./esquerda";
import Sidebar from "./sidebar";

export default function Corpo() {
  return (
    <div className="corpo">
      <Esquerda />
      <Sidebar />
    </div>
  );
}
