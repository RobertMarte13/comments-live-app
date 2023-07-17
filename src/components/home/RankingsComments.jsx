import Header from "../navbar/Header";
import CommentsRankings from "./subComponents/CommentsRankings";
import commentsRankingsTools from "../../tools/commentsRankings";
import useRankingsComments from "./hooks/useRankingsComments";

// eslint-disable-next-line react/prop-types
const RankingsComments = ({ authId, usersId }) => {
  const {
    handleSubmit,
    comments,
    subComments,
    setIsActiveS,
    isActiveS,
    likes,
    setSearch,
    search,
    result,
  } = useRankingsComments();

  // TODO: Haciendo un ranking de los comentarios que mas an gustado a las personas.
  const commentRankings = commentsRankingsTools(comments, likes);

  return (
    <div className="content-home">
      <Header
        handleSubmit={handleSubmit}
        search={search}
        setSearch={setSearch}
      />
      <div className="content-main-post">
        {/* Agreagndo el rankig de commentarios por me gustas. */}
        <section
          className="content-post content-post-ranking"
          id="content-post-ranking"
        >
          <h3 style={{ textAlign: "center" }}>Comentarios más populares</h3>
          {commentRankings !== null ? (
            commentRankings.map((comment, index) => (
              <article className="content-comments" key={index}>
                <CommentsRankings
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
              </article>
            ))
          ) : (
            <p>Cargando Comentarios...</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default RankingsComments;
