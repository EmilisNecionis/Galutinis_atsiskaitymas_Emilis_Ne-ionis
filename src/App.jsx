import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
import './styles/reset.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ShopsPage from './pages/ShopsPage'
import AddShop from './pages/AddShop'
import Header from './components/layout/Header'
import Footer from './components/layout/footer'

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'/login'} element={<LoginPage/>}/>
        <Route path={'/register'} element={<RegisterPage/>}/>
        <Route path={'/shops'} element={<ShopsPage/>}/>
        <Route path={'/add'} element={<AddShop/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
