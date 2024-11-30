import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/UserSlice';
import { useNavigate } from 'react-router-dom';

// PrivateRoute to protect Browser route

function Body() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user,"body")
        const { uid, email , photoURL , displayName } = user;
        dispatch(addUser({ uid, email , photoURL , displayName }));
        navigate("/Browser");  // Redirect to Browser page
      } else {
        dispatch(removeUser());
        navigate("/");  // Redirect to Login page
      }
    });

    return () => unsubscribe(); // Clean up the listener
  }, [dispatch, navigate]);

  return (
    <div className='absolute inset-0'>
     <Outlet/>
    </div>
  );
}

export default Body;
