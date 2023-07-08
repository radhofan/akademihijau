import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider, createHashRouter } from "react-router-dom";
import FaunaTerancam from './content/FaunaTerancam';
import FloraTerancam from './content/FloraTerancam';
import FaunaEndemik from './content/FaunaEndemik';
import FloraEndemik from './content/FloraEndemik';
import SustainableLiving from './content/SustainableLiving';
import Quiz from './content/Quiz';
import OrangUtan from './pages/OrangUtan';
import HarimauSumatra from './pages/HarimauSumatra';
import BadakJawa from './pages/BadakJawa';
import Komodo from './pages/Komodo';
import BurungMaleo from './pages/BurungMaleo';
import BurungCendrawasih from './pages/BurungCendrawasih';
import BungaBangkai from './pages/BungaBangkai';
import BungaPadma from './pages/BungaPadma';
import BungaEdelweiss from './pages/BungaEdelweiss';
import AnggrekHitam from './pages/AnggrekHitam';
import KayuHitam from './pages/KayuHitam';
import DaunPayung from './pages/DaunPayung';

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/faunaTerancam",
    element: <FaunaTerancam />,
  },
  {
    path: "/floraTerancam",
    element: <FloraTerancam />,
  },
  {
    path: "/faunaEndemik",
    element: <FaunaEndemik />,
  },
  {
    path: "/floraEndemik",
    element: <FloraEndemik />,
  },
  {
    path: "/sustainableLiving",
    element: <SustainableLiving />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },



  {
    path: "/OrangUtan",
    element: <OrangUtan/>,
  },
  {
    path: "/HarimauSumatra",
    element: <HarimauSumatra/>,
  },
  {
    path: "/BadakJawa",
    element: <BadakJawa/>,
  },
  {
    path: "/Komodo",
    element: <Komodo/>,
  },
  {
    path: "/BurungMaleo",
    element: <BurungMaleo/>,
  },
  {
    path: "/BurungCendrawasih",
    element: <BurungCendrawasih/>,
  },



  {
    path: "/BungaBangkai",
    element: <BungaBangkai/>,
  },
  {
    path: "/BungaPadma",
    element: <BungaPadma/>,
  },
  {
    path: "/BungaEdelweiss",
    element: <BungaEdelweiss/>,
  },

  {
    path: "/AnggrekHitam",
    element: <AnggrekHitam/>,
  },
  {
    path: "/KayuHitam",
    element: <KayuHitam/>,
  },
  {
    path: "/DaunPayung",
    element: <DaunPayung/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

