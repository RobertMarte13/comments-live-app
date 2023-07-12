import HeaderSubComments from "./subComponents/HeaderSubComments";
import UserResponseComment from "./subComponents/UserResponseComment";
import "../../styles/subComentario.css";

const SubComments = ({ subComments, commentIdSubComment, setActive, active, username, img, comment, fecha }) => {
  return (
    <div className="content-sub-comentario">
      <div className="sub-comentario">
        <HeaderSubComments
          setActive={setActive}
          active={active}
          img={img}
          username={username}
          fecha={fecha}
          comment={comment}
        />

        <h3 className="title-comentario">Comentarios</h3>

        <UserResponseComment
          subComments={subComments}
          commentIdSubComment={commentIdSubComment}
        />
      </div>
    </div>
  );
};

export default SubComments;
