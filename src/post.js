import meowed from "./assets/img/meowed.svg";
import gatoTelefone from "./assets/img/gato-telefone.svg";
import respondeAi from "./assets/img/respondeai.svg";

import barked from "./assets/img/barked.svg";
import dog from "./assets/img/dog.svg";
import adorableAnimals from "./assets/img/adorable_animals.svg";

export default function Post() {
  return (
    <div class="posts">
      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={meowed} alt="meowed" />
            meowed
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src={gatoTelefone} alt="gatoTelefone" />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={respondeAi} alt="respondeAi" />
            <div class="texto">
              Curtido por <strong>respondeai</strong> e{" "}
              <strong>outras 101.523 pessoas</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={barked} alt="barked" />
            barked
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src={dog} alt="dog" />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={adorableAnimals} alt="adorableAnimals" />
            <div class="texto">
              Curtido por <strong>adorable_animals</strong> e{" "}
              <strong>outras 99.159 pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
