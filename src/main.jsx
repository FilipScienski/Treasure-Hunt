import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import './index.css';
import './fonts.css'
import App from './App.jsx';
import Station_Synonyms from './Pages/Station_Synonyms.jsx';
import Station_flower from './Pages/Station_flower.jsx';
import Station3 from './Pages/Station_animals.jsx';
import Station4 from './Pages/Station_Song.jsx';
import Station_odd_words from './Pages/Station_odd_words.jsx';
import Station_Palindrom from './Pages/Station_Palindrom.jsx';
import Station_names from './Pages/Station_names.jsx';
import Station_poem from './Pages/Station_poem.jsx';
import Station_translate from './Pages/Station_translate.jsx';
import Station_idiom from './Pages/Station_idiom.jsx';
import Station_quotes from './Pages/Station_quotes.jsx';
import Station_twister from './Pages/Station_twister.jsx';
import Summary_page from './Pages/Summary_page.jsx';
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

let myObj = {task1: false, task2: false, task3: false, task4:false,task5: false, task6:false, task7:false, task8:false, task9:false, task10:false, task11:false,task12:false};

localStorage.setItem("noPages", "12");



Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    return JSON.parse(this.getItem(key));
}

if (!localStorage.getItem("tasksObj")) {
  localStorage.setObject("tasksObj", myObj);
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Station_Palindrom />,
    children: [
      { index: true, element: <Station_Palindrom no={1} setTask={localStorage.setObject.bind(localStorage)}  getTask={localStorage.getObject.bind(localStorage)}/> },
      { path: "1", element: <Station_Palindrom no={1}  setTask={localStorage.setObject.bind(localStorage)}  getTask={localStorage.getObject.bind(localStorage)}/> },
      { path: "2", element: <Station_odd_words no={2}  setTask={localStorage.setObject.bind(localStorage)}  getTask={localStorage.getObject.bind(localStorage)}/> },
      { path: "3", element: <Station3 no={3}  setTask={localStorage.setObject.bind(localStorage)}  getTask={localStorage.getObject.bind(localStorage)}/> },
      { path: "4", element: <Station4 no={4}  setTask={localStorage.setObject.bind(localStorage)}  getTask={localStorage.getObject.bind(localStorage)}/> },
      {path: "5", element: <Station_Synonyms no={5}  setTask={localStorage.setObject.bind(localStorage)}  getTask={localStorage.getObject.bind(localStorage)} />},
      {path: '6', element: <Station_flower no={6}   setTask={localStorage.setObject.bind(localStorage)}  getTask={localStorage.getObject.bind(localStorage)}/>},
      {path: '7', element:<Station_names no={7}   setTask={localStorage.setObject.bind(localStorage)}  getTask={localStorage.getObject.bind(localStorage)}/>},
      {path: '8', element:<Station_poem no={8}   setTask={localStorage.setObject.bind(localStorage)}  getTask={localStorage.getObject.bind(localStorage)}/>},
      {path: '9', element:<Station_translate no={9}   setTask={localStorage.setObject.bind(localStorage)}  getTask={localStorage.getObject.bind(localStorage)}/>},
      {path: '10', element:<Station_idiom no={10}   setTask={localStorage.setObject.bind(localStorage)}  getTask={localStorage.getObject.bind(localStorage)}/>},
      {path: '11', element:<Station_quotes no={11}   setTask={localStorage.setObject.bind(localStorage)}  getTask={localStorage.getObject.bind(localStorage)}/>},
      {path: '12', element:<Station_twister no={12}   setTask={localStorage.setObject.bind(localStorage)}  getTask={localStorage.getObject.bind(localStorage)}/>},
      {path: '13', element:<Summary_page no={13}   setTask={localStorage.setObject.bind(localStorage)}  getTask={localStorage.getObject.bind(localStorage)}/>}


    ],
  },
], { basename: "/ang"} // to basename było problemem
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='h-screen w-screen overflow-hidden'>
    <RouterProvider router={router}/>
    </div>
  </StrictMode>,
)
