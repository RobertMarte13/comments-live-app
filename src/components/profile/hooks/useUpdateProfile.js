import { useNavigate } from "react-router-dom";
import { UpdateInfoUsers } from "../../../services/services";
import { useState } from "react";

const useUpdateProfile = (auth_id) => {
  const [username, setUsername] = useState(null);
  const [img, setImg] = useState(null);
  const [bio, setBio] = useState(null);
  const [fechaNacimiento, setFechaNacimiento] = useState(null);
  const [frontPage, setFrontPage] = useState("");
  const [isValidation, setIsValidation] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValidation) {
      UpdateInfoUsers(auth_id, username, img, bio, fechaNacimiento, frontPage);
      window.alert("✅ Actualizacion del perfil con exito!");
      return navigate("/profile");
    } else {
      window.alert("⚠️ Primero debes confirmar si quieres hacer los cambios")
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

export default useUpdateProfile;
