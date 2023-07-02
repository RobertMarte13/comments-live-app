import { useState } from "react";
import { createComment } from "../../services/services";

const CreateComments = ({ id }) => {
  const [comment, setComment] = useState('')
  console.log(comment)
  
  const handleSubmit = (event) => {
    event.preventDefault();
    createComment(comment, id)
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
