import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router";
import { router } from './router/router.jsx';
import ParticlesBackground from './component/ParticlesBackground.jsx';
import VantaBirds from './component/VantaBirds.jsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ParticlesBackground></ParticlesBackground> */}
    {/* <VantaBirds></VantaBirds> */}
    <Toaster position="top-right" reverseOrder={false} />
    <RouterProvider router={router} />
  </StrictMode>,
)
