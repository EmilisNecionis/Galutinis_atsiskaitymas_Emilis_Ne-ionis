import { Routes, Route, Navigate } from 'react-router-dom'
import './styles/App.css'
import './styles/reset.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ShopsPage from './pages/ShopsPage'
import AddShopPage from './pages/AddShopPage'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Feedback from './components/ui/feedback/Feedback'
import { useAuthCtx } from './store/AuthProvider'

function App() {
  const { isLoggedIn } = useAuthCtx();
  return (
    <div className='body'>
      <Header/>
        <Feedback/>
      <Routes>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'/login'} element={ isLoggedIn ? <Navigate to={'/'}/>:<LoginPage/>}/>
        <Route path={'/register'} element={isLoggedIn ? <Navigate to={'/'}/>:<RegisterPage/>}/>
        <Route path={'/shops'} element={<ShopsPage/>}/>
        <Route path={'/addshop'} element={<AddShopPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
