import { visible, invisible } from "../styles/styles.js";
import imgUserOptional from '../../../assets/users_img_opcional.png'

const UserResponseComment = ({ subComments, commentIdSubComment }) => {
  
  return (
    <article className="content-sub-post">
      {subComments &&
        subComments.map((comment, index) => (
          <section
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
                {comment.img !== null ? (
                  <img
                    className="img-perfil"
                    src={comment.img}
                    alt="Imagen perfil"
                  />
                ) : (
                  <img
                    className="img-perfil"
                    src={imgUserOptional}
                    alt="Imagen perfil"
                  />
                )}

                <p>
                  @{comment.username}{" "}
                  <span className="fecha">{comment.created_at}</span>
                </p>
                <p className="comment">{comment.comments}</p>
              </div>
            ) : (
              <p>...Cargando</p>
            )}
          </section>
        ))}
    </article>
  );
};

export default UserResponseComment;
