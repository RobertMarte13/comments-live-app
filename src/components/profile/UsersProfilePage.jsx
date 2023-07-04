import { useEffect, useState } from "react";
import { getComments } from "../../services/services";
import Comments from "../home/Comments";

// eslint-disable-next-line react/prop-types
const UsersProfilePage = ({ isActive, setIsActive, dataUsers, userId, result, setIsActiveS, isActiveS }) => {

  console.log(result)
  const [comments, setComments] = useState(null);
  const [subComments, setSubComments] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getComments().then((res) => {
        if (res !== undefined) {
          setComments(res.comment);
          setSubComments(res.subcomment);
        }
      });
    }, 1500);

    // Con este return limpio el setTimeout cuando el usuario no este en la pagina principal optimizando memoria.
    return () => {
      clearTimeout();
    };
  }, []); 

  const CommetsUser = () => {
    return (
      <div className="content-comments-perfil">
        {comments &&
          comments.map((comment, index) =>
            comment.auth_id === userId ? (
              <div className="comments-perfil" key={index}>
                <Comments
                  comment={comment.comment}
                  subComments={subComments}
                  username={comment.username}
                  fecha={comment.fechaCreacion}
                  authId={userId}
                  commentId={comment.auth_id}
                  commentIdSubComment={comment.commentIdSubComment}
                />
              </div>
            ) : null
          )}
      </div>
    );
  };

  return (
    <>
      {isActive ? (
        <div className="contain-user-perfile">
          {dataUsers ? (
            <>
              <div className="content-btn-back-profile">
                <button
                  className="btn-back-perfil"
                  onClick={() => {
                    setIsActive(!isActive)
                  }}
                >
                  back
                </button>
              </div>
              <img
                className="img-perfil"
                src={dataUsers !== null ? dataUsers.img : null}
              />
              <p>@{dataUsers !== null ? dataUsers.user : null}</p>
              <h1>{dataUsers !== null ? dataUsers.fechaNacimiento : null}</h1>
              <div className="content-bio">
                <h3>Biografia</h3>
                <p>{dataUsers !== null ? dataUsers.bio : null}</p>
              </div>
              <div className="content-comments-perfil">
                <h1 className="title-comments-user">Mis Comentarios</h1>
                {comments !== null ? (
                  CommetsUser()
                ) : (
                  <h>Cargando comentarios...</h>
                )}
              </div>
            </>
          ) : (
            <h1>Cargando Datos...</h1>
          )}
        </div>
      ) : null}
      {isActiveS ? (
        <div className="contain-user-perfile">
          {result ? (
            <>
              <div className="content-btn-back-profile">
                <button
                  className="btn-back-perfil"
                  onClick={() => {
                    setIsActiveS(!isActiveS)
                  }}
                >
                  back
                </button>
              </div>
              <img
                className="img-perfil"
                src={result !== null ? result.img : null}
              />
              <p>@{result !== null ? result.username : null}</p>
              <h1>{result !== null ? result.fechaNacimiento : null}</h1>
              <div className="content-bio">
                <h3>Biografia</h3>
                <p>{result !== null ? result.bio : null}</p>
              </div>
              <div className="content-comments-perfil">
                <h1 className="title-comments-user">Mis Comentarios</h1>
                {comments !== null ? (
                  CommetsUser()
                ) : (
                  <h>Cargando comentarios...</h>
                )}
              </div>
            </>
          ) : (
            <h1>Cargando Datos...</h1>
          )}
        </div>
      ) : null}
    </>
  );
};

export default UsersProfilePage;
