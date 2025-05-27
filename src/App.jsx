import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import SignUp from "./Components/Auth/SignUp";
import SignIn from "./Components/Auth/SignIn";
import Home from "./Pages/Home/HOme";


const approute = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <Home />, 
    children: [
     
    ],
  },
]);

function App() {
  return (
  
      <RouterProvider router={approute} />
   
  );
}

export default App;
