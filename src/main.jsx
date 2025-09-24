import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import './index.css';
import './fonts.css'
import App from './App.jsx';
import Station1 from './Pages/Station1.jsx';
import Station2 from './Pages/Station2.jsx';
import Station3 from './Pages/Station3.jsx';
import Station4 from './Pages/Station4.jsx';
import Station5 from './Pages/Station5.jsx';
import Layout from './components/Layout.jsx';




/* const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/1',
    element: <Station1 />
  },
  {
    path: '/2',
    element: <Station2 />
  }
]);*/

//TODO: error page


localStorage.setItem("noPages", "5");


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: "1", element: <Station1 no={1} /> },
      { path: "2", element: <Station2 no={2}/> },
      { path: "3", element: <Station3 no={3}/> },
      { path: "4", element: <Station4 no={4}/> },
      { path: "5", element: <Station5 no={5}/> }
    ],
  },
] //, { basename: "/ang"} // to basename było problemem
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='h-screen w-screen overflow-hidden'>
    <RouterProvider router={router}/>
    </div>
  </StrictMode>,
)
