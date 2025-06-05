import forgot_pw_img from '../img/forgot_pw_img';
import logo from '../img/My_PDM_Tutor_1-removebg-preview.png';
// import 'bootstrap-icons/font/bootstrap-icons.css';


const forgotPassword = () => {
    return (
        <div className='div-forgot-password'>
            <div className='div-contain'>
                <div className='imgge'>
                <img src={logo} alt="" className='w-10'/>
                <h1 className='font-bold font-logo text-xl'>Forgot Password?</h1>
            </div>
            <div className='think-icon'>
                <img src={forgot_pw_img} alt="" className='w-9'/>
            </div>
            </div>

            <div className='text-container'>
                <h4>All good. Enter your account's email address and we'll send you a link to reset your password</h4>
            </div>

            <div className='form-control'>
                <form className='form-gr'>
                    <input type='email' name='email' id='email' className='form-input' value={email} required />
                </form>
            </div>

            <div className="input resetbutton">
              <button type="button" onClick={() => submitReset()}>
                  {/* {responseState === RESPONSE_STATES.loading ? <Loader /> : "Login"} */}
                </button>
            </div>

            <div className="login-link-back">
            <h2><a href={'login'}> Return to Login</a></h2>
            </div>
        </div>
    )
}