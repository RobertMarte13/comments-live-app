import { useEffect, useState } from "react";
import { getComments } from "../../../services/services";

const useUsersProfilePages = () => {
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

  return {
    comments,
    subComments,
  };
};

export default useUsersProfilePages