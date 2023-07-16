import { useEffect, useState } from "react";
import {
  getComments,
  getFollowers,
  removeFollower,
  setFollow,
} from "../../../services/services";

const useUsersProfilePages = (authId, userId) => {
  const [comments, setComments] = useState(null);
  const [subComments, setSubComments] = useState([]);
  const [followers, setFollowers] = useState(null);

  // * Este useEffect lo que hace es obtener todos los comentarios.
  useEffect(() => {
    setTimeout(() => {
      getComments().then((res) => {
        if (res !== undefined) {
          setComments(res.comment);
          setSubComments(res.subcomment);
        }
      });

      getFollowers().then((res) => {
        setFollowers(res);
      });
    }, 1500);

    // * Con este return limpio el setTimeout cuando el usuario no este en la pagina principal optimizando memoria.
    return () => {
      clearTimeout();
    };
  }, []);

  function setFollowersUsers() {

    const users_id = userId;
    const user_id = authId;
    setFollow(users_id, user_id);
  }

  function removeFollowersUsers(delete_id) {
    removeFollower(delete_id);
  }

  return {
    comments,
    subComments,
    setFollowersUsers,
    followers,
    removeFollowersUsers,
  };
};

export default useUsersProfilePages;
