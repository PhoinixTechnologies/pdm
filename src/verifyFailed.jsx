import logo from './img/My_PDM_Tutor_1-removebg-preview.png';

const VerifyFailed = () => {
    return (
        <div className='div-box'>
            <img src={logo} alt="Logo" className='w-10' />
            <h2>❌ Email Verification Failed</h2>

            <div className='div-contain-text'>
               <p className="mt-4 text-lg">This link may be invalid or expired. Please try again.</p>
            </div>
        </div>
    );
}

export default VerifyFailed;
