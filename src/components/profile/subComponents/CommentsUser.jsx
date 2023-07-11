import Comments from "../../home/subComponents/Comments";

// eslint-disable-next-line react/prop-types
const CommetsUser = ({ comments, auth_id, subComments }) => {
  return (
    <div className="content-comment-perfil">
      {comments &&
        // eslint-disable-next-line react/prop-types
        comments.map((comment, index) =>
          comment.user_id === auth_id ? (
            <div className="comments-perfil" key={index}>
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
            </div>
          ) : null
        )}
    </div>
  );
};

export default CommetsUser;
