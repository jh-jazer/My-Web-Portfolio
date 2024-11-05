import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ContactsPage from './pages/ContactsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "AboutPage",
    element: <AboutPage/>,
  },

  {
    path: "ProjectsPage",
    element: <ProjectsPage/>,
  },

  {
    path: "ContactsPage",
    element: <ContactsPage/>,
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
