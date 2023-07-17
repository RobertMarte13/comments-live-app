import CommetsUser from "./subComponents/CommentsUser";
import BiographyUser from "./subComponents/BiographyUser";

// Custom Hooks
import useProfilePage from "./hooks/useProfilePage";

import "../../styles/profile.css";

const ProfilePage = ({ auth_id }) => {
  const {
    username,
    biografia,
    img,
    frontPage,
    fecha,
    infoProfile,
    comments,
    subComments,
    followers
  } = useProfilePage(auth_id);

  return (
    <article className="box-profile">
      <BiographyUser
        img={img}
        frontPage={frontPage}
        infoProfile={infoProfile}
        username={username}
        biografia={biografia}
        fecha={fecha}
        followers={followers}
        userId={auth_id}
      />
      <h2 style={{ paddingTop: "30px" }}>Mis Comentarios:</h2>
      {comments !== null ? (
        <CommetsUser
          comments={comments}
          auth_id={auth_id}
          subComments={subComments}
        />
      ) : (
        <p>Cargando comentarios...</p>
      )}
    </article>
  );
};

export default ProfilePage;
