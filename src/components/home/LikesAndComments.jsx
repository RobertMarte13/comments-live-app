import { toast } from "react-hot-toast";
import CommentSvg from "../svg/CommentSvg";
import HandSvg from "../svg/HandSvg";
import HandSvg2 from "../svg/HandSvg2";

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
  const notify2 = () =>
    toast("Recarga la pagína para ver los cambios!", {
      duration: 4000,
      position: "top-center",

      // Custom Icon
      icon: "🙃",

      // Change colors of success/error/loading icon
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },

      // Aria
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });

  return (
    <div className="box-interative">
      <div className="box-heart">
        <div onClick={() => createLikesComments()}>
          <div
            style={{
              cursor: "pointer",
            }}
            onClick={() => notify2()}
          >
            <HandSvg />
          </div>
        </div>
        {likes &&
          likes.map((like, index) =>
            like.comments_id === commentsId ? (
              <div className="content-like-and-dLike" key={index}>
                <p>
                  {like.like_count} {like.like_count === 1 ? "Like" : "Likes"}
                </p>
                {dislike &&
                  dislike.map((dLike, index) =>
                    dLike.comments_id === like.comments_id ? (
                      dLike.users_id === usersId ? (
                        <div
                          key={index}
                          className="content-disLike"
                          onClick={() => deleteLike(dLike.id_delete)}
                        >
                          <div
                            style={{
                              cursor: "pointer",
                            }}
                            onClick={() => notify2()}
                          >
                            <HandSvg2 />
                          </div>
                        </div>
                      ) : null
                    ) : null
                  )}
              </div>
            ) : null
          )}
      </div>
      <CommentSvg setActive={setActive} active={active} />
    </div>
  );
};

export default LikesAndComments;
