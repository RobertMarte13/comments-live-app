import { Route, Routes } from "react-router-dom";
import { useState } from "react";

// Custom hooks
import { useLocalStorage } from "./hooks/useLocalStorage";

// import { getUserInfo } from "./services/services";

// Componentes
import NotFound from "./components/notfound/NotFound";
import ProfilePage from "./components/profile/ProfilePage";
import HomePage from "./components/home/HomePage";
// import Login from './components/auth/Login'
import ProtectedRouter from "./components/protectedRouter/ProtectedRouter";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Navbar from "./components/navbar/Navbar";
import CreateComments from "./components/createComments/CreateComments";
import SubComments from "./components/createComments/SubComments";
import CreateProfileInfo from "./components/profile/CreateProfileInfo";
import UpdateProfile from "./components/profile/UpdateProfile";
import NavbarMobile from "./components/navbar/NavbarMobile";

// Estilos
import "./App.css";
import "./styles/navbar.css";
import MenuHamburguer from "./components/svg/MenuHamburguer";

function App() {
  // * Estados
  const [isValid, setIsValid] = useState(true);
  const [id, setId] = useLocalStorage("id", null);
  const [isValidation, setIsValidation] = useLocalStorage(
    "isValidation",
    false
  );
  // eslint-disable-next-line no-unused-vars
  const [username, setUsername] = useLocalStorage("username", "");
  const [isActive, setIsActive] = useState(false);

  // * Esta funcion sirve para actualizar los comment y subComment de la aplicacion en la pagina principal.
  function updateDate(props) {
    // eslint-disable-next-line react/prop-types
    setUsername(props.user);
    // eslint-disable-next-line react/prop-types
    setId(props.pin);
    setIsValidation(isValid);
  }

  // * Esta funcion sirve para cerrar seccion en la pagina.
  function closedSession() {
    setUsername("");
    setIsValidation(false);
    setIsActive(false);
  }

  return (
    <div className="App">
      <header
        className="header header-mobil"
        style={
          isActive
            ? { display: "flex", opacity: 1, visibility: "visible" }
            : { display: "none" }
        }
      >
        <NavbarMobile
          closedSession={closedSession}
          isValidation={isValidation}
          isActive={isActive}
        />
      </header>

      <header id="header" className="header">
        <Navbar
          closedSession={closedSession}
          isValidation={isValidation}
          isActive={isActive}
        />
      </header>

      <button className="btn-hamburger" onClick={() => setIsActive(!isActive)}>
        <MenuHamburguer />
      </button>

      {/* Rutas con react router dom */}
      <Routes>
        <Route
          element={<ProtectedRouter isValidation={isValidation} redirect="/" />}
        >
          <Route path="/" element={<HomePage authId={id} />} />
          <Route path="/home" element={<HomePage authId={id} />} />
          <Route path="/createComments" element={<CreateComments id={id} />} />
          <Route path="/sub_comments" element={<SubComments />} />
          <Route path="/profile" element={<ProfilePage auth_id={id} />} />
          <Route
            path="/config_profile"
            element={<CreateProfileInfo auth_id={id} />}
          />
          <Route
            path="/config_profile_update"
            element={<UpdateProfile auth_id={id} />}
          />
        </Route>
        <Route
          path="/login"
          element={
            <Login
              setIsValid={setIsValid}
              updateDate={updateDate}
              isValidation={isValidation}
            />
          }
        />
        <Route
          path="/register"
          element={<Register isValidation={isValidation} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
