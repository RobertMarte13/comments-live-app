import EmojiBtnSvg from "../../svg/EmojiBtnSvg";
import EmojisController from "../EmojisController";

const FormCreateComments = ({
  handleSubmit,
  setComment,
  setEmojis,
  emojis,
}) => {
  return (
    <>
      <form className="form-comment" onSubmit={handleSubmit}>
        <textarea
          className="box-comment"
          rows="10"
          placeholder="255 letters allowed"
          onChange={(event) => setComment(event.target.value)}
        />
        <div className="controller-comment">
          <div className="btn-Emojis" onClick={() => setEmojis(!emojis)}>
            <EmojiBtnSvg />
          </div>
          <EmojisController emojis={emojis} />
          <button className="btn-create-comment">Create Comment</button>
        </div>
      </form>
    </>
  );
};

export default FormCreateComments;
