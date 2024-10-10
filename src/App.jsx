import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Notfound from './Components/Not Found/Notfound';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Layout from './Components/Layout/Layout';
import Team from './Components/Team/Team';


function App() {
  const route = createBrowserRouter( [

    {
      path: '', element: <Layout />, children: [
        {index:true, element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: 'team', element: <Team /> },
        { path: '*', element: <Notfound /> },
      ]
    },
  ] );
  return (
    <>
      <RouterProvider router={ route } />
    </>
  );
}

export default App
