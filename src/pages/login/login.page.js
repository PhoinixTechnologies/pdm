import './login.styles.scss';
import logo_icon from '../../assets/icons/pdm.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RESPONSE_STATES } from '../../utils/constants';
import Swal from 'sweetalert2';
import { handleLoginOption } from '../../utils/utils';
import { Loader } from '../../components/loader/loader.component';
import { useAuth } from '../../hook/AuthProvider';
import data_image from '../../assets/images/data.png';
import machine_image from '../../assets/images/machine.png';
import python_image from '../../assets/images/python.png';


export const Login = ({ title }) => {
  const auth = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [responseState, setResponseState] = useState(RESPONSE_STATES.none);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckChnage = () => {
    };

    if (!email || !password) { 
        return setErrorMessage("All fields must be filled.");
    }

    if (!emailRegex.test(email)) {
        return setErrorMessage("Invalid Email entered.");
    }

    if (password.length < 8) {
        return setErrorMessage("Password cannot be less than 8 characters.");
    }

    try {
      setResponseState(RESPONSE_STATES.loading);
      setErrorMessage("");

      const responseState = await auth.loginAction({ email, password });
      setResponseState(responseState);

      if (responseState === RESPONSE_STATES.error) {
          setErrorMessage("Invalid Credentials");
      }

    } catch (error) {
        setResponseState(RESPONSE_STATES.none);
        const errorMessage = error.response ? error.response.data.message : error.message;
        
        Swal.fire({ icon: 'error', title: 'Error', text: errorMessage, });
    }
  };

    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



  return (
    <div className='login-grid'>
      {/* left gridded side */}
      <div className='login-left'>
        <div className='top'>
           <div className="logo">
            <img src={logo_icon} alt="logo" />
        </div>
        </div>
            <div className="pdm-login">
      <div className="div form-container" id="container">
        <div className='icon'>
                      <i class="bi bi-person-plus"></i>
                    </div>
        <div className="box signup-box withphone">
          <h2> Login to your account</h2>
          <h3>Welcome back, please enter your details</h3>
        
          <form className="form-group" id="form" method="POST" action="#">
            <div className="inputs">
              <div>
                <label htmlFor="email"> Email Address*</label>
                <input type="email" name="email" id="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
              </div>

              <div>
                <label htmlFor="pwd"> Password*</label>
                <input type="password" name="password" id="password1" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
              </div>
              </div>

              <div className='div-info'>
                <div className='checkbox'>
                  <label><input type='checkbox' checked={isChecked} onChange={handleCheckChnage}></input></label>
                  {isChecked}
                  &nbsp;
                  <h4>Keep me logged in</h4>
                </div>
                <div className='forgot-pw'>
                  <a href=''>Forgot Password ?</a>
                </div>
              </div>

                <div className="input loginbutton">
              <button type="button" onClick={() => submitLogin()}>
                  {responseState === RESPONSE_STATES.loading ? <Loader /> : "Login"}
                </button>
                </div>

              <div id="horizontal-line"> <div className="line"> OR </div>

              <div className="signup-acc">
             
               <div id="google-link">
                <Link href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <g clipPath="url(#clip0_686_2002)">
                      <path d="M12.9004 9.81821V14.4655H19.4904C19.201 15.9601 18.3326 17.2256 17.0302 18.0765L21.0043 21.0983C23.3197 19.0038 24.6555 15.9274 24.6555 12.2729C24.6555 11.422 24.5776 10.6037 24.4328 9.81834L12.9004 9.81821Z" fill="#4285F4"/>
                      <path d="M6.03814 14.2841L5.14185 14.9565L1.96924 17.3783C3.98409 21.2946 8.11367 24.0001 12.9003 24.0001C16.2064 24.0001 18.9781 22.931 21.0042 21.0983L17.0301 18.0765C15.9392 18.7965 14.5477 19.2329 12.9003 19.2329C9.71663 19.2329 7.01169 17.1274 6.04315 14.291L6.03814 14.2841Z" fill="#34A853"/>
                      <path d="M1.96922 6.62186C1.13438 8.23634 0.655762 10.0582 0.655762 12C0.655762 13.9418 1.13438 15.7637 1.96922 17.3781C1.96922 17.389 6.04352 14.2799 6.04352 14.2799C5.79862 13.5599 5.65387 12.7963 5.65387 11.9999C5.65387 11.2034 5.79862 10.4398 6.04352 9.71981L1.96922 6.62186Z" fill="#FBBC05"/>
                      <path d="M12.9006 4.7782C14.7039 4.7782 16.3069 5.3891 17.587 6.56731L21.0935 3.13097C18.9673 1.18917 16.2067 0 12.9006 0C8.11393 0 3.98409 2.69456 1.96924 6.62186L6.04342 9.72007C7.01183 6.88366 9.71688 4.7782 12.9006 4.7782Z" fill="#EA4335"/>
                    </g>
                    <defs> <clipPath id="clip0_686_2002"> <rect width="24" height="24" fill="white" transform="translate(0.65625)"/> </clipPath> </defs>
                  </svg>
                </Link>
                </div>

                <div id="facebook-link">
                <Link href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" fill="#0C82EE"/>
                  <path d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z" fill="white"/>
                  </svg>
                </Link>
              </div>

                <div id="apple-link">
                <Link href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M30 16C30 23.728 23.735 30 16 30C8.265 30 2 23.728 2 16C2 8.265 8.265 2 16 2C23.735 2 30 8.265 30 16Z" fill="#333333"/>
                  <path d="M22.5621 12.4574C22.4857 12.502 20.6671 13.4425 20.6671 15.5279C20.7528 17.9061 22.9621 18.7401 23 18.7401C22.9621 18.7847 22.6665 19.8763 21.7907 21.0205C21.0956 22.0062 20.3242 23 19.1528 23C18.0385 23 17.6385 22.3431 16.3528 22.3431C14.972 22.3431 14.5813 23 13.5242 23C12.3528 23 11.5242 21.953 10.7913 20.9766C9.8391 19.6986 9.02978 17.6931 9.00121 15.7675C8.98195 14.7471 9.19189 13.744 9.72481 12.8921C10.477 11.7026 11.8198 10.8952 13.2863 10.8686C14.4099 10.8333 15.4099 11.5875 16.0956 11.5875C16.7528 11.5875 17.9814 10.8686 19.3714 10.8686C19.9714 10.8692 21.5714 11.0376 22.5621 12.4574ZM16.0006 10.6649C15.8006 9.73303 16.3528 8.80119 16.8671 8.20677C17.5242 7.48792 18.5621 7 19.4571 7C19.5143 7.93185 19.1522 8.84575 18.505 9.51136C17.9242 10.2302 16.9242 10.7714 16.0006 10.6649Z" fill="white"/>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="signup-info">
            <h2> Not registered yet ? <a href={'register'}>Create an account</a></h2>
            </div>
            </div>
          </form>
        </div>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className='login-right'>
        <div className='images'>
          <div className='img'>
            <img src={python_image} alt="pyimg" className='imag'>
            </img>
              <div className='text-overlay'>
                <h2>PYTHON....</h2>
              </div>
          </div>
          <div className='img'>
            <img src={data_image} alt="dtimg" className='imag'>
            </img>
              <div className='text-overlay'>
                <h2>DATA ANALYSIS....</h2>
              </div>
          </div>
          <div className='img'>
            <img src={machine_image} alt="mlimg" className='imag'>
            </img>
              <div className='text-overlay'>
                <h2>MACHINE LEARNING....</h2>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
