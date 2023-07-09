import { useState } from "react";
import { createComment } from "../../services/services";
import { useNavigate, Navigate } from "react-router-dom";

import "../../styles/createComments.css";
import CommentSvg from "../svg/CommentSvg";
import EmojisController from "./EmojisController";

// eslint-disable-next-line react/prop-types
const CreateComments = ({ commentsTodo, id }) => {
  const [comment, setComment] = useState('');
  const [emojis, setEmojis] = useState(false);


  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    createComment(comment, id);
    return navigate("/home");
  };

  return (
    <>
      {
        <>
          {commentsTodo === "" ? (
            <Navigate to="/config_profile" />
          ) : (
            <div className="content-create-comment">
              <h1
                className="title-create-comment"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span style={{ paddingRight: 20 }}>create comment</span>{" "}
                <CommentSvg />
              </h1>
              <form className="form-comment" onSubmit={handleSubmit}>
                <textarea
                  className="box-comment"
                  rows="10"
                  
                  onChange={(event) => setComment(event.target.value)}
                />
                <div className="controller-comment">
                  <div
                    className="btn-Emojis"
                    onClick={() => setEmojis(!emojis)}
                  >
                    Emojis
                  </div>
                  <EmojisController
                    emojis={emojis}
                  />
                  <button className="btn-create-comment">Create Comment</button>
                </div>
              </form>
            </div>
          )}
        </>
      }
    </>
  );
};

export default CreateComments;
