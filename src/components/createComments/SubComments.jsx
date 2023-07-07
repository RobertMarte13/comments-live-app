import "../../styles/subComentario.css";
import ArrowBotom from "../svg/ArrowBotom";

const visible = {
  visibility: "visible",
  opacity: 1,
  display: "block",
};

const invisible = {
  visibility: "hidden",
  opacity: 0,
  display: "none",
};

const SubComments = ({
  subComments,
  commentIdSubComment,
  setActive,
  active,
  username,
  img,
  comment,
  fecha
}) => {

  return (
    <div className="content-sub-comentario">
      <div className="sub-comentario">
        <div className="b-comment">
          <p className="btn-back" onClick={() => setActive(!active)}>
            back{" "}
          </p>
          <img className="img-perfil" src={img} alt="Imagen perfil" />
          <p className="sub-username">
            @{username} <span className="fecha">{fecha}</span>
          </p>
          <div className="subcomentario">
            <p>{comment}</p>
          </div>
        </div>
        <h3 className="title-comentario">Comentarios</h3>
        <div className="content-sub-post">
          {subComments &&
            // eslint-disable-next-line react/prop-types
            subComments.map((comment, index) => (
              // eslint-disable-next-line react/prop-types
              <div
                style={
                  comment.commentIdSubComment2 === commentIdSubComment
                    ? visible
                    : invisible
                }
                className="comments"
                key={index}
              >
                {/* Esta validacion lo que hace es verificar que el id en comun del comentario
            principal sea igual id en comun del sub comentario. */}
                {comment.commentIdSubComment2 === commentIdSubComment ? (
                  <div className="subcomentario">
                    <img className="img-perfil" src={comment.img} alt="Imagen perfil" />
                    <p>
                      @{comment.username}{" "}
                      <span className="fecha">{comment.created_at}</span>
                    </p>
                    <p className="comment">{comment.comments}</p>
                  </div>
                ) : null}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SubComments;
