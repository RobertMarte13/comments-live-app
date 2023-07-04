import { useState } from "react";
import { createUserInfo } from "../../services/services.js";

// eslint-disable-next-line react/prop-types
const CreateProfileInfo = ({ auth_id }) => {
  const [username, setUsername] = useState("");
  const [img, setImg] = useState("");
  const [bio, setBio] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState('');

  console.log(img.slice(12))

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log((auth_id, username, img.slice(12), bio, fechaNacimiento))
    createUserInfo(auth_id, username, img, bio, fechaNacimiento);
  };

  return (
    <div>
      <h1>Create Profile</h1>
      <form onSubmit={handleSubmit}>
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
        <input type="url" name="file" onChange={(e) => setImg(e.target.value)}/>
        <input type="date" name="fechaNacimiento" onChange={(e) => setFechaNacimiento(e.target.value)} />
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateProfileInfo;
