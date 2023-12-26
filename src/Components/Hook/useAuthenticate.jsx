// Custom hook for checking authentication
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useAuthentication = ({navigateTo = null, dependencies=[]}={}) => {      // this is how a default object value is passed : if nothing passed, then default object is empty {}, then default values are applied (I dont know how)
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userObj, setuserObj] = useState(null);
  const navigate = useNavigate()
  const checkAuthentication = async () => {
    try { 
      console.log(dependencies)
      const token = localStorage.getItem('token');
      if (!token) {
        setAuthenticated(false);
        setLoading(false);
        // navigateTo && navigate(`/${navigateTo}`, { replace: true })
        return;
      }

      const response = await axios.get('http://localhost:3001/protected', {
        withCredentials: true,
        headers: {
          Authorization: token,
        },
      });
      console.log(response)
      // If the server responds with success, the user is authenticated
      setAuthenticated(true);
      // Also set the user ID
      setuserObj(response.data.user);
    } catch (error) {
      // navigateTo && navigate(`/${navigateTo}`, { replace: true })
      console.error('riziuzi: Authentication failed:', error.response.data.message);
    } finally {
      // Set loading to false when the authentication check is complete
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuthentication();
  }, dependencies); // Runs once when the component mounts if the dependency is empty ???????????????????? But why needed?????
  return { authenticated, loading, userObj };
};

export default useAuthentication;
