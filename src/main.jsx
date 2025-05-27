import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ContactsPage from './pages/ContactsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ResumePage from './pages/ResumePage.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",  // Fixed path to start with "/"
    element: <AboutPage />,
  },
  {
    path: "/projects",  // Fixed path to start with "/"
    element: <ProjectsPage />,
  },
  {
    path: "/contacts",  // Fixed path to start with "/"
    element: <ContactsPage />,
  },
  {
    path: "/resume",  // Fixed path to start with "/"
    element: <ResumePage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
