
import { Route, Routes } from 'react-router-dom'

import NotFound from './components/notfound/NotFound'
import ProfilePage from './components/profile/ProfilePage'
import HomePage from './components/home/HomePage'
// import Login from './components/auth/Login'
import './App.css'

function App() {


    return (
      <div className="App">
        <nav>
        </nav>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

      </div>
    );
  
}

export default App
