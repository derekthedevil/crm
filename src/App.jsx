import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'
import ForgotPassword from './pages/ForgotPassword'
import MainLayout from './components/MainLayout'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
    <Router>
     <Routes>
       <Route path='/' element={<Login/>}></Route>
       <Route path='/reset-password' element={<ResetPassword/>}></Route>
       <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
       <Route path='/admin' element={<MainLayout/>}>
       <Route index element={<Dashboard/>}></Route>
       </Route>
     </Routes>
    </Router>
    </>
  )
}

export default App
