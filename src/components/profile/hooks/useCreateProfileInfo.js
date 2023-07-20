import { useState } from "react";
import { createUserInfo } from "../../../services/services";
import { useNavigate } from "react-router-dom";

const useCreateProfileInfo = (auth_id) => {
  //  * Estado
  const [username, setUsername] = useState("");
  const [img, setImg] = useState("");
  const [bio, setBio] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [frontPage, setFrontPage] = useState(null);
  const [isValidation, setIsValidation] = useState(false);

  const navigate = useNavigate();

  // * Esta funcion sirve para crear por primera ves la informacion de un usuarios.
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (isValidation) {
      createUserInfo(auth_id, username, img, bio, fechaNacimiento, frontPage);
      return navigate("/profile");
    } else {
      window.alert("⚠️ Primero debes confirmar")
    }
  };

  return {
    handleSubmit,
    setUsername,
    setImg,
    setBio,
    setFechaNacimiento,
    setFrontPage,
    setIsValidation
  };
};

export default useCreateProfileInfo;
