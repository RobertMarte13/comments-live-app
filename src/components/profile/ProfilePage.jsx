import { useEffect, useState } from "react";
import { getComments, getUserInfo } from "../../services/services";

import Comments from "../home/subComponents/Comments";
import CommetsUser from "./subComponents/CommentsUser";
import BiographyUser from "./subComponents/BiographyUser";

import "../../styles/profile.css";

// eslint-disable-next-line react/prop-types
const ProfilePage = ({ auth_id }) => {
  // * Estado
  const [username, setUsername] = useState();
  const [biografia, setBiografia] = useState();
  const [img, setImg] = useState();
  const [fecha, setFecha] = useState();
  const [infoProfile, setInfoProfile] = useState();
  const [comments, setComments] = useState(null);
  const [subComments, setSubComments] = useState([]);

  // * Esta funcion lo que hace es obtener la informacion que el usuario creo para su perfil.
  useEffect(() => {
    getUserInfo(auth_id).then((res) => {
      if (res !== undefined) {
        setUsername(res.user);
        setBiografia(res.bio);
        setFecha(res.fechaNacimiento);
        setImg(res.img);
      }
      setInfoProfile(res);
    });

    // * Este me devuleve todos los comentarios y subcomentarios que luego pondre en el perfil
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
      getUserInfo();
    };
  }, [auth_id]);

  return (
    <div className="box-profile">
      <BiographyUser 
        img={img}
        infoProfile={infoProfile}
        username={username}
        biografia={biografia}
        fecha={fecha}
      />
      <h1 style={{ paddingTop: '30px' }}>Mis Comentarios:</h1>
      {comments !== null 
        ? <CommetsUser 
          comments={comments} 
          auth_id={auth_id} 
          Comments={Comments} 
          subComments={subComments} 
        /> 
        : <h>Cargando comentarios...</h>}
    </div>
  );
};

export default ProfilePage;
