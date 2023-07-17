import SubComments from "../../createComments/SubComments";
import UsersProfilePage from "../../profile/UsersProfilePage";
import imgUserOptional from "../../../assets/users_img_opcional.png";
import useComments from "../hooks/useComments";

import HeaderComments from "./HeaderComments";
import FormResponseComments from "./FormResponseComments";
import LikesAndComments from "../LikesAndComments";

import "../../../styles/usersProfile.css";

const CommentsRankings = ({
  comment,
  subComments,
  username,
  img,
  fecha,
  authId,
  usersId,
  commentId,
  commentIdSubComment,
  deleteId,
  commentsId,
  result,
  setIsActiveS,
  isActiveS,
}) => {

  const {
    getUserId,
    setActiveConfig,
    activeConfig,
    setActiveModifyCMMT,
    activeModifyCMMT,
    deleteComments,
    modifyComments,
    customComment,
    setCustomComment,
    handleSubmit,
    subComment,
    setSubComment,
    createLikesComments,
    likes,
    dislike,
    setActive,
    isActive,
    active,
    setIsActive,
    dataUsers,
    user_id,
    deleteLike
  } = useComments(
    authId,
    commentId,
    commentIdSubComment,
    deleteId,
    usersId,
    commentId
  );

  const newFecha = fecha
  const meses = newFecha.slice(0, 9)
  const horas = newFecha.slice(11, 16)

  return (
    <section className="box-main-comment">
      <UsersProfilePage
        isActive={isActive}
        setIsActive={setIsActive}
        dataUsers={dataUsers}
        userId={user_id}
        result={result}
        setIsActiveS={setIsActiveS}
        isActiveS={isActiveS}
      />
      <article className="box-comment">
        {img !== "" ? (
          <img className="img-perfil" src={img} alt="Imagen perfil" />
        ) : (
          <img
            className="img-perfil"
            src={imgUserOptional}
            alt="Imagen perfil"
          />
        )}
        <p onClick={() => getUserId(commentId)}>
          <span style={{ cursor: "pointer" }}>@{username}</span>{" "}
          <span className="fecha">Fecha: {meses}  Horas: {horas}</span>
        </p>
        <HeaderComments
          comment={comment}
          authId={authId}
          commentId={commentId}
          setActiveConfig={setActiveConfig}
          activeConfig={activeConfig}
          setActiveModifyCMMT={setActiveModifyCMMT}
          activeModifyCMMT={activeModifyCMMT}
          deleteComments={deleteComments}
          modifyComments={modifyComments}
          customComment={customComment}
          setCustomComment={setCustomComment}
        />
        <FormResponseComments
           handleSubmit={handleSubmit}
           subComment={subComment}
           setSubComment={setSubComment}
        />
        <LikesAndComments 
          createLikesComments={createLikesComments}
          likes={likes}
          dislike={dislike}
          commentsId={commentsId}
          setActive={setActive}
          active={active}
          deleteLike={deleteLike}
        />
      </article>
      <article
        style={
          !active
            ? { opacity: 0, visibility: "hidden", display: "none" }
            : { opacity: 1, visibility: "visible", display: "block" }
        }
      >
        <SubComments
          subComments={subComments}
          commentIdSubComment={commentIdSubComment}
          setActive={setActive}
          active={active}
          username={username}
          img={img}
          comment={comment}
          fecha={fecha}
        />
      </article>
    </section>
  );
};

export default CommentsRankings;
