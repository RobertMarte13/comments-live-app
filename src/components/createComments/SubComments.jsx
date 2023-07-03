import '../../styles/subComentario.css'

// eslint-disable-next-line react/prop-types
const SubComments = ({ subComments, commentIdSubComment, setActive, active }) => {
  return (
    <div className='content-sub-comentario'>
      <button onClick={() => setActive(!active)}>Back</button>
      {subComments &&
        // eslint-disable-next-line react/prop-types
        subComments.map((comment, index) => (
          <div key={index}>
            {/* Esta validacion lo que hace es verificar que el id en comun del comentario
            principal sea igual id en comun del sub comentario. */}
            {comment.commentIdSubComment2 === commentIdSubComment ? (
              <h1>{comment.comments}</h1>
            ) : null}
          </div>
        ))}
    </div>
  );
};

export default SubComments;
