import { RouterProvider, createBrowserRouter } from "react-router-dom";

// import { Provider } from "react-redux";
import SignUp from "./Components/Auth/SignUp";
import SignIn from "./Components/Auth/SignIn";
import Home from "./Pages/Home/HOme";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import Body from "./Components/Body/Body";
import Profile from "./Pages/Profile/Profile";
import ProfileCard from "./Pages/Profile/ProfileCard";
import About from "./Pages/About/About";

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
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/about",
        element: <About/>
      },
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
