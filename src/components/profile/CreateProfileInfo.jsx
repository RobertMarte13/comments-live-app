// Custom Hooks
import useCreateProfileInfo from "./hooks/useCreateProfileInfo.js";
import imgLogo from "../../assets/logo.png";
import imgTutorial from "../../assets/recorte.mp4";
import "../../styles/updatePerfilInfo.css";

const CreateProfileInfo = ({ auth_id }) => {
  const {
    handleSubmit,
    setUsername,
    setImg,
    setBio,
    setFechaNacimiento,
    setFrontPage,
    setIsValidation
  } = useCreateProfileInfo(auth_id);

  return (
    <div className="box-config-profile">
      <form className="form-config-profile" onSubmit={handleSubmit}>
        <img
          src={imgLogo}
          alt="Logo de la pagina"
          width="100px"
          height="100px"
          style={{ borderRadius: "10%" }}
        />
        <br />
        <h2>Create Profile</h2>
        <br />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="Biografia">Biografia</label>
        <input
          type="text"
          name="Biografia"
          placeholder="Biografia"
          onChange={(event) => setBio(event.target.value)}
        />
        <label htmlFor="avatar">Avatar</label>
        <input
          type="url"
          name="avatar"
          onChange={(e) => setImg(e.target.value)}
          placeholder="https://Example_Imagen"
        />
        <label htmlFor="portada">Portada</label>
        <input
          type="url"
          name="portada"
          onChange={(e) => setFrontPage(e.target.value)}
          placeholder="https://Example_Portada"
        />
        <label htmlFor="fechaNacimiento">Fehca de nacimiento</label>
        <input
          type="date"
          name="fechaNacimiento"
          onChange={(e) => setFechaNacimiento(e.target.value)}
        />
        <label htmlFor="checkbox">¿Estas seguro que quieres cambiar tus datos?</label>
        <input onChange={(e) => setIsValidation(e.target.checked)} type="checkbox" name="checkbox" />
        <button>Create</button>
      </form>
      <br />
      <div>
        <h2>¿Como subo una imagen?</h2>
        <section>
          <article>
            <ol>
              <li>
                <p>
                  Debemos ir a google y buscar la imagen que queremos en el
                  apartado de imagenes.
                </p>
              </li>
              <li>
                <p>Seleccionamos la imagen que queremos.</p>
              </li>
              <li>
                <p>Damos click derecho ensima de ella.</p>
              </li>
              <li>
                <p>
                  Hacemos click donde dis, abrir imagen en una nueva pestaña.
                </p>
              </li>
              <li>
                <p>
                  Al abrirnos la pestaña lo que hacemos en copiar la dirección
                  de la url y pegarla en el campo correspondiente.
                </p>
              </li>
            </ol>
            <br />
            <h2>Video Tutorial</h2>
            <video src={imgTutorial} autoPlay loop muted></video>
          </article>
        </section>
      </div>
      <br />
      <br />
    </div>
  );
};

export default CreateProfileInfo;
