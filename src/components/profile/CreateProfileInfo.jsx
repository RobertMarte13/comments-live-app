// Custom Hooks
import useCreateProfileInfo from "./hooks/useCreateProfileInfo.js";

import "../../styles/updatePerfilInfo.css";

const CreateProfileInfo = ({ auth_id }) => {
  const { handleSubmit, setUsername, setImg, setBio, setFechaNacimiento, setFrontPage } = useCreateProfileInfo(auth_id);

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
          type="url"
          name="file"
          onChange={(e) => setFrontPage(e.target.value)}
          placeholder="https://Example_Portada"
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
