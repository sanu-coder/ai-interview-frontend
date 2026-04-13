
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserData } from './redux/userSlice';
import InterviewPage from './pages/InterviewPage';
export const serverUrl = import.meta.env.VITE_BASE_URL ;
function App() {
  const dispatch = useDispatch();
  
  useEffect (() => {
    
    const getUser = async () => {
      try{
        const result = await axios.get(serverUrl + "/api/user/current-user",  { withCredentials : true});
        console.log(result.data);
        dispatch(setUserData(result.data));
      
      }catch(error){
        dispatch(setUserData(null))
      }
    }
    getUser();
  }, [dispatch])

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/interview' element={<InterviewPage/>}/>
    </Routes>
  )
}

export default App
