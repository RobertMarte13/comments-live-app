import { useEffect, useState } from "react";
import {
  createLikes,
  createSubComment,
  deleteComment,
  getLikes,
  obtainUserId,
  updateComments,
} from "../../../services/services";

const useComments = (
  authId,
  commentId,
  commentIdSubComment,
  deleteId,
  usersId
) => {
  // * Aqui almaceno el comentarios que se escribe para poder crear el subcomentario.
  const [subComment, setSubComment] = useState([]);

  // * Este es para mostrar o no un subcomentario oculto.
  const [active, setActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [activeConfig, setActiveConfig] = useState(false);
  const [activeModifyCMMT, setActiveModifyCMMT] = useState(false);

  const [likes, setLikes] = useState(null);

  const [dataUsers, setDataUsers] = useState(null);
  const [user_id, setUser_Id] = useState("");

  const [customComment, setCustomComment] = useState(null);

  useEffect(() => {
    getLikes().then((res) => {
      setLikes(res.data);
    });
  }, []);

  // * Esta funcion me permite crear sub comentarios que luego podran ver los usuarios.
  const handleSubmit = (event) => {
    event.preventDefault();
    // Este es para crear respuestas de comentarios a los comentarios
    // principales.
    createSubComment(subComment, authId, commentId, commentIdSubComment);
    // * Esto limpia el input donde hacemos los sub comentarios.
    setSubComment("");
  };

  // * Esta funcion me permite obtener usuarios por medio del id del mismo
  function getUserId(commentId) {
    setIsActive(!isActive);

    const userid = commentId;

    setUser_Id(userid);

    obtainUserId(userid).then((res) => {
      setDataUsers(res);
    });
  }

  // * Esta funcion me permite eliminar comentarios principales
  function deleteComments() {
    const delete_id = deleteId;
    deleteComment(delete_id);
  }

  // * Esta funcion me permite modificar o editar comentarios principales.
  function modifyComments(event) {
    event.preventDefault();

    const delete_id = deleteId;

    setActiveModifyCMMT(!activeModifyCMMT);
    setActiveConfig(!activeConfig);

    const comment = customComment;
    updateComments(comment, delete_id);

    setCustomComment("");
  }

  // * Esta funcion crea likes
  function createLikesComments() {
    const users_id = usersId;
    const comments_id = commentsId;

    createLikes(users_id, comments_id);
  }

  return {
    getUserId,
    setActiveConfig,
    activeConfig,
    setActiveModifyCMMT,
    activeModifyCMMT,
    deleteComments,
    modifyComments,
    customComment,
    setCustomComment,
    handleSubmit,
    subComment,
    setSubComment,
    createLikesComments,
    likes,
    setActive,
    isActive,
    active,
    setIsActive,
    dataUsers,
    user_id,
  };
};

export default useComments;
