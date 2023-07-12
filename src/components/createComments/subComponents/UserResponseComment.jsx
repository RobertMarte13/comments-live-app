import { visible, invisible } from '../styles/styles.js'

const UserResponseComment = ({ subComments, commentIdSubComment }) => {
    return (
        <div className="content-sub-post">
          {subComments &&
            subComments.map((comment, index) => (
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
                {
                  comment.commentIdSubComment2 === commentIdSubComment ? (
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
    )
}

export default UserResponseComment