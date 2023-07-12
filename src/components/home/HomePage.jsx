import Comments from "./subComponents/Comments";

import "../../styles/home.css";
import "../../styles/comments.css";
import Header from "../navbar/Header";
import useHomePage from "./hooks/useHomePage";

// eslint-disable-next-line react/prop-types
const HomePage = ({ authId, usersId }) => {
  const {
    handleSubmit,
    search,
    setSearch,
    comments,
    subComments,
    result,
    setIsActiveS,
    isActiveS
  } = useHomePage()

  return (
    <div className="content-home">
      
      <Header handleSubmit={handleSubmit} search={search} setSearch={setSearch} />
      <div className="content-main-post">
        <div className="content-post" id="content-post">
          {comments !== null ? (
            comments.map((comment, index) => (
              <div className="content-comments" key={index}>
                <Comments
                  comment={comment.comment}
                  subComments={subComments}
                  username={comment.username}
                  img={comment.img}
                  fecha={comment.created_at}
                  authId={authId}
                  usersId={usersId}
                  commentId={comment.user_id}
                  commentIdSubComment={comment.commentIdSubComment}
                  deleteId={comment.delete_id}
                  commentsId={comment.comments_id}
                  result={result}
                  setIsActiveS={setIsActiveS}
                  isActiveS={isActiveS}
                />
              </div>
            ))
          ) : (
            <h1>Cargando Comentarios...</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
