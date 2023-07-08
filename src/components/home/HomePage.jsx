import { useEffect, useState } from "react";
import { getComments, obtainUserName } from "../../services/services";
import Comments from "./Comments";

import "../../styles/home.css";
import "../../styles/comments.css";
import Header from "../navbar/Header";

// eslint-disable-next-line react/prop-types
const HomePage = ({ authId, usersId }) => {
  // * Estados
  const [comments, setComments] = useState(null);
  const [subComments, setSubComments] = useState([]);
  const [search, setSearch] = useState("");
  const [isActiveS, setIsActiveS] = useState(false);
  const [result, setResult] = useState(null);

  // Este useEffect sirve para capturar todos los comments y subcomments de la aplicacion.
  useEffect(() => {
    setTimeout(() => {
      // * Funcion que me permite recuperar todos los comentarios de los usuarios.
      getComments().then((res) => {
        setComments(res.comment);
        setSubComments(res.subcomment);
      });

    }, 1500);

    // * Con este return limpio el setTimeout cuando el usuario no este en la pagina principal optimizando memoria.
    return () => {
      clearTimeout();
    };
  }, []);

  // * Esta funcion me permite buscar un usuario existente.
  const handleSubmit = (event) => {
    event.preventDefault();

    const username = search;

    obtainUserName(username).then((res) => {
      setResult([res]);

      if (res !== undefined) {
        setIsActiveS(!isActiveS);
      } else {
        window.alert("No existe ese usuario!");
      }

      // * Este set me permite limpiar el search cuando doy enter al buscar algo.
      setSearch("");
    });
  };
 
  return (
    <div className="content-home">
      <Header handleSubmit={handleSubmit} search={search} setSearch={setSearch} />
      <div className="content-main-post">
        <div className="content-post" id="content-post">
          <h1 style={{ textAlign: 'center' }}>Home</h1>
          {comments !== null ? (
            comments.map((comment, index) => (
              <div className="content-comments" key={index}>
                <Comments
                  comment={comment.comment}
                  subComments={subComments}
                  username={comment.username}
                  img={comment.img}
                  fecha={comment.created_at}
                  authId={authId}
                  usersId={usersId}
                  commentId={comment.user_id}
                  commentIdSubComment={comment.commentIdSubComment}
                  deleteId={comment.delete_id}
                  commentsId={comment.comments_id}
                  result={result}
                  setIsActiveS={setIsActiveS}
                  isActiveS={isActiveS}
                />
              </div>
            ))
          ) : (
            <h1>Cargando Comentarios...</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
