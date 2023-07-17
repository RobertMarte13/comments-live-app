import Comments from "../../home/subComponents/Comments";


const CommetsUser = ({ comments, auth_id, subComments }) => {
  return (
    <article className="content-comment-perfil">
      {comments &&
        comments.map((comment, index) =>
          comment.user_id === auth_id ? (
            <section className="comments-perfil" key={index}>
              <Comments
                comment={comment.comment}
                subComments={subComments}
                username={comment.username}
                img={comment.img}
                fecha={comment.created_at}
                authId={auth_id}
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

export default CommetsUser;
