import { useState } from "react";
import { createComment } from "../../services/services";
import { useNavigate, Navigate } from "react-router-dom";

import CommentSvg from "../svg/CommentSvg";
import FormCreateComments from "./subComponents/FormCreateComments";

import "../../styles/createComments.css";

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
                className="title-create-comment">
                <span style={{ paddingRight: 20 }}>
                  create comment
                </span>
                <CommentSvg />
              </h1>
              <FormCreateComments 
                handleSubmit={handleSubmit}  
                setComment={setComment}
                setEmojis={setEmojis}
                emojis={emojis}
              />
            </div>
          )}
        </>
      }
    </>
  );
};

export default CreateComments;
