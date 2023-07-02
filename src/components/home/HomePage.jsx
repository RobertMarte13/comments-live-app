import { useEffect, useState } from "react";
import { getComments } from "../../services/services";
import Comments from "./Comments";

const HomePage = () => {
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

  console.log(comments)
  return (
    <div>
      <h1>Home</h1>
      {comments &&
        comments.map((comment, index) => (
          <div key={index}>
            <Comments comment={comment.comment} username={comment.username} />
          </div>
        ))}
    </div>
  );
};

export default HomePage;
