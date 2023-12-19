import Header from '../components/Header';
import Footer from '../components/Footer'
import Fetchitems from '../components/Fetchitems'
import { Outlet } from 'react-router-dom';
import { useSelector} from "react-redux";
import LoadingSpinner from '../components/LoadingSpinner'



function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  

  return (
    <>
    <Header/>
    <Fetchitems/>
    {fetchStatus.currentlyFetching ? <LoadingSpinner/>: <Outlet/>}
   
    <Footer/>
    
    </>
  )
}

export default App
