import { useEffect, useState } from "react";
import { getComments } from "../../services/services";
import Comments from "./Comments";

import "../../styles/home.css";
import "../../styles/comments.css";

// eslint-disable-next-line react/prop-types
const HomePage = ({ authId }) => {
  const [comments, setComments] = useState([]);
  const [subComments, setSubComments] = useState([]);

  useEffect(() => {
    setTimeout( () => {
      getComments().then((res) => {
        setComments(res.comment);
        setSubComments(res.subcomment);
        console.log(res);
      });
    }, 1500)
  });

  // function getALLComments() {
  //   getComments().then((res) => {
  //     setComments(res.comment);
  //     setSubComments(res.subcomment);
  //     console.log(res);
  //   });
  // }

  return (
    <div className="content-home">
      <h1>Home</h1>
      <div className="content-main-post">
        <div className="content-post">
          {comments &&
            comments.map((comment, index) => (
              <div className="content-comments" key={index}>
                <Comments
                  comment={comment.comment}
                  subComments={subComments}
                  username={comment.username}
                  authId={authId}
                  commentId={comment.auth_id}
                  commentIdSubComment={comment.commentIdSubComment}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
