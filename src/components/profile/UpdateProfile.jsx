import { useState } from "react";
import { UpdateInfoUsers } from "../../services/services";
import { useNavigate } from 'react-router-dom'

import '../../styles/updatePerfilInfo.css'

// eslint-disable-next-line react/prop-types
const UpdateProfile = ({ auth_id }) => {
  const [username, setUsername] = useState(null);
  const [img, setImg] = useState(null);
  const [bio, setBio] = useState(null);
  const [fechaNacimiento, setFechaNacimiento] = useState(null);

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    UpdateInfoUsers(auth_id, username, img, bio, fechaNacimiento);
    window.alert('Actualizacion del perfil con exito!')
    return navigate("/profile");
  };

  return (
    <div className="box-config-profile">
      <form className="form-config-profile" onSubmit={handleSubmit}>
      <h1>Create Profile</h1>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="text"
          name="username"
          placeholder="Biografia"
          onChange={(event) => setBio(event.target.value)}
        />
        <input
          type="url"
          name="file"
          onChange={(e) => setImg(e.target.value)}
          placeholder="https://Example_Imagen"
        />
        <input
          type="date"
          name="fechaNacimiento"
          onChange={(e) => setFechaNacimiento(e.target.value)}
        />
        <button>Update</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
