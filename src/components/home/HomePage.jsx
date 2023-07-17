import { useState } from "react";
import Comments from "./subComponents/Comments";

import Header from "../navbar/Header";
import useHomePage from "./hooks/useHomePage";
import ProfilesFollow from "./ProfilesFollow";
import useMyFollowers from "./hooks/useMyFollowers";
import "../../styles/home.css";
import "../../styles/comments.css";
import '../../styles/headerHomePage.css'

const visible = {
  opacity: 1,
  visibility:'visible',
  display: 'block',
  width: '100%'
}

const inVisible = {
  opacity: 0,
  visibility:'hidden',
  display: 'none',
  width: '100%'
}

// eslint-disable-next-line react/prop-types
const HomePage = ({ authId, usersId }) => {

  const [isActive, setIsActive] = useState(false)

  const {
    handleSubmit,
    search,
    setSearch,
    comments,
    subComments,
    result,
    setIsActiveS,
    isActiveS,
    copyComments
  } = useHomePage();

  const {copyComments2} = useMyFollowers(copyComments, authId)

  return (
    <div className="content-home">
      <Header
        handleSubmit={handleSubmit}
        search={search}
        setSearch={setSearch}
      />
      <header className="header-home-page">
        <nav>
          <button className="btn-nav" onClick={() => setIsActive(false)}>Home</button>
          <button className="btn-nav" onClick={() => setIsActive(true)}>Siguiendo</button>
        </nav>
      </header>
      <div className="content-main-post">
        <div className="content-post" id="content-post">
          <div className="post-follow" style={isActive ? visible : inVisible}>
            {copyComments2[0] !== undefined
              ? copyComments2.map((comment, index) => (
                  <div key={index}>
                    <ProfilesFollow
                      comment={comment.comment}
                      subComments={subComments}
                      username={comment.username}
                      img={comment.img}
                      fecha={comment.created_at}
                      authId={authId}
                      usersId={usersId}
                      commentId={comment.user_id}
                      commentIdSubComment={comment.commentIdSubComment}
                      deleteId={comment.delete_id}
                      commentsId={comment.comments_id}
                      result={result}
                      setIsActiveS={setIsActiveS}
                      isActiveS={isActiveS}
                    />
                  </div>
                ))
              : <h1>
                No sigues a nadie
              </h1>}
          </div>
          <div style={isActive ? inVisible : visible}>
            {comments !== null ? (
              comments.map((comment, index) => (
                <div className="content-comments" key={index}>
                  <Comments
                    comment={comment.comment}
                    subComments={subComments}
                    username={comment.username}
                    img={comment.img}
                    fecha={comment.created_at}
                    authId={authId}
                    usersId={usersId}
                    commentId={comment.user_id}
                    commentIdSubComment={comment.commentIdSubComment}
                    deleteId={comment.delete_id}
                    commentsId={comment.comments_id}
                    result={result}
                    setIsActiveS={setIsActiveS}
                    isActiveS={isActiveS}
                  />
                </div>
              ))
            ) : (
              <h1>Cargando Comentarios...</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
