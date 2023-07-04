import { useState } from "react";
import { UpdateInfoUsers } from "../../services/services";

// eslint-disable-next-line react/prop-types
const UpdateProfile = ({ auth_id }) => {
  const [username, setUsername] = useState("");
  const [img, setImg] = useState("");
  const [bio, setBio] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log((auth_id, username, img.slice(12), bio, fechaNacimiento));
    UpdateInfoUsers(auth_id, username, img, bio, fechaNacimiento);
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
        <input
          type="url"
          name="file"
          onChange={(e) => setImg(e.target.value)}
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
