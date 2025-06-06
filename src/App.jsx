import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './store/appStore';

import SignUp from './Components/Auth/SignUp';
import SignIn from './Components/Auth/SignIn';
import Home from './Pages/Home/Home';
import Body from './Components/Body/Body';
import Profile from './Pages/Profile/Profile';
import About from './Pages/About/About';
import AuthProvider from './Components/Auth/AuthProvider';
import PublicRoute from './Components/Auth/PublicRoute';
import PrivateRoute from './Components/Auth/PrivateRoute';
import SavePost from './Pages/SavePosts/SavePost';


function App() {
  return (
    <Provider store={appStore}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />}>
                <Route index element={<Body />} />
                <Route path="profile" element={<Profile />} />
                <Route path="savePosts" element={<SavePost />} />
                <Route path="about" element={<About />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
}

export default App;
