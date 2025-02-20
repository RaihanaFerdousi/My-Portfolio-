import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/Home/Home/Home';
import Skill from './Pages/Home/Skills/Skill';
import About from './Pages/Home/AboutMe/About';
import MyProjects from './Pages/Home/MyProjects/MyProjects';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: 'my-skills',
        element: <Skill/>,
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'my-projects',
        element: <MyProjects/>
      }
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
