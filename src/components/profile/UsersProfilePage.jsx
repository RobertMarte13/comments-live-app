import { useEffect, useState } from "react";
import { getComments } from "../../services/services";
import Comments from "../home/Comments";
import CommentsUsersPerfil from "./CommentsUsersPerfil";

// eslint-disable-next-line react/prop-types
const UsersProfilePage = ({
  isActive,
  setIsActive,
  dataUsers,
  userId,
  result,
  setIsActiveS,
  isActiveS,
}) => {
  const [comments, setComments] = useState(null);
  const [subComments, setSubComments] = useState([]);
  
  // * Este useEffect lo que hace es obtener todos los comentarios.
  useEffect(() => {
    setTimeout(() => {
      getComments().then((res) => {
        if (res !== undefined) {
          setComments(res.comment);
          setSubComments(res.subcomment);
        }
      });
    }, 1500);

    // * Con este return limpio el setTimeout cuando el usuario no este en la pagina principal optimizando memoria.
    return () => {
      clearTimeout();
    };
  }, []);

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
                    setIsActive(!isActive);
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
                  <CommentsUsersPerfil userId={userId} comments={comments} subComments={subComments} />
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
                    setIsActiveS(!isActiveS);
                  }}
                >
                  back
                </button>
              </div>
              <img
                className="img-perfil"
                src={result !== null ? result[0].img : null}
              />
              <p>@{result !== null ? result[0].username : null}</p>
              <h1>{result !== null ? result[0].fechaNacimiento : null}</h1>
              <div className="content-bio">
                <h3>Biografia</h3>
                <p>{result !== null ? result[0].bio : null}</p>
              </div>
              <div className="content-comments-perfil">
                <h1 className="title-comments-user">Mis Comentarios</h1>
                {comments !== null ? (
                  <CommentsUsersPerfil userId={userId} comments={comments} subComments={subComments} result={result} />
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
