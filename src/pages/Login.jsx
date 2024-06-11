import { Link } from "react-router-dom"
import CustomInput from "../components/CustomInput"
import './Login.css'

const Login = () => {
  return (
    <>
    <div className="login py-5 " style={{background:"radial-gradient(#ccc, #2b3642)", minHeight:'100vh'}} >
    <br />
    <br />
    <br />
    <br />
    <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4 ">
      <h3 className="text-center">Login</h3>
      <p className="text-center">Login to your account to continue.</p>
      <form action="">

      <CustomInput type="email" placeholder="Email Address" id="emial"></CustomInput>
      <CustomInput type="password" placeholder="Password" id="pass"></CustomInput>
      <Link to='/admin' style={{background:'#0f1538'}} className="border-0 px-3 py-2 text-white fw-bold w-100 rounded text-decoration-none text-center fs-5" type="submit" >Login</Link>
      <div className="mt-3 text-end ">
      <Link to='/forgot-password' className="text-decoration-none fs-5" >Forgot Passowrd?</Link>
      </div>
      </form>
    </div>
    </div>
    </>
  )
}

export default Login