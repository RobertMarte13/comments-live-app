import CommentSvg from "../../svg/CommentSvg";
import HeartSvg from "../../svg/HeartSvg";

// eslint-disable-next-line react/prop-types
const LikesAndComments = ({ createLikesComments, likes, commentsId, setActive, active }) => {
  return (
    <div className="box-interative">
      <div className="box-heart" onClick={() => createLikesComments()}>
        <HeartSvg />
        {likes &&
          // eslint-disable-next-line react/prop-types
          likes.map((like, index) =>
            like.comments_id === commentsId ? (
              <div key={index}>
                <p>
                  {like.like_count} {like.like_count === 1 ? "Like" : "Likes"}
                </p>
              </div>
            ) : null
          )}
      </div>

      <CommentSvg setActive={setActive} active={active} />
    </div>
  );
};

export default LikesAndComments;
