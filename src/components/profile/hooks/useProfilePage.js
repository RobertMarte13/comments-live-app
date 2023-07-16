import { useEffect, useState } from "react";
import { getComments, getFollowers, getUserInfo } from "../../../services/services";

const useProfilePage = (auth_id) => {
  // * Estado
  const [username, setUsername] = useState();
  const [biografia, setBiografia] = useState();
  const [img, setImg] = useState();
  const [fecha, setFecha] = useState();
  const [infoProfile, setInfoProfile] = useState();
  const [comments, setComments] = useState(null);
  const [subComments, setSubComments] = useState([]);
  const [frontPage, setFrontPage] = useState([]);
  const [followers, setFollowers] = useState(null);

  // * Esta funcion lo que hace es obtener la informacion que el usuario creo para su perfil.
  useEffect(() => {
    getUserInfo(auth_id).then((res) => {
      if (res !== undefined) {
        setUsername(res.user);
        setBiografia(res.bio);
        setFecha(res.fechaNacimiento);
        setImg(res.img);
        setFrontPage(res.front_page);
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

    // * Este es el metodo que me permite obtener los followers de las personas que siguen algun perfil.
    getFollowers().then((res) => {
      setFollowers(res);
    });

    // * Con este return limpio el setTimeout cuando el usuario no este en la pagina principal optimizando memoria.
    return () => {
      clearTimeout();
      getUserInfo();
      getFollowers();
    };
  }, [auth_id]);

  return {
    username,
    biografia,
    img,
    frontPage,
    fecha,
    infoProfile,
    comments,
    subComments,
    followers
  };
};

export default useProfilePage;
