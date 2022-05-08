import catanacomics from "./assets/img/catanacomics.svg";
import badVibesMemes from "./assets/img/bad.vibes.memes.svg";
import chibirdart from "./assets/img/chibirdart.svg";
import razoesparaacreditar from "./assets/img/razoesparaacreditar.svg";
import adorableAnimals from "./assets/img/adorable_animals.svg";
import smallcutecats from "./assets/img/smallcutecats.svg";

const sugestoes = [
  { image: badVibesMemes, name: "bad.vibes.memes" },
  { image: chibirdart, name: "chibirdart" },
  { image: razoesparaacreditar, name: "razoesparaacreditar" },
  { image: adorableAnimals, name: "adorable_animals" },
  { image: smallcutecats, name: "smallcutecats" },
];

function User() {
  return (
    <div className="usuario">
      <img src={catanacomics} alt="catanacomics" />
      <div className="texto">
        <strong>catanacomics</strong>
        Catana
      </div>
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="sidebar">
      <User userImg={{ catanacomics }} userName="catanacomics" />

      <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {sugestoes.map((sugestao) => (
          <div className="sugestao">
            <div className="usuario">
              <img src={sugestao.image} alt={sugestao.name} />
              <div className="texto">
                <div className="nome">{sugestao.name}</div>
                <div className="razao">Segue você</div>
              </div>
            </div>

            <div className="seguir">Seguir</div>
          </div>
        ))}
      </div>

      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
