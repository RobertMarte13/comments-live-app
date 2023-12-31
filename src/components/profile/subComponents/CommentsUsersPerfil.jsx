
import Comments from "../../home/subComponents/Comments";

const CommentsUsersPerfil = ({ userId, comments, subComments, result }) => {
  
  return (
    <article className="content-comments-perfil">
      {/* Este map sirve para cuando demos click sobre el nombre dde un usuario estenos lleve a su perfil. */}
      {userId &&
        comments.map((comment, index) =>
          comment.user_id === userId ? (
            <section className="comments-perfil" key={index}>
              <Comments
                comment={comment.comment}
                subComments={subComments}
                username={comment.username}
                img={comment.img}
                fecha={comment.created_at}
                authId={comment.user_id}
                commentId={comment.user_id}
                commentsId={comment.comments_id}
                commentIdSubComment={comment.commentIdSubComment}
              />
            </section>
          ) : null
        )}

        {/* Este map sirve para cuando filtramos un usuario y este nos devuelva la informacion de su perfil. */}
        {result &&
          comments.map((comment, index) =>
            comment.user_id === result[0].user_id ? (
              <section className="comments-perfil" key={index}>
                <Comments
                  comment={comment.comment}
                  subComments={subComments}
                  username={comment.username}
                  img={comment.img}
                  fecha={comment.created_at}
                  authId={comment.user_id}
                  commentId={comment.user_id}
                  commentsId={comment.comments_id}
                  commentIdSubComment={comment.commentIdSubComment}
                />
              </section>
            ) : null
          )}
    </article>
  );
};

export default CommentsUsersPerfil