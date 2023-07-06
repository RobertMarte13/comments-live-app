// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SubComments from "../createComments/SubComments";
import {
  createSubComment,
  deleteComment,
  obtainUserId,
  updateComments,
} from "../../services/services";
import UsersProfilePage from "../profile/UsersProfilePage";

import "../../styles/usersProfile.css";
import HeartSvg from "../svg/HeartSvg";
import CommentSvg from "../svg/CommentSvg";

import SettingsSvg from "../svg/SettingsSvg";
import ClearSvg from "../svg/ClearSvg";
import DeleteSvg from "../svg/DeleteSvg";
import UpdateSvg from "../svg/UpdateSvg";

// eslint-disable-next-line react/prop-types
const Comments = ({comment, subComments, username, fecha, authId, commentId, commentIdSubComment, deleteId, result, setIsActiveS, isActiveS}) => {

  // * Aqui almaceno el comentarios que se escribe para poder crear el subcomentario.
  const [subComment, setSubComment] = useState([]);

  // * Este es para mostrar o no un subcomentario oculto.
  const [active, setActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [activeConfig, setActiveConfig] = useState(false);
  const [activeModifyCMMT, setActiveModifyCMMT] = useState(false);

  const [dataUsers, setDataUsers] = useState(null);
  const [user_id, setUser_Id] = useState("");

  const [customComment, setCustomComment] = useState(null);

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

  return (
    <div className="box-main-comment">
      <div className="box-comment">
        <p onClick={() => getUserId(commentId)}>
          @{username} <span className="fecha">{fecha}</span>
        </p>
        <header className="header-comments">
          <h3>{comment}</h3>
          {authId === commentId ? (
            <div
              className="content-arrow-bottom"
              onClick={() => setActiveConfig(!activeConfig)}
            >
              {
                activeConfig ? <ClearSvg /> : <SettingsSvg />
              }
            </div>
          ) : null}
          <div
            className="content-config-comments"
            style={
              activeConfig
                ? { visibility: "visible", opacity: 1, display: "flex" }
                : null
            }
          >
            <button
              type="button"
              className="editar"
              onClick={() => setActiveModifyCMMT(!activeModifyCMMT)}
              name="editar"
            >
              Editar comentario <UpdateSvg />
            </button>
            <button
              type="button"
              className="clear"
              onClick={() => deleteComments()}
              name="clear"
            >
              Eliminar <DeleteSvg />
            </button>
          </div>
          <div
            style={
              activeModifyCMMT
                ? { visibility: "visible", opacity: 1, display: "block" }
                : { visibility: "hidden", opacity: 0, display: "none" }
            }
          >
            <form onSubmit={modifyComments}>
              <input
                type="text"
                name="custom-comments"
                value={customComment}
                onChange={(event) => setCustomComment(event.target.value)}
              />
            </form>
          </div>
        </header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-sub-comment"
            placeholder="Escribe un comentario..."
            value={subComment}
            onChange={(event) => setSubComment(event.target.value)}
          />
        </form>
        <div className="box-interative">
          <HeartSvg />
          <CommentSvg setActive={setActive} active={active} />
        </div>
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
