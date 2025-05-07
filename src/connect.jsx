
import Plogo from './img/Plogo.png'
const Connect = () => {
    return (
        <div className=' w-full bg-black pt-10 flex flex-col gap-y-5 h-max ' id='connect'>
             <button type="button" className='input-btn place-self-center'>
                <p className='input-text text-white'>
                    Connect with us Today
                </p>
            </button>
            <div className='flex w-[90%] mx-auto md:gap-x-5 gap-y-10 justify-center text-white h-max lg:px-20 py-0 md:py-10 pb-2 flex-col sm:flex-row md:items-center md:max-lg:px-0 sm:max-md:justify-evenly'>
                <div className='w-[50%] md:max-lg:pr-0 pr-10 font-link h-max p-0  md:max-lg:w-80'>
                    <p className='font-semibold text-6xl md:text-4xl/10 w-90 md:max-lg:w-fit'>
                        We are always  happy to assist you
                    </p>
                </div>
                <div className='flex flex-col md:flex-row gap-x-20 sm:max-lg:gap-x-6 p-2 font-logo md:w-[50%] w-100 text-xl md:text-sm gap-y-10'>
                    <span className='flex flex-col gap-y-3'>
                        <h1 className='input-text'>Email Address</h1>
                        <div className='border border-white w-5'> </div>
                        <h1 className='input-text tracking-widest'>mypdmtutor@gmail.com</h1>
                       <div className='text-sm'>
                       <p className='font-light'>Assistance hours:</p>
                       <p className='font-light w-40'>Monday - Friday 6am to  8pm EST</p>
                       </div>
                    </span>
                    <span className='flex flex-col gap-y-3'>
                        <h1 className='input-text'>Number</h1>
                        <div className='border border-white w-5'> </div>
                        <h1 className='input-text tracking-widest'>+234 803 986 7195</h1>
                       <div className='text-sm'>
                       <p className='font-light'>Assistance hours:</p>
                       <p className='font-light w-40'>Monday - Friday 6am to  8pm EST</p>
                       </div>
                    </span>
                </div>
            </div>
            <div className='flex w-full gap-x-6 gap-y-5 justify-center   text-white h-max  py-7  bg-[#2A27C9] items-center flex-col sm:flex-row'>
                <div className='w-[80%] sm:max-md:w-[45%] md:w-[50%]  font-link h-max p-2 gap-y-5 flex flex-col md:items-start items-center'>
                    <p className='font-semibold text-4xl/15 md:text-3xl/10 w-fit md:w-[100%]'>
                    Subscribe to our Newsletter
                    </p>
                    <p className='w-fit md:w-[100%] text-xl'>
                    Subscribe for Updates: Stay informed about the python programming, Data Analytics, Machine Learning by subscribing to our newsletter. 
                    </p>
                </div>
                <div className='flex p-2 font-logo w-[90%] sm:max-md:w-[40%] md:w-[50%] h-max items-center sm:max-md:flex-col sm:max-md:gap-y-'>
                   <input type="email" name="" id="" placeholder='Enter your email address' className='outline-none bg-white/10 pl-5 pr-10 py-5 rounded-l-2xl w-full sm:max-md:py-2 sm:max-md:px-2 sm:max-md:rounded-2xl' />
                   <button className=' px-5 py-5 bg-white text-[#2A27C9] rounded-r-2xl font-semibold shadow-lg shadow-black/10 cursor-pointer sm:max-md:py-3 sm:max-md:rounded-2xl'>Suscribe</button>
                </div>
            </div>
            <div className='flex w-full gap-x-10 justify-center text-white h-max p-20 py-10 items-center'>
               <div className='flex flex-col gap-y-10 font-link'>
                <div className='flex items-end gap-x-2'>
                    <img src={Plogo} alt="" className='w-10' />
                    <h1 className=' font-bold text-3xl sm:text-xl '>My PDM Tutor</h1>
                </div>
                <div className='text-sm font-light flex flex-col gap-y-5 md:gap-y-2'>
                    <p>Phone: <b> +234 803 986 7195</b></p>
                    <p>Email: <a href="mypdmtutor@gmail.com">mypdmtutor@gmail.com</a></p>
                </div>
                <div className='flex justify-between w-40'>
                    <a href="https://web.facebook.com/mypdmtutor"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" fill="white"/>
                    </svg></a>
                    <a href="https://x.com/mypdmtutor"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M23 2.9998C22.0424 3.67528 20.9821 4.19191 19.86 4.5298C19.2577 3.83731 18.4573 3.34649 17.567 3.12373C16.6767 2.90096 15.7395 2.957 14.8821 3.28426C14.0247 3.61151 13.2884 4.1942 12.773 4.95352C12.2575 5.71283 11.9877 6.61214 12 7.5298V8.5298C10.2426 8.57537 8.50127 8.18561 6.93101 7.39525C5.36074 6.60488 4.01032 5.43844 3 3.9998C3 3.9998 -1 12.9998 8 16.9998C5.94053 18.3978 3.48716 19.0987 1 18.9998C10 23.9998 21 18.9998 21 7.4998C20.9991 7.22126 20.9723 6.9434 20.92 6.6698C21.9406 5.6633 22.6608 4.39251 23 2.9998Z" fill="white"/>
                    </svg></a>
                    <a href="https://www.instagram.com/mypdmtutor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.0002 11.3698C16.1236 12.2021 15.9815 13.052 15.594 13.7988C15.2065 14.5456 14.5933 15.1512 13.8418 15.5295C13.0903 15.9077 12.2386 16.0394 11.408 15.9057C10.5773 15.7721 9.80996 15.3799 9.21503 14.785C8.62011 14.1901 8.22793 13.4227 8.09426 12.592C7.9606 11.7614 8.09226 10.9097 8.47052 10.1582C8.84878 9.40667 9.45438 8.79355 10.2012 8.40605C10.948 8.01856 11.7979 7.8764 12.6302 7.99981C13.4791 8.1257 14.265 8.52128 14.8719 9.12812C15.4787 9.73496 15.8743 10.5209 16.0002 11.3698Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.5 6.5H17.51" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></a>
                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" fill="white"/>
                    <path d="M6 9H2V21H6V9Z" fill="white"/>
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" fill="white"/>
                    </svg></a>
                </div>
               </div>
               <div className='sm:flex flex-col gap-y-5 place-self-start p-3 hidden'>
                    <h3 className='input-text'> Company</h3>
                    <ul className='font-light text-sm flex flex-col gap-y-2'>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Agenda</li>
                        <li>Connect with us</li>
                    </ul>
                
               </div>
               <div className='sm:flex flex-col gap-y-5 place-self-start p-3 hidden'>
                <h3 className='input-text'>Education</h3>
                <ul className='font-light text-sm flex flex-col gap-y-2'>
                    <li>Data Analytics</li>
                    <li>Python Programming</li>
                    <li>Machine Learning</li>
                </ul>
                
               </div>
            </div>

        </div>
      );
}
 
export default Connect;