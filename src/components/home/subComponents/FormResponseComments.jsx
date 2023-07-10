// eslint-disable-next-line react/prop-types
const FormResponseComments = ({ handleSubmit, setSubComment, subComment }) => {
    return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-sub-comment"
            placeholder="Escribe un comentario..."
            value={subComment}
            onChange={(event) => setSubComment(event.target.value)}
          />
        </form>
    )
}

export default FormResponseComments