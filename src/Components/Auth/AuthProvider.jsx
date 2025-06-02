import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser, getToken } from '../../utils/authUtils';
import { addUserInfo, clearUserInfo } from '../../store/userSlice';


const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const init = async () => {
      const token = getToken();
      if (token) {
        const user = await fetchUser(token);
        user ? dispatch(addUserInfo(user)) : dispatch(clearUserInfo());
      }
    };
    init();
  }, [dispatch]);

  return children;
};

export default AuthProvider;
