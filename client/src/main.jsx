import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePage from './routes/homePage/homepage.jsx'
import CreatePage from './routes/createPage/createPage.jsx'
import AuthPage from './routes/authPage/authPage.jsx'
import PostPage from './routes/postPage/postPage.jsx'
import { Routes, Route, BrowserRouter } from "react-router";
import ProfilePage from './routes/profilePage/profilePage.jsx'
import SearchPage from './routes/searchPage/searchPage.jsx'
import MainLayout from './routes/layouts/mainLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/pin/:id" element={<PostPage />} />
          <Route path="/:username" element={<ProfilePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
        
        <Route path="/auth" element={<AuthPage />} />
        
      </Routes>
    </BrowserRouter>  
  </StrictMode>,
)
