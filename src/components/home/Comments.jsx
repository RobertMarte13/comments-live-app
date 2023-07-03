// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SubComments from "../createComments/SubComments";
import { createSubComment } from "../../services/services";

// eslint-disable-next-line react/prop-types
const Comments = ({ comment, subComments, username, authId, commentId, commentIdSubComment }) => {
  // Aqui almaceno el comentarios que se escribe para poder crear el subcomentario.
  const [subComment, setSubComment] = useState([]);
  // Este es para mostrar o no un subcomentario oculto.
  const [active, setActive] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Este es para crear respuestas de comentarios a los comentarios
    // principales.
    createSubComment(subComment, authId, commentId, commentIdSubComment);
  }; 

  return (
    <div>
      <div className="box-comment">
        <p>@{username}</p>
        <div onClick={() => setActive(!active)}>
          <h3>{comment}</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-sub-comment"
            placeholder="Escribe un comentario..."
            onChange={(event) => setSubComment(event.target.value)}
          />
        </form>
      </div>
      <div
        style={
          !active
            ? { opacity: 0, visibility: "hidden", display: "none" }
            : { opacity: 1, visibility: "visible", display: "block" }
        }
      >
        <SubComments subComments={subComments} commentIdSubComment={commentIdSubComment} setActive={setActive} active={active} />
      </div>
    </div>
  );
};

export default Comments;
