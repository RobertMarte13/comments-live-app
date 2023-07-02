import { Route, Routes } from "react-router-dom";

import NotFound from "./components/notfound/NotFound";
import ProfilePage from "./components/profile/ProfilePage";
import HomePage from "./components/home/HomePage";
// import Login from './components/auth/Login'
import "./App.css";
import ProtectedRouter from "./components/protectedRouter/ProtectedRouter";
import { useState } from "react";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [isValid, setIsValid] = useState(false)
  const [isValidation, setIsValidation] = useLocalStorage("isValidation", false);
  const [username, setUsername] = useLocalStorage("username", "");

  console.log(isValidation)

  function updateDate(props) {
    console.log(props)
    setUsername(props.user)
    setIsValidation(isValid)
  }
  
  function closedSession() {
    setUsername('')
    setIsValidation(false)
  }

  return (
    <div className="App">
      <header>
        <Navbar closedSession={closedSession} isValidation={isValidation} />
      </header>

      <Routes>
        <Route element={<ProtectedRouter isValidation={isValidation} redirect='/' />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
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
