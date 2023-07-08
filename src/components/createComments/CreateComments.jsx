import { useState } from "react";
import { createComment } from "../../services/services";
import { useNavigate, Navigate } from "react-router-dom";

import '../../styles/createComments.css'

// eslint-disable-next-line react/prop-types
const CreateComments = ({ commentsTodo, id }) => {
  const [comment, setComment] = useState('')

  const navigate = useNavigate()
  
  const handleSubmit = (event) => {
    event.preventDefault();
    createComment(comment, id)
    return navigate('/home')
  }


  return (
    <>
     { 
      <>
     { 
      commentsTodo === '' ?
        <Navigate to='/config_profile'/>
       : <div className="content-create-comment">
      <h1 className="title-create-comment">create comment</h1>
      <form className="form-comment" onSubmit={handleSubmit}>
        <textarea 
          className="box-comment"
          rows="10"
          onChange={event => setComment(event.target.value)}
        />
        <button className="btn-create-comment">Create Comment</button>
      </form>
    </div>
     }
    </>
     }
    </>
  );
};

export default CreateComments;
