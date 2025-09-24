import { Routes,Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import Layout from './components/Layout'
import AdminDashboard from './pages/AdminDashboard'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'


export default function App() {
  const {user} = useContext(AuthContext)
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Routes>
        <Route element={user?<Layout/>: <Navigate to={"/login"}/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/order' element={<Orders/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={user?<AdminDashboard/>: <Navigate to={"/login"}/>}/>
      </Routes>
     
    </div>
  )
}
