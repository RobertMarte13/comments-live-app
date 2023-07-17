
import CommentSvg from "../svg/CommentSvg";
import HandSvg from "../svg/HandSvg";
import HandSvg2 from "../svg/HandSvg2";

// eslint-disable-next-line react/prop-types
const LikesAndComments = ({
  usersId,
  createLikesComments,
  likes,
  dislike,
  commentsId,
  setActive,
  active,
  deleteLike,
}) => {

  return (
    <div className="box-interative">
      <div className="box-heart">
        <div onClick={() => createLikesComments()}>
          <HandSvg />
        </div>
        {likes &&
          likes.map((like, index) =>
            like.comments_id === commentsId ? (
              <div className="content-like-and-dLike" key={index}>
                <p>
                  {like.like_count} {like.like_count === 1 ? "Like" : "Likes"}
                </p>
                {dislike &&
                  dislike.map((dLike, index) => (
                    dLike.comments_id === like.comments_id 
                    ? dLike.users_id === usersId 
                        ? <div
                      key={index}
                      className="content-disLike"
                      onClick={() => deleteLike(dLike.id_delete)}
                    >
                      
                      <HandSvg2 />
                        
                    
                    </div> : null
                    : null
                  ))}
              </div>
            ) : null
          )}
      </div>

      <CommentSvg setActive={setActive} active={active} />
    </div>
  );
};

export default LikesAndComments;
