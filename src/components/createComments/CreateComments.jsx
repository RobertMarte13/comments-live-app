import { useState } from "react";
import { createComment } from "../../services/services";
import { useNavigate } from "react-router-dom";

const CreateComments = ({ id }) => {
  const [comment, setComment] = useState('')

  const navigate = useNavigate()
  
  const handleSubmit = (event) => {
    event.preventDefault();
    createComment(comment, id)
    return navigate('/home')
  }

  return (
    <div>
      <h1>create comment</h1>
      <form onSubmit={handleSubmit}>
        <textarea rows="4"
        onChange={event => setComment(event.target.value)}
        style={{ resize: 'none', width: '90%' }}/>
        <button>Create Comment</button>
      </form>
    </div>
  );
};

export default CreateComments;
