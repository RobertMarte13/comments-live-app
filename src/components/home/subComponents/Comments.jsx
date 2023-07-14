import SubComments from "../../createComments/SubComments";
import UsersProfilePage from "../../profile/UsersProfilePage";
import HeaderComments from "./HeaderComments";
import LikesAndComments from "./LikesAndComments";
import FormResponseComments from "./FormResponseComments";

import imgUserOptional from "../../../assets/users_img_opcional.png";

import "../../../styles/usersProfile.css";
import useComments from "../hooks/useComments";

const Comments = ({
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
    deleteLike,
  } = useComments(
    authId,
    commentId,
    commentIdSubComment,
    deleteId,
    usersId,
    commentsId
  );

  console.log(usersId);

  return (
    <>
      <UsersProfilePage
        isActive={isActive}
        setIsActive={setIsActive}
        dataUsers={dataUsers}
        userId={user_id}
        result={result}
        setIsActiveS={setIsActiveS}
        isActiveS={isActiveS}
      />
      <div className="box-main-comment">
        <div className="box-comment">
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
            <span style={{ cursor: "pointer" }}>@{username} </span>
            <span className="fecha">{fecha}</span>
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
            setSubComment={setSubComment}
            subComment={subComment}
          />
          <LikesAndComments
            usersId={usersId}
            createLikesComments={createLikesComments}
            likes={likes}
            dislike={dislike}
            commentsId={commentsId}
            setActive={setActive}
            active={active}
            deleteLike={deleteLike}
          />
        </div>
        <div
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
        </div>
      </div>
    </>
  );
};

export default Comments;
