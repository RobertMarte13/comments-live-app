import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { getUserInfo } from "../services/services";
import { toast } from "react-hot-toast";

const useApp = () => {
  // * Estados
  const [isValid, setIsValid] = useState(true);
  const [id, setId] = useLocalStorage("id", null);
  const [isValidation, setIsValidation] = useLocalStorage(
    "isValidation",
    false
  );
  // eslint-disable-next-line no-unused-vars
  const [username, setUsername] = useState("");
  const [imgUser, setImgUser] = useState("");

  const [isActive, setIsActive] = useState(false);
  const [users_id, setUser_Id] = useState(null);

  const [commentsTodo, setCommentsTodo] = useState("");

  useEffect(() => {
    getUserInfo(id).then((res) => {
      if (res !== undefined) {
        setUser_Id(res.users_id);
        setUsername(res.user);
        setImgUser(res.img);
        setCommentsTodo(res);
      }
    });
  }, [id]);

  // * Esta funcion sirve para actualizar los comment y subComment de la aplicacion en la pagina principal.
  function updateDate(props) {
    setId(props.pin);
    setIsValidation(isValid);
    return notify();
  }

  const notify = () => toast.success("Welcome to Comments Live");

  // * Esta funcion sirve para cerrar seccion en la pagina.
  function closedSession() {
    setUsername("");
    setIsValidation(false);
    setIsActive(false);
  }

  return {
    id,
    username,
    setIsValid,
    isValidation,
    imgUser,
    isActive,
    users_id,
    commentsTodo,
    updateDate,
    setIsActive,
    closedSession
  };
};

export default useApp;
