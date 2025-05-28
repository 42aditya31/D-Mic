import { RouterProvider, createBrowserRouter } from "react-router-dom";

// import { Provider } from "react-redux";
import SignUp from "./Components/Auth/SignUp";
import SignIn from "./Components/Auth/SignIn";
import Home from "./Pages/Home/HOme";
import { Provider } from "react-redux";
import appStore from "./store/appStore";


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
    <Provider store={appStore}>
      <RouterProvider router={approute} />
   </Provider>
  );
}

export default App;
