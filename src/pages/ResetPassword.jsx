import CustomInput from "../components/CustomInput"

const ResetPassword = () => {
  return (
    <>
    <div className="py-5" style={{background:'#0f1538', minHeight:'100vh'}} >
    <br />
    <br />
    <br />
    <br />
    <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4 ">
      <h3 className="text-center">Reset Password</h3>
      <p className="text-center">Please Enter your new password.</p>
      <form action="">

      <CustomInput type="password" placeholder="New Password" id="pass" ></CustomInput>
      <CustomInput type="password" placeholder="Confirm Password" id="confirmpass"></CustomInput>
      <button style={{background:'#0f1538'}} className="border-0 px-3 py-2 text-white fw-bold w-100 rounded fs-5" type="submit">Reset Password</button>
      </form>
    </div>
    </div>
    </>
  )
}

export default ResetPassword