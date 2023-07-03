import { useEffect, useState } from "react";
import { getComments } from "../../services/services";
import Comments from "./Comments";

import '../../styles/home.css';
import '../../styles/comments.css';

const HomePage = ({ authId }) => {
  const [comments, setComments] = useState([]);
  const [subComments, setSubComments] = useState([]);

  useEffect(() => {
    getALLComments();
  }, []);

  function getALLComments() {
    getComments().then((res) => {
        setComments(res.comment)
        setSubComments(res.subcomment)
    });
  }

  return (
    <div className="content-home">
      <h1>Home</h1>
      {comments &&
        comments.map((comment, index) => (
          <div className="content-comments" key={index}>
            <Comments comment={comment.comment} subComments={subComments} username={comment.username} authId={authId} commentId={comment.auth_id} commentIdSubComment={comment.commentIdSubComment}
          />
          </div>
        ))}
    </div>
  );
};

export default HomePage;
