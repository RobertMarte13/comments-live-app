import SubComments from "../createComments/SubComments";
import UsersProfilePage from "../profile/UsersProfilePage";

import "../../styles/usersProfile.css";
import HeartSvg from "../svg/HeartSvg";
import CommentSvg from "../svg/CommentSvg";

import SettingsSvg from "../svg/SettingsSvg";
import ClearSvg from "../svg/ClearSvg";
import DeleteSvg from "../svg/DeleteSvg";
import UpdateSvg from "../svg/UpdateSvg";

import imgUserOptional from "../../assets/users_img_opcional.png";
import useCommentsRankings from "./hooks/useCommentsRankings";
import HeaderCommentsRankings from "./subComponents/HeaderCommentsRankings";
import LikesAndComments from "./subComponents/LikesAndComments";

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
    setActive,
    isActive,
    active,
    setIsActive,
    dataUsers,
    user_id,
  } = useCommentsRankings(
    authId,
    commentId,
    commentIdSubComment,
    deleteId,
    usersId,
    commentId
  );

  return (
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
          <span style={{ cursor: "pointer" }}>@{username}</span>{" "}
          <span className="fecha">{fecha}</span>
        </p>
        <HeaderCommentsRankings
          comment={comment}
          authId={authId}
          commentId={commentId}
          activeConfig={activeConfig}
          setActiveConfig={setActiveConfig}
          setActiveModifyCMMT={setActiveModifyCMMT}
          activeModifyCMMT={activeModifyCMMT}
          deleteComments={deleteComments}
          modifyComments={modifyComments}
          customComment={customComment}
          setCustomComment={setCustomComment}
        />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-sub-comment"
            placeholder="Escribe un comentario..."
            value={subComment}
            onChange={(event) => setSubComment(event.target.value)}
          />
        </form>
        <LikesAndComments 
          createLikesComments={createLikesComments}
          likes={likes}
          commentsId={commentId}
          setActive={setActive}
          active={active}
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
      <UsersProfilePage
        isActive={isActive}
        setIsActive={setIsActive}
        dataUsers={dataUsers}
        userId={user_id}
        result={result}
        setIsActiveS={setIsActiveS}
        isActiveS={isActiveS}
      />
    </div>
  );
};

export default CommentsRankings;
