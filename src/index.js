import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FaunaTerancam from './content/FaunaTerancam';
import FloraTerancam from './content/FloraTerancam';
import FaunaEndemik from './content/FaunaEndemik';
import FloraEndemik from './content/FloraEndemik';
import SustainableLiving from './content/SustainableLiving';
import Quiz from './content/Quiz';
import OrangUtan from './binatang/OrangUtan';
import HarimauSumatra from './binatang/HarimauSumatra';
import BadakJawa from './binatang/BadakJawa';
import Komodo from './binatang/Komodo';
import BurungMaleo from './binatang/BurungMaleo';
import BurungCendrawasih from './binatang/BurungCendrawasih';
import BungaBangkai from './binatang/BungaBangkai';
import BungaPadma from './binatang/BungaPadma';
import BungaEdelweiss from './binatang/BungaEdelweiss';
import AnggrekHitam from './binatang/AnggrekHitam';
import KayuHitam from './binatang/KayuHitam';
import DaunPayung from './binatang/DaunPayung';

const router = createBrowserRouter([
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
    <RouterProvider router={router} />
  </React.StrictMode>
);

