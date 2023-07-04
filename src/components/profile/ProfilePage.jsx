import { useEffect, useState } from "react";
import { getComments, getUserInfo } from "../../services/services";
import { Link } from "react-router-dom";

import "../../styles/profile.css";
import Comments from "../home/Comments";

// eslint-disable-next-line react/prop-types
const ProfilePage = ({ auth_id }) => {
  const [username, setUsername] = useState();
  const [biografia, setBiografia] = useState();
  const [img, setImg] = useState();
  const [fecha, setFecha] = useState();
  const [objeto, setObjeto] = useState();
  const [comments, setComments] = useState(null);
  const [subComments, setSubComments] = useState([]);

  useEffect(() => {
    getUserInfo(auth_id).then((res) => {
      if (res !== undefined) {
        setUsername(res.user);
        setBiografia(res.bio);
        setFecha(res.fechaNacimiento);
        setImg(res.img);
      }
      setObjeto(res);
    });

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
      getUserInfo();
    };
  }, []);

  const CommetsUser = () => {
    return (
      <div className="content-comments-perfil">
        {comments &&
          comments.map((comment, index) =>
            comment.auth_id === auth_id ? (
              <div className="comments-perfil" key={index}>
                <Comments
                  comment={comment.comment}
                  subComments={subComments}
                  username={comment.username}
                  fecha={comment.fechaCreacion}
                  authId={auth_id}
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
    <div className="box-profile">
      {objeto !== undefined ? null : (
        <nav className="box-config-profile">
          <Link to="/config_profile">configurar perfil</Link>
        </nav>
      )}
      <h1>{username}</h1>
      <img className="img-perfil" src={img} alt="Imagen de perfil" />
      <p>{fecha}</p>
      {objeto !== undefined ? (
        <nav>
          <Link to="/config_profile_update" className="box-config-profile">
            Actualizar Perfil
          </Link>
        </nav>
      ) : null}
      <div>
        <p>{biografia}</p>
      </div>
      {comments !== null ? CommetsUser() : <h>Cargando comentarios...</h>}
    </div>
  );
};

export default ProfilePage;
