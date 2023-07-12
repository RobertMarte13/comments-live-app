import { useEffect, useState } from "react";
import { getComments, getLikes, obtainUserName } from "../../../services/services";

const useRankingsComments = () => {
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

  return {
    handleSubmit,
    comments,
    subComments,
    setIsActiveS,
    isActiveS,
    likes,
    setSearch,
    search,
    result
  };
};

export default useRankingsComments;
