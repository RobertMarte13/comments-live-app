import CommentsUsersPerfil from "./subComponents/CommentsUsersPerfil";
import BiographyUserClick from './subComponents/BiographyUserClick';
import BiographyUserSearch from "./subComponents/BiographyUserSearch";

// Custom hooks
import useUsersProfilePages from "./hooks/useUsersProfilePage";

//? NOTA: Este es el componente que se muestra si damos click en algun username o si buscamos un usuario.

const UsersProfilePage = ({ isActive, setIsActive, dataUsers, userId, authId, result, setIsActiveS, isActiveS }) => {
  // custom hooks
  const {comments, subComments, setFollowersUsers, followers, removeFollowersUsers} = useUsersProfilePages(authId, userId)

  return (
    <>
      {/* Este isActive es el que se activa cuando damos click algun username del usuario en el comentario. */}
      {isActive ? (
        <>
          {dataUsers ? (
            <div className="contain-user-perfile">
              <BiographyUserClick
                dataUsers={dataUsers} 
                setIsActive={setIsActive} 
                isActive={isActive} 
                setFollowersUsers={setFollowersUsers}
                followers={followers}
                userId={userId}
                authId={authId}
                removeFollowersUsers={removeFollowersUsers}
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
            </div>
          ) : (
            <h1>Cargando Datos...</h1>
          )}
        </>
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
