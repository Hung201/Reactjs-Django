import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Homepage from './pages/Homepage'


function App() {

  return (
    <>
    
      <Header/>
      <Homepage />
      <Footer/>
      <Outlet />
     
       
    </>
  )
}

export default App
