// Custom hook for checking authentication
import { useEffect, useState } from 'react';
import axios from 'axios';

const useAuthentication = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userObj, setuserObj] = useState(null);

  const checkAuthentication = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        // If there's no token, the user is not authenticated
        setAuthenticated(false);
        setLoading(false);
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
      // If the server responds with an error, the user is not authenticated
      console.error('Authentication failed:', error.response.data.message);
    } finally {
      // Set loading to false when the authentication check is complete
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuthentication();
  }, []); // Runs once when the component mounts ???????????????????? But why needed?????
  return { authenticated, loading, userObj };
};

export default useAuthentication;
