const Comments = ({ comment, username }) => {
  console.log(comment, username);
  return (
    <div className="box-comment">
      <p>@{username}</p>
      <div>
        <h3>{comment}</h3>
        <input 
          type="text" 
          className="input-sub-comment" 
          placeholder="Escribe un comentario..."/>
      </div>
    </div>
  );
};

export default Comments;
