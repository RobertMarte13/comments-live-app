// Custom Hooks
import useUpdateProfile from "./hooks/useUpdateProfile";

import "../../styles/updatePerfilInfo.css";

const UpdateProfile = ({ auth_id }) => {
  const { handleSubmit, setUsername, setImg, setBio, setFechaNacimiento } = useUpdateProfile(auth_id);

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
