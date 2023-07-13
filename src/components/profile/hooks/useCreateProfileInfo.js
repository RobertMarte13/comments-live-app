import { useState } from "react";
import { createUserInfo } from "../../../services/services";
import { useNavigate } from "react-router-dom";

const useCreateProfileInfo = (auth_id) => {
  //  * Estado
  const [username, setUsername] = useState("");
  const [img, setImg] = useState("");
  const [bio, setBio] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [frontPage, setFrontPage] = useState("");

  const navigate = useNavigate();

  // * Esta funcion sirve para crear por primera ves la informacion de un usuarios.
  const handleSubmit = (event) => {
    event.preventDefault();
    createUserInfo(auth_id, username, img, bio, fechaNacimiento, frontPage);
    return navigate("/profile");
  };

  return {
    handleSubmit,
    setUsername,
    setImg,
    setBio,
    setFechaNacimiento,
    setFrontPage
  };
};

export default useCreateProfileInfo;
