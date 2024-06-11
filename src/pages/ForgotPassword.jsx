import CustomInput from "../components/CustomInput"

const ForgotPassword = () => {
  return (
    <>
    <div className="py-5" style={{background:"radial-gradient(#ccc, #2b3642)", minHeight:'100vh'}} >
    <br />
    <br />
    <br />
    <br />
    <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4 ">
      <h3 className="text-center">Forgot Password</h3>
      <p className="text-center">Please Enter your register email to get reset password mail</p>
      <form action="">

      <CustomInput type="email" placeholder="Email Address" id="emial"></CustomInput>
      <button style={{background:'#0f1538'}} className="border-0 px-3 py-2 text-white fw-bold w-100 rounded fs-4" type="submit ">Send Link</button>
      </form>
    </div>
    </div>
    </>
  )
}

export default ForgotPassword