import ArrowBack from "../../svg/ArrowBack";

import imgUserOptional from "../../../assets/users_img_opcional.png";
import Followers from "./Followers";

import '../../../styles/followers.css'
import { toast } from "react-hot-toast";

const BiographyUserClick = ({
  dataUsers,
  setIsActive,
  isActive,
  setFollowersUsers,
  followers,
  userId,
  authId,
  removeFollowersUsers
}) => {

  const notify3 = () => toast('Empezaste a seguir este usuario ✔️!', {
    duration: 4000,
    position: 'right-bottom',

    // Custom Icon
    icon: '🙃',
  
    // Change colors of success/error/loading icon
    iconTheme: {
      primary: '#000',
      secondary: '#fff',
    },
  
    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });

  const notify4 = () => toast('Dejaste de seguir a este usuario ✔️!', {
    duration: 4000,
    position: 'right-bottom',

    // Custom Icon
    icon: '🙃',
  
    // Change colors of success/error/loading icon
    iconTheme: {
      primary: '#000',
      secondary: '#fff',
    },
  
    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });

  return (
    <>
      <div className="content-img-header-profile">
        {dataUsers !== "" ? (
          <div
            className="front-page"
            style={{ backgroundImage: `url(${dataUsers.front_page})` }}
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
          <div className="box-img-link">
            {dataUsers.img !== "" ? (
              <img
                className="img-perfil"
                src={dataUsers !== null ? dataUsers.img : null}
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
                          <div onClick={() => notify4()}>
                            Stop Following
                          </div>
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
                  <div onClick={() => notify3()}>
                    Follow
                  </div>
                </button>
              ) : null}

              {/* Esta logica sirve para saber cuantos seguidores tiene un usuario. */}
              <Followers followers={followers} userId={userId} />
            </div>
          </div>
        </div>
        <div>
          <div className="content-btn-back-profile">
            <button
              className="btn-back-perfil"
              onClick={() => {
                setIsActive(!isActive);
              }}
            >
              <ArrowBack />
            </button>
          </div>
          <p>@{dataUsers !== null ? dataUsers.user : null}</p>

          <div className="content-bio">
            <h3>Biografia</h3>
            <p>{dataUsers !== null ? dataUsers.bio : null}</p>
            <h3 className="fechaNacimiento">
              Fecha de Nacimiento:{" "}
              {dataUsers !== null ? dataUsers.fechaNacimiento : null}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default BiographyUserClick;
