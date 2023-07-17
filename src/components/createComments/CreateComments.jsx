import CommentSvg from "../svg/CommentSvg";
import FormCreateComments from "./subComponents/FormCreateComments";

import "../../styles/createComments.css";
import useCreateComments from "./hooks/useCreateComments";
import { Navigate } from "react-router-dom";

const CreateComments = ({ commentsTodo, id }) => {
  const {
    handleSubmit,
    setComment,
    setEmojis,
    emojis,
  } = useCreateComments(id)

  return (
    <>
      {
        <>
          {commentsTodo === "" ? (
            <Navigate to="/config_profile" />
          ) : (
            <div className="content-create-comment">
              <h2
                className="title-create-comment">
                <span style={{ paddingRight: 20 }}>
                  create comment
                </span>
                <CommentSvg />
              </h2>
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
