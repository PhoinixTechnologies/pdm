import Image from 'next/image';
import './login.styles.scss';
import Link from 'next/link';
import logo_icon from '../../public/assets/icons/pdm.png';



export default function Login() {

  return (
    <div className="pdm-login">
      <div className="div form-container" id="container">
        <div className="dic header-div" id="header">
          <div className="logo">
            <Image src={logo_icon} alt="logo" />
              My PDM Tutor 
          </div>
          <div>
          <Link href={'#'} className="signin-header"> Sign up  </Link>
          </div>
        </div>

        <div className="box signup-box">
          <h2> Sign in </h2>
        
        <form className="form-group" id="form" method="POST" action="#">
          <div className="input phone-number-input">
            <label htmlFor="phone"> Phone number </label>
            <div className="sel">
              <select id="country-code" name="country-code">
                <option value="+1"> +1 (USA) </option>
                <option value="+44"> +44 (UK) </option>
                <option value="+91"> +91 (India) </option>
                <option value="+61"> +61 (Australia) </option>
                <option value="+81"> +81 (Japan) </option>
                <option value="+234"> +234 (Nigeria) </option>
              </select>
            <input name="phone" id="phone" className="form-control" type="tel" required />
            </div>
            <br />
            <span> We will send a message to confirm your number </span>

            <div className="input continue-button"> <button type='button' value="submit"> Continue </button> </div>

            <div id="horizontal-line"> <div className="line"> Or continue with </div> </div>

            <div className="signin-opt">
                <div id="emailopt">
                  <Link href={'#'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                      <path d="M20.4062 4H4.40625C3.30168 4 2.40625 4.89543 2.40625 6V18C2.40625 19.1046 3.30168 20 4.40625 20H20.4062C21.5108 20 22.4062 19.1046 22.4062 18V6C22.4062 4.89543 21.5108 4 20.4062 4Z" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22.4062 7L13.4362 12.7C13.1275 12.8934 12.7706 12.996 12.4062 12.996C12.0419 12.996 11.685 12.8934 11.3763 12.7L2.40625 7" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Sign in with email
                  </Link>
                </div>

                <div id="google-opt">
                  <Link href={'#'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                      <g clipPath="url(#clip0_686_2002)">
                        <path d="M12.9004 9.81821V14.4655H19.4904C19.201 15.9601 18.3326 17.2256 17.0302 18.0765L21.0043 21.0983C23.3197 19.0038 24.6555 15.9274 24.6555 12.2729C24.6555 11.422 24.5776 10.6037 24.4328 9.81834L12.9004 9.81821Z" fill="#4285F4"/>
                        <path d="M6.03814 14.2841L5.14185 14.9565L1.96924 17.3783C3.98409 21.2946 8.11367 24.0001 12.9003 24.0001C16.2064 24.0001 18.9781 22.931 21.0042 21.0983L17.0301 18.0765C15.9392 18.7965 14.5477 19.2329 12.9003 19.2329C9.71663 19.2329 7.01169 17.1274 6.04315 14.291L6.03814 14.2841Z" fill="#34A853"/>
                        <path d="M1.96922 6.62186C1.13438 8.23634 0.655762 10.0582 0.655762 12C0.655762 13.9418 1.13438 15.7637 1.96922 17.3781C1.96922 17.389 6.04352 14.2799 6.04352 14.2799C5.79862 13.5599 5.65387 12.7963 5.65387 11.9999C5.65387 11.2034 5.79862 10.4398 6.04352 9.71981L1.96922 6.62186Z" fill="#FBBC05"/>
                        <path d="M12.9006 4.7782C14.7039 4.7782 16.3069 5.3891 17.587 6.56731L21.0935 3.13097C18.9673 1.18917 16.2067 0 12.9006 0C8.11393 0 3.98409 2.69456 1.96924 6.62186L6.04342 9.72007C7.01183 6.88366 9.71688 4.7782 12.9006 4.7782Z" fill="#EA4335"/>
                      </g>
                      <defs> <clipPath id="clip0_686_2002"> <rect width="24" height="24" fill="white" transform="translate(0.65625)"/> </clipPath> </defs>
                    </svg>
                    Sign in with Google
                  </Link>
                </div>
  
                <div id="apple-opt">
                  <Link href={'#'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                      <g clipPath="url(#clip0_686_2010)"> 
                        <path d="M12.6938 5.80664C14.2293 5.80664 15.5764 5.28904 16.7349 4.25384C17.8935 3.21863 18.4728 2.01486 18.4728 0.642543C18.4728 0.491823 18.459 0.277642 18.4314 0C18.2291 0.0237979 18.0774 0.0436295 17.9763 0.0594947C16.5602 0.234013 15.3143 0.832926 14.2385 1.85621C13.1627 2.87952 12.6248 3.97422 12.6248 5.14032C12.6248 5.27515 12.6478 5.49729 12.6938 5.80664ZM18.1969 24C19.2911 24 20.5003 23.3535 21.8244 22.0605C23.1485 20.7675 24.1599 19.2484 24.8587 17.5032C22.2565 16.3451 20.9554 14.6832 20.9554 12.5176C20.9554 10.709 22.0082 9.16214 24.1139 7.87705C22.6519 6.29846 20.721 5.50916 18.3211 5.50916C17.3096 5.50916 16.3856 5.64005 15.5488 5.90183L15.0247 6.06841L14.3213 6.30639C13.8615 6.45711 13.4432 6.5325 13.0662 6.5325C12.7719 6.5325 12.3857 6.44521 11.9076 6.27069L11.3697 6.08031L10.8594 5.90183C10.1146 5.63212 9.31462 5.49726 8.4595 5.49726C6.16995 5.49726 4.33097 6.1636 2.94252 7.49629C1.55407 8.82894 0.859863 10.586 0.859863 12.7675C0.859863 15.8374 1.97244 18.6733 4.19763 21.2752C5.7424 23.0917 7.15382 24 8.4319 24C8.97442 24 9.51232 23.9088 10.0456 23.7263L10.7215 23.4883L11.2594 23.3218C12.0133 23.0917 12.7076 22.9767 13.342 22.9767C14.0132 22.9767 14.7856 23.1235 15.6592 23.417L16.0867 23.5597C16.9786 23.8532 17.682 24 18.1969 24Z" fill="black"/> </g>
                        <defs> <clipPath id="clip0_686_2010"> <rect width="24" height="24" fill="white" transform="translate(0.859375)"/> </clipPath> </defs>
                    </svg>
                    Sign in with Apple
                  </Link>
                </div>
            </div>
          </div>    
        </form>
        </div>
    </div>
    </div> 
  );
}
