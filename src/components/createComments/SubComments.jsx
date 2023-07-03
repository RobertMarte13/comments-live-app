import "../../styles/subComentario.css";

const visible = {
  visibility: 'visible',
  opacity: 1,
  display: 'block'
}

const invisible = {
  visibility: 'hidden',
  opacity: 0,
  display: 'none'
}

// eslint-disable-next-line react/prop-types
const SubComments = ({
  subComments,
  commentIdSubComment,
  setActive,
  active,
  username,
  comment
}) => {
  return (
    <div className="content-sub-comentario" onClick={() => setActive(!active)}>
      <div className="sub-comentario">
        <div className="box-comment b-comment">
          <p>@{username}</p>
          <div>
            <h3>{comment}</h3>
          </div>
        </div>
        <h3 className="title-comentario">Comentarios</h3>
        {subComments &&
          // eslint-disable-next-line react/prop-types
          subComments.map((comment, index) => (
            <div style={comment.commentIdSubComment2 === commentIdSubComment ?  visible : invisible} className="comments" key={index}>
              {/* Esta validacion lo que hace es verificar que el id en comun del comentario
            principal sea igual id en comun del sub comentario. */}
              {comment.commentIdSubComment2 === commentIdSubComment ? (
                <div>
                  <p>@{comment.username}</p>
                  <h1 className="comment">{comment.comments}</h1>
                </div>
              ) : null}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SubComments;
