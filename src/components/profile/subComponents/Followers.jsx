const Followers = ({ followers, userId }) => {

  return (
    <>
      {followers !== null ? (
        followers.data !== null ? (
          followers.data.map((el, index) =>
            userId === el.users_id ? (
              <span key={index}>
                {el.follow_count} {el.follow_count > 1 ? "Followers" : "Follow"}
              </span>
            ) : null
          )
        ) : (
          <p>...Cargando Followers</p>
        )
      ) : null}
    </>
  );
};

export default Followers