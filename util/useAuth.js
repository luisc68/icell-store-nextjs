import { useEffect, useState } from 'react';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

// returns the current authenticated user
export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(pb.authStore.model);
  }, []);

  return user;
};

export const logout = () => {
  try{
    pb.authStore.clear();
  }
  catch(err){
    console.log(err)
  }
}
