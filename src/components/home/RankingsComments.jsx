import { useEffect, useState } from "react";
import { getComments, getLikes, obtainUserName } from "../../services/services";
import Header from "../navbar/Header"
import CommentsRankings from "./CommentsRankings";
import commentsRankingsTools from "../../tools/commentsRankings";

// eslint-disable-next-line react/prop-types
const RankingsComments = ({ authId, usersId }) => {

    // * Estados
  const [comments, setComments] = useState(null);
  const [subComments, setSubComments] = useState([]);
  const [search, setSearch] = useState("");
  const [isActiveS, setIsActiveS] = useState(false);
  const [result, setResult] = useState(null);

  const [likes, setLikes] = useState(null);

  // Este useEffect sirve para capturar todos los comments y subcomments de la aplicacion.
  useEffect(() => {
    setTimeout(() => {
      // * Funcion que me permite recuperar todos los comentarios de los usuarios.
      getComments().then((res) => {
        setComments(res.comment);
        setSubComments(res.subcomment);
      });

      getLikes().then((res) => {
        setLikes(res.data);
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
  
  // TODO: Haciendo un ranking de los comentarios que mas an gustado a las personas.
  const commentRankings = commentsRankingsTools(comments, likes);

    return (
        <div className="content-home">
      <Header handleSubmit={handleSubmit} search={search} setSearch={setSearch} />
      <div className="content-main-post">
        {/* Agreagndo el rankig de commentarios por me gustas. */}
        <div
          className="content-post content-post-ranking"
          id="content-post-ranking"
          style={{  }}
        >
          <h1 style={{ textAlign: 'center' }}>Comentarios más populares</h1>
          {commentRankings !== null ? (
            commentRankings.map((comment, index) => (
              <div className="content-comments" key={index}>
                <CommentsRankings
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
    )
}

export default RankingsComments