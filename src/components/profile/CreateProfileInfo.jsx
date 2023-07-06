import { useState } from "react";
import { createUserInfo } from "../../services/services.js";

import '../../styles/updatePerfilInfo.css'

// eslint-disable-next-line react/prop-types
const CreateProfileInfo = ({ auth_id }) => {
  //  * Estado
  const [username, setUsername] = useState("");
  const [img, setImg] = useState("");
  const [bio, setBio] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");

  // * Esta funcion sirve para crear por primera ves la informacion de un usuarios.
  const handleSubmit = (event) => {
    event.preventDefault();
    createUserInfo(auth_id, username, img, bio, fechaNacimiento);
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
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateProfileInfo;
