// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SubComments from "../createComments/SubComments";
import { createSubComment, obtainUserId } from "../../services/services";
import UsersProfilePage from "../profile/UsersProfilePage";


import '../../styles/usersProfile.css'
import HeartSvg from "../svg/HeartSvg";
import CommentSvg from "../svg/CommentSvg";

// eslint-disable-next-line react/prop-types
const Comments = ({ comment, subComments, username, fecha, authId, commentId, commentIdSubComment, result, setIsActiveS, isActiveS }) => {

  // Aqui almaceno el comentarios que se escribe para poder crear el subcomentario.
  const [subComment, setSubComment] = useState([]);
  // Este es para mostrar o no un subcomentario oculto.
  const [active, setActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [dataUsers, setDataUsers] = useState(null);
  const [user_id, setUser_Id] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
     
    // Este es para crear respuestas de comentarios a los comentarios
    // principales.
    createSubComment(subComment, authId, commentId, commentIdSubComment );
    setSubComment('')
  }; 

  function getUserId(commentId) {
    setIsActive(!isActive)
    const userid = commentId
    setUser_Id(userid)
    obtainUserId(userid).then((res) =>{
      setDataUsers(res)
    })
  }

  return (
    <div className="box-main-comment">
      <div className="box-comment">
        <p onClick={() => getUserId(commentId)}>@{username} <span className="fecha">{fecha}</span></p>
        <div>
          <h3>{comment}</h3>
        </div>
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
        <SubComments subComments={subComments} commentIdSubComment={commentIdSubComment} setActive={setActive} active={active} username={username} comment={comment} fecha={fecha} />
      </div>
      <UsersProfilePage isActive={isActive} setIsActive={setIsActive} dataUsers={dataUsers} userId={user_id} result={result} setIsActiveS={setIsActiveS} isActiveS={isActiveS} />
    </div>
  );
};

export default Comments;
