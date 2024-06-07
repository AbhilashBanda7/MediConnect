import  'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Root from './Root';
import Home from './components/home/Home';
import Appointment from './components/appointment/Appointment'
import About from './components/about/About'
import Login from './components/login/Login'
import Register from './components/register/Register'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
function App() {
  
  let router=createBrowserRouter([
    {
      path:'',
      element:<Root></Root>,
      children:[
        {
          path:'',
          element:<Home></Home>
        },
        {
          path:"appointment",
          element:<Appointment></Appointment>
        },
        {
          path:"aboutus",
          element:<About></About>
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"register",
          element:<Register></Register>
        }
      ]
    }
  ])
  
  return (
    <div className="App">
      <RouterProvider router={router}/>
      <ToastContainer position='top-center'/>
    </div>
  );
}

export default App;
