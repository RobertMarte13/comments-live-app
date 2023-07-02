
const Comments = ({ comment, username }) => {
    console.log(comment, username)
    return (
        <div>
            <p>@{username}</p>
            <h3>{comment}</h3>
            
        </div>
    );
}

export default Comments;
