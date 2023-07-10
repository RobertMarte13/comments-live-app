import EmojisController from "../EmojisController";

// eslint-disable-next-line react/prop-types
const FormCreateComments = ({ handleSubmit, setComment, setEmojis, emojis }) => {
  return (
    <form className="form-comment" onSubmit={handleSubmit}>
      <textarea
        className="box-comment"
        rows="10"
        onChange={(event) => setComment(event.target.value)}
      />
      <div className="controller-comment">
        <div className="btn-Emojis" onClick={() => setEmojis(!emojis)}>
          Emojis
        </div>
        <EmojisController emojis={emojis} />
        <button className="btn-create-comment">Create Comment</button>
      </div>
    </form>
  );
};

export default FormCreateComments;
