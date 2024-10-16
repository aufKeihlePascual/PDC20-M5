import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import UserProfilePage from './Profile/UserProfilePage.jsx'
import MainEvent from './Events/MainEvent.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <UserProfilePage/> */}

    <MainEvent/>
  </StrictMode>
);
