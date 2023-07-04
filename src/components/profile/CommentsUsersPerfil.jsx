
import Comments from "../home/Comments";

// eslint-disable-next-line react/prop-types
const CommentsUsersPerfil = ({ userId, comments, subComments, result }) => {

  return (
    <div className="content-comments-perfil">
      {/* Este map sirve para cuando demos click sobre el nombre dde un usuario estenos lleve a su perfil. */}
      {userId &&
        // eslint-disable-next-line react/prop-types
        comments.map((comment, index) =>
          comment.auth_id === userId ? (
            <div className="comments-perfil" key={index}>
              <Comments
                comment={comment.comment}
                subComments={subComments}
                username={comment.username}
                fecha={comment.fechaCreacion}
                authId={comment.auth_id}
                commentId={comment.auth_id}
                commentIdSubComment={comment.commentIdSubComment}
              />
            </div>
          ) : null
        )}

        {/* Este map sirve para cuando filtramos un usuario y este nos devuelva la informacion de su perfil. */}
        {result &&
          // eslint-disable-next-line react/prop-types
          comments.map((comment, index) =>
            // eslint-disable-next-line react/prop-types
            comment.auth_id === result[0].user_id ? (
              <div className="comments-perfil" key={index}>
                <Comments
                  comment={comment.comment}
                  subComments={subComments}
                  username={comment.username}
                  fecha={comment.fechaCreacion}
                  authId={comment.auth_id}
                  commentId={comment.auth_id}
                  commentIdSubComment={comment.commentIdSubComment}
                />
              </div>
            ) : null
          )}
    </div>
  );
};

export default CommentsUsersPerfil