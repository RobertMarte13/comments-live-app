// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  createLikes,
  createSubComment,
  deleteComment,
  getLikes,
  obtainUserId,
  updateComments,
} from "../../../services/services";

import SubComments from "../../createComments/SubComments";
import UsersProfilePage from "../../profile/UsersProfilePage";
import HeaderMainComments from "./HeaderMainComments";
import LikesAndComments from "./LikesAndComments";
import FormResponseComments from "./FormResponseComments";

import "../../../styles/usersProfile.css";


// eslint-disable-next-line react/prop-types
const Comments = ({comment, subComments, username, img, fecha, authId, usersId, commentId, commentIdSubComment, deleteId, commentsId, result, setIsActiveS, isActiveS}) => {
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

  return (
    <div className="box-main-comment">
      <div className="box-comment">
        <img className="img-perfil" src={img} alt="Imagen perfil" />
        <p onClick={() => getUserId(commentId)}>
          <span style={{ cursor: 'pointer' }}>@{username} </span>
          <span className="fecha">{fecha}</span>
        </p>
        <HeaderMainComments 
          comment={comment}
          authId={authId}
          commentId={commentId}
          setActiveConfig={setActiveConfig}
          activeConfig={activeConfig}
          setActiveModifyCMMT={setActiveModifyCMMT}
          activeModifyCMMT={activeModifyCMMT}
          deleteComments={deleteComments}
          modifyComments={modifyComments}
          customComment={customComment}
          setCustomComment={setCustomComment}
        />
        <FormResponseComments 
          handleSubmit={handleSubmit}
          setSubComment={setSubComment}
          subComment={subComment}
        />
        <LikesAndComments
          createLikesComments={createLikesComments}
          likes={likes}
          commentsId={commentsId}
          setActive={setActive}
          active={active}
        />
      </div>
      <div
        style={
          !active
            ? { opacity: 0, visibility: "hidden", display: "none" }
            : { opacity: 1, visibility: "visible", display: "block" }
        }
      >
        <SubComments
          subComments={subComments}
          commentIdSubComment={commentIdSubComment}
          setActive={setActive}
          active={active}
          username={username}
          img={img}
          comment={comment}
          fecha={fecha}
        />
      </div>
      <UsersProfilePage
        isActive={isActive}
        setIsActive={setIsActive}
        dataUsers={dataUsers}
        userId={user_id}
        result={result}
        setIsActiveS={setIsActiveS}
        isActiveS={isActiveS}
      />
    </div>
  );
};

export default Comments;
