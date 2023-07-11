import { useEffect, useState } from "react";
import { getComments } from "../../services/services";
import CommentsUsersPerfil from "./subComponents/CommentsUsersPerfil";
import BiographyUserClick from './subComponents/BiographyUserClick';
import BiographyUserSearch from "./subComponents/BiographyUserSearch";

//? NOTA: Este es el componente que se muestra si damos click en algun username o si buscamos un usuario.

// eslint-disable-next-line react/prop-types
const UsersProfilePage = ({ isActive, setIsActive, dataUsers, userId, result, setIsActiveS, isActiveS }) => {
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

  console.log(dataUsers)

  return (
    <>
      {/* Este isActive es el que se activa cuando damos click algun username del usuario en el comentario. */}
      {isActive ? (
        <div className="contain-user-perfile">
          {dataUsers ? (
            <>
              <BiographyUserClick
                dataUsers={dataUsers} 
                setIsActive={setIsActive} 
                isActive={isActive} 
              />
              <div className="content-comments-perfil">
                <h1 className="title-comments-user">Mis Comentarios</h1>
                {comments !== null ? (
                  <CommentsUsersPerfil
                    userId={userId}
                    comments={comments}
                    subComments={subComments}
                  />
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

      {/* Este isActiveS es para cuando es una busqueda. */}
      {isActiveS ? (
        <div className="contain-user-perfile">
          {result ? (
            <>
              <BiographyUserSearch
                result={result}
                setIsActiveS={setIsActiveS}
                isActiveS={isActiveS} 
              />
              <div className="content-comments-perfil">
                <h1 className="title-comments-user">Mis Comentarios</h1>
                {comments !== null ? (
                  <CommentsUsersPerfil
                    userId={userId}
                    comments={comments}
                    subComments={subComments}
                    result={result}
                  />
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
