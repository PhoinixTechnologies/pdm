import { Link } from 'react-router-dom';
import logo from './img/My_PDM_Tutor_1-removebg-preview.png';

const VerifySuccess = () => {
    return (
        <div className='div-box'>
            <img src={logo} alt="My PDM Tutor Logo" className='w-10' />
            <h1>🎉 You’re in!</h1>
            <h2>✅ Email Verified Successfully</h2>

            <div className='Connect-div-contain'>
                <h3>Thanks for verifying your email. You’ll be among the first to know when we launch.</h3>

                <a href="https://join-mypdmtutor.netlify.app/" target="_blank" rel="noopener noreferrer">Go back to Homepage</a><br />
                <a href="https://www.instagram.com/mypdmtutor/?hl=en" target="_blank" rel="noopener noreferrer">Follow us on Instagram</a><br />
                <a href="https://x.com/mypdmtutor" target="_blank" rel="noopener noreferrer">Follow us on X</a>
            </div>
        </div>
    );
}

export default VerifySuccess;
