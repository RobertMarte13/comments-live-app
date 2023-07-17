import ArrowBack from "../../svg/ArrowBack";

import imgUserOptional from "../../../assets/users_img_opcional.png";
import Followers from "./Followers";


const BiographyUserSearch = ({
  result,
  setIsActiveS,
  isActiveS,
  setFollowersUsers,
  followers,
  userId,
  authId,
  removeFollowersUsers,
}) => {

  return (
    <>
      <div className="content-img-header-profile">
        {result !== "" ? (
          <div
            className="front-page"
            style={{ backgroundImage: `url(${result[0].front_page})` }}
          ></div>
        ) : (
          <div
            className="front-page"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/vector-premium/fondo-dibujo-brillo-cielo-azul_659844-280.jpg?w=2000)",
            }}
          ></div>
        )}
      </div>
      <div className="content-biografia">
        <div className="box-img-link">
          {result[0].img !== "" ? (
            <img
              className="img-perfil"
              src={result !== null ? result[0].img : null}
              alt="Avatar"
            />
          ) : (
            <img
              className="img-perfil"
              src={imgUserOptional}
              alt="Imagen perfil"
            />
          )}
          <div className="content-followers">
            {/* Esta logica es para poder remover el follow que le di a un usuario */}
            {followers !== null ? (
              followers.data_2 !== null ? (
                followers.data_2.map((el_2, index) =>
                  userId === el_2.users_id ? (
                    authId === el_2.user_id ? (
                      <button
                        className="btn-follow"
                        key={index}
                        onClick={() => removeFollowersUsers(el_2.delete_id)}
                      >
                        Stop Following
                      </button>
                    ) : null
                  ) : null
                )
              ) : (
                <p>...Cargando</p>
              )
            ) : (
              <p>...Cargando</p>
            )}

            {authId !== userId ? (
              <button
                className="btn-follow"
                onClick={() => setFollowersUsers()}
              >
                Follow
              </button>
            ) : null}

            {/* Esta logica sirve para saber cuantos seguidores tiene un usuario. */}
            <Followers followers={followers} userId={userId} />
          </div>
        </div>
        <div>
          <div className="content-btn-back-profile">
            <button
              className="btn-back-perfil"
              onClick={() => {
                setIsActiveS(!isActiveS);
              }}
            >
              <ArrowBack />
            </button>
          </div>
          <p>@{result !== null ? result[0].username : null}</p>
          <div className="content-bio">
            <h3>Biografia</h3>
            <p>{result !== null ? result[0].bio : null}</p>
            <h3 className="fechaNacimiento">
              Fecha de Nacimiento:{" "}
              {result !== null ? result[0].fechaNacimiento : null}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default BiographyUserSearch;
