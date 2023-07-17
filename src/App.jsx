import { Route, Routes } from "react-router-dom";

// Componentes
import NotFound from "./components/notfound/NotFound";
import ProfilePage from "./components/profile/ProfilePage";
import HomePage from "./components/home/HomePage";
// import Login from './components/auth/Login'
import ProtectedRouter from "./components/protectedRouter/ProtectedRouter";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import CreateComments from "./components/createComments/CreateComments";
import SubComments from "./components/createComments/SubComments";
import CreateProfileInfo from "./components/profile/CreateProfileInfo";
import UpdateProfile from "./components/profile/UpdateProfile";
import NavbarMobile from "./components/navbar/NavbarMobile";

// Estilos
import "./App.css";
import "./styles/navbar.css";
import MenuHamburguer from "./components/svg/MenuHamburguer";
import ClosedSvg from "./components/svg/ClosedSvg";
import RankingsComments from "./components/home/RankingsComments";
import ChangePassword from "./components/auth/ChangePassword";
import useApp from "./hooks/useApp";
import { Toaster } from "react-hot-toast";
function App() {
  const {
    id,
    username,
    setIsValid,
    isValidation,
    imgUser,
    isActive,
    users_id,
    commentsTodo,
    updateDate,
    setIsActive,
    closedSession,
  } = useApp();

  return (
      <div className="App">
        <Toaster position="bottom-right" reverseOrder={false} />
        <header className="header-mobil">
          <NavbarMobile
            username={username}
            imgUser={imgUser}
            closedSession={closedSession}
            isValidation={isValidation}
            isActive={isActive}
          />
        </header>

        <button
          className="btn-hamburger"
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? <ClosedSvg /> : <MenuHamburguer />}
        </button>

        {/* Rutas con react router dom */}
        <Routes>
          <Route
            element={
              <ProtectedRouter isValidation={isValidation} redirect="/" />
            }
          >
            <Route
              path="/"
              element={<HomePage authId={id} usersId={users_id} />}
            />
            <Route
              path="/rankings_comments"
              element={<RankingsComments authId={id} usersId={users_id} />}
            />
            <Route
              path="/createComments"
              element={<CreateComments commentsTodo={commentsTodo} id={id} />}
            />
            <Route path="/sub_comments" element={<SubComments />} />
            <Route path="/profile" element={<ProfilePage auth_id={id} userId={users_id} />} />
            <Route
              path="/config_profile"
              element={<CreateProfileInfo auth_id={id} />}
            />
            <Route
              path="/config_profile_update"
              element={<UpdateProfile auth_id={id} />}
            />
            <Route path="*" element={<NotFound />} />
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
            path="/new_password"
            element={<ChangePassword isValidation={isValidation} />}
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
