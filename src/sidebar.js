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

export default function Sidebar() {
  return (
    <div class="sidebar">
      <div class="usuario">
        <img src={catanacomics} alt="catanacomics" />
        <div class="texto">
          <strong>catanacomics</strong>
          Catana
        </div>
      </div>

      <div class="sugestoes">
        <div class="titulo">
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

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
