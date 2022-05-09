import React from "react";

import meowed from "./assets/img/meowed.svg";
import gatoTelefone from "./assets/img/gato-telefone.svg";
import respondeAi from "./assets/img/respondeai.svg";

import barked from "./assets/img/barked.svg";
import dog from "./assets/img/dog.svg";
import adorableAnimals from "./assets/img/adorable_animals.svg";

const posts = [
  {
    userImg: meowed,
    userName: "meowed",
    contentImg: gatoTelefone,
    contentName: "gatoTelefone",
    likesImg: respondeAi,
    likesName: "respondeAi",
    likes: "101.523",
  },
  {
    userImg: barked,
    userName: "barked",
    contentImg: dog,
    contentName: "dog",
    likesImg: adorableAnimals,
    likesName: "adorable_animals",
    likes: "254.233",
  },
];

export default function Posts() {
  const [liked, setLiked] = React.useState(false);
  const toggle = () => setLiked(!liked);

  return (
    <div className="posts">
      {posts.map((post) => (
        <div className="post">
          <div className="topo">
            <div className="usuario">
              <img src={post.userImg} alt={post.userName} />
              meowed
            </div>
            <div className="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div className="conteudo">
            <img src={post.contentImg} alt={post.contentName} />
          </div>

          <div className="fundo">
            <div className="acoes">
              <div>
                <ion-icon
                  onClick={toggle}
                  style={liked ? { color: "red" } : {}}
                  name={liked ? "heart-sharp" : "heart-outline"}
                ></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div className="curtidas">
              <img src={post.likesImg} alt={post.likesName} />
              <div className="texto">
                Curtido por <strong>{post.likesName}</strong> e{" "}
                <strong>outras {post.likes} pessoas</strong>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
