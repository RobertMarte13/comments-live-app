import HeaderSubComments from "./subComponents/HeaderSubComments";
import UserResponseComment from "./subComponents/UserResponseComment";
import "../../styles/subComentario.css";

const SubComments = ({ subComments, commentIdSubComment, setActive, active, username, img, comment, fecha }) => {
  return (
    <article className="content-sub-comentario">
      <section className="sub-comentario">
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
      </section>
    </article>
  );
};

export default SubComments;
