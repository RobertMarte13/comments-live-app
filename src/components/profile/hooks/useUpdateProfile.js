import { useNavigate } from "react-router-dom";
import { UpdateInfoUsers } from "../../../services/services";
import { useState } from "react";

const useUpdateProfile = (auth_id) => {
  const [username, setUsername] = useState(null);
  const [img, setImg] = useState(null);
  const [bio, setBio] = useState(null);
  const [fechaNacimiento, setFechaNacimiento] = useState(null);
  const [frontPage, setFrontPage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    UpdateInfoUsers(auth_id, username, img, bio, fechaNacimiento, frontPage);
    window.alert("Actualizacion del perfil con exito!");
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

export default useUpdateProfile;
