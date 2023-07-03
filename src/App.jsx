import { Route, Routes } from "react-router-dom";

import NotFound from "./components/notfound/NotFound";
import ProfilePage from "./components/profile/ProfilePage";
import HomePage from "./components/home/HomePage";
// import Login from './components/auth/Login'
import ProtectedRouter from "./components/protectedRouter/ProtectedRouter";
import { useState } from "react";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Navbar from "./components/navbar/Navbar";
import CreateComments from "./components/createComments/CreateComments";
import SubComments from "./components/createComments/SubComments";

import "./App.css";
import "./styles/navbar.css";

function App() {
  const [isValid, setIsValid] = useState(true)
  const [id, setId] = useLocalStorage("id", null);
  const [isValidation, setIsValidation] = useLocalStorage("isValidation", false);
  // eslint-disable-next-line no-unused-vars
  const [username, setUsername] = useLocalStorage("username", "");

  function updateDate(props) {
    console.log(props)
    // eslint-disable-next-line react/prop-types
    setUsername(props.user)
    // eslint-disable-next-line react/prop-types
    setId(props.pin)
    setIsValidation(isValid)
  }
  
  function closedSession() {
    setUsername('')
    setIsValidation(false)
  }

  return (
    <div className="App">
      <header className="header">
        <Navbar closedSession={closedSession} isValidation={isValidation} />
      </header>

      <Routes>
        <Route element={<ProtectedRouter isValidation={isValidation} redirect='/' />}>
          <Route path="/" element={<HomePage authId={id} />} />
          <Route path="/home" element={<HomePage authId={id} />} />
          <Route path="/createComments" element={<CreateComments id={id} />} />
          <Route path="/sub_comments" element={<SubComments />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="/login" element={<Login setIsValid={setIsValid} updateDate={updateDate} isValidation={isValidation} />} />
        <Route path="/register" element={<Register isValidation={isValidation} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
