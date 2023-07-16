import ClearSvg from "../../svg/ClearSvg";
import DeleteSvg from "../../svg/DeleteSvg";
import SettingsSvg from "../../svg/SettingsSvg";
import UpdateSvg from "../../svg/UpdateSvg";

// eslint-disable-next-line react/prop-types
const HeaderComments = ({
  comment,
  authId,
  commentId,
  setActiveConfig,
  activeConfig,
  setActiveModifyCMMT,
  activeModifyCMMT,
  deleteComments,
  modifyComments,
  customComment,
  setCustomComment,
}) => {
  return (
    <header className="header-comments">
      <p className="comment-p">{comment}</p>
      {authId === commentId ? (
        <div
          className="content-arrow-bottom"
          onClick={() => setActiveConfig(!activeConfig)}
        >
          {activeConfig ? <ClearSvg /> : <SettingsSvg />}
        </div>
      ) : null}
      <div
        className="content-config-comments"
        style={
          activeConfig
            ? { visibility: "visible", opacity: 1, display: "flex" }
            : null
        }
      >
        <button
          type="button"
          className="editar"
          onClick={() => setActiveModifyCMMT(!activeModifyCMMT)}
          name="editar"
        >
          Editar comentario <UpdateSvg />
        </button>
        <button
          disabled={true}
          type="button"
          className="clear"
          onClick={() => deleteComments()}
          name="clear"
        >
          Eliminar <DeleteSvg />
        </button>
      </div>
      <div
        style={
          activeModifyCMMT
            ? { visibility: "visible", opacity: 1, display: "block" }
            : { visibility: "hidden", opacity: 0, display: "none" }
        }
      >
        <form onSubmit={modifyComments}>
          <input
            className="custom-comments"
            type="text"
            name="custom-comments"
            value={customComment}
            onChange={(event) => setCustomComment(event.target.value)}
          />
        </form>
      </div>
    </header>
  );
};

export default HeaderComments;
