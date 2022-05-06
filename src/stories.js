import gag9 from "./assets/img/9gag.svg";
import meowed from "./assets/img/meowed.svg";
import barked from "./assets/img/barked.svg";
import nathanwpylestrangeplanet from "./assets/img/nathanwpylestrangeplanet.svg";
import wawawicomics from "./assets/img/wawawicomics.svg";
import respondeai from "./assets/img/respondeai.svg";
import filomoderna from "./assets/img/filomoderna.svg";
import memeriagourmet from "./assets/img/memeriagourmet.svg";

const stories = [
  { image: gag9, name: "9gag" },
  { image: meowed, name: "meowed" },
  { image: barked, name: "barked" },
  { image: nathanwpylestrangeplanet, name: "nathanwpylestrangeplanet" },
  { image: wawawicomics, name: "wawawicomics" },
  { image: respondeai, name: "respondeai" },
  { image: filomoderna, name: "filomoderna" },
  { image: memeriagourmet, name: "memeriagourmet" },
];

export default function Stories() {
  return (
    <div className="stories">
      {stories.map((storie) => (
        <Storie image={storie.image} name={storie.name} />
      ))}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

function Storie({ image, name }) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={image} alt={name} />
      </div>
      <div className="usuario">{name}</div>
    </div>
  );
}
