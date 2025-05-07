import about from './img/agenda.png'
const Agenda = () => {
    return ( 
      <div className='bg-black  py-20 px-0  md:max-lg:px-10 pb-0 md:pb-20 md:py-40 flex flex-col h-fit gap-70 mt-30 md:mt-0 ' id='Agenda'>
            <div className='flex justify-center items-center h-max relative border md:pt-10 '>
                <div className="w-[630px] h-[629px] flex-shrink-0 rounded-[630px] border-[3px] border-dashed border-[#0D0F2B] opacity-90 bg-[#060714] flex justify-center items-center">
                    <div className="w-[818px] h-[817px] flex-shrink-0 rounded-[818px] border-[3px] border-solid border-[#0D0F2B] opacity-80 bg-[#060714] flex justify-center items-center">
                        <div className="w-[990px] h-[989px] flex-shrink-0 rounded-[990px] border-[3px] border-dashed border-[#0D0F2B] opacity-70 bg-[#060714] flex justify-center items-center">
                            <div class="w-[1144px] h-[1143px] flex-shrink-0 rounded-[1144px] border-[3px] border-solid border-[#0D0F2B] opacity-60 bg-[#060714]">
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute grid md:grid-cols-2 md:grid-rows-auto w-[90%] p-1 justify-items-center mx-auto  gap-x-10 gap-y-10 p-2 text-white inset-x-0 -top-50 md:top-30 '>
                            <div className='flex flex-col gap-y-5 h-max justify-self-start ' >
                                <span className='flex gap-x-3'>
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <g opacity="0.9">
                                                <g opacity="0.9">
                                                <path d="M4.11768 16.7821H16.7828V4.11694" stroke="#7D1AFF" stroke-width="3.48327" stroke-miterlimit="20" stroke-linecap="square"/>
                                                </g>
                                                <g opacity="0.9">
                                                <path d="M4.11768 4.11694L15.5167 15.5159" stroke="#7D1AFF" stroke-width="3.48327" stroke-miterlimit="20" stroke-linecap="square"/>
                                                </g>
                                            </g>
                                            </svg>
                                    </div>
                                    <h3 className='flex justify-center font-link font-semibold uppercase tracking-wide hidden md:flex'>My pdm tutor</h3>
                                </span>
                                <h3 className='Headings w-50 md:w-max'>My Agenda</h3>
                            </div>
                            <p className='flex md:max-w-160 font-link text-md leading-6 font-medium h-max md:row-start-2 md:text-sm text-justify md:text-left '>
                                I am an experienced tutor with strong foundation in Python programming, data analysis and machine learning. I specialize in guiding students and professionals through complex topics like data manipulation, visualization and machine learning development. My hands-on approach and tailored lessons help master practical skills in tools such as pandas, Numpy, Matplotlib and Scikit-learn.
                            </p>
                            <div className=' w-fit md:w-100 h-full rounded-4xl md:row-span-3 h-max'>
                                <img src={about} alt="" className='rounded-4xl h-auto w-fit '/>
                            </div>
                            <div className='flex gap-x-4 items-center col-start-1 md:row-start-3 md:justify-self-start w-full justify-evenly md:justify-center md:justify-start'>
                                <a href="/" className='flex items-center px-4 py-4 w-max rounded-2xl bg-white text-black justify-center tracking-wider font-medium shadow-[inset_-4px_-4px_4px_rgba(0,0,0,0.1),_inset_4px_4px_4px_rgba(255,255,255,0.1)]'>Get started</a>
                                <a href="/" className='flex items-center px-4 py-4 w-max  rounded-2xl text-link border border-link justify-center'>Learn more</a>
                            </div>
                            
                </div>
            </div>

            <div className='flex justify-center items-center h-max relative inset-x-0 top-20 md:-top-0 '>
                <div className="w-[630px] h-[629px] flex-shrink-0 rounded-[630px] border-[3px] border-dashed border-[#0D0F2B] opacity-90 bg-[#060714] flex justify-center items-center hidden md:flex">
                    <div className="w-[818px] h-[817px] flex-shrink-0 rounded-[818px] border-[3px] border-solid border-[#0D0F2B] opacity-80 bg-[#060714] flex justify-center items-center hidden md:flex">
                        <div className="w-[990px] h-[989px] flex-shrink-0 rounded-[990px] border-[3px] border-dashed border-[#0D0F2B] opacity-70 bg-[#060714] flex justify-center items-center hidden md:flex">
                            <div class="w-[1144px] h-[1143px] flex-shrink-0 rounded-[1144px] border-[3px] border-solid border-[#0D0F2B] opacity-60 bg-[#060714] hidden md:flex">
                            </div>
                        </div>
                    </div>
            </div>
                    <div className='grid grid-rows-auto grid-cols-auto w-[90%] h-fit text-white relative md:absolute p-1 -top-40 md:top-10 gap-10 md:gap-x-10 justify-center inset-x-0 place-self-center'>
                            <div className=' '>
                                <h3 className='w-fit font-link font-bold text-5xl/20 md:w-[95%] md:max-lg:text-5xl lg:text-6xl/20'>
                                Unlock your PDM mastery <span className = "hidden md:inline-flex"> - </span> join the waitlist today!
                                </h3>
                            </div>
                            <div className='flex md:flex-col gap-y-2 row-start-4 w-50 justify-between md:col-start-2 md:row-start-1  md:w-fit'>
                                <a href="https://web.facebook.com/mypdmtutor">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                                    <path d="M25.0059 50.1495C38.8097 50.1495 50 39.0236 50 25.2991C50 11.5746 38.8097 0.44873 25.0059 0.44873C11.202 0.44873 0.0117188 11.5746 0.0117188 25.2991C0.0117188 39.0236 11.202 50.1495 25.0059 50.1495Z" fill="#D9D9D9"/>
                                    <path d="M23.7062 32.6462L23.6858 26.387H21.0078V23.7044H23.6858V21.9161C23.6858 19.5025 25.1778 18.3394 27.3272 18.3394C28.3568 18.3394 29.2417 18.4161 29.4995 18.4505V20.9728L28.0088 20.9735C26.8399 20.9735 26.6135 21.5299 26.6135 22.3464V23.7044H29.9343L29.0416 26.387H26.6135V32.6462H23.7062Z" fill="#2A27C9"/>
                                </svg>
                                </a>
                                <a href ="https://www.instagram.com/mypdmtutor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                                    <path d="M25.0059 50.5001C38.8097 50.5001 50 39.3742 50 25.6497C50 11.9252 38.8097 0.799316 25.0059 0.799316C11.202 0.799316 0.0117188 11.9252 0.0117188 25.6497C0.0117188 39.3742 11.202 50.5001 25.0059 50.5001Z" fill="#D9D9D9"/>
                                    </svg>
                                </a>
                               <a href ="https://x.com/mypdmtutor"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                                    <path d="M25.0059 50.5509C38.8097 50.5509 50 39.425 50 25.7005C50 11.976 38.8097 0.850098 25.0059 0.850098C11.202 0.850098 0.0117188 11.976 0.0117188 25.7005C0.0117188 39.425 11.202 50.5509 25.0059 50.5509Z" fill="#D9D9D9"/>
                                    <path d="M32.2902 21.0781C31.7546 21.3463 31.219 21.4358 30.5942 21.5252C31.219 21.1675 31.6653 20.631 31.8439 19.9157C31.3083 20.2733 30.6834 20.4522 29.9693 20.631C29.4337 20.0945 28.6303 19.7368 27.8269 19.7368C26.3094 19.7368 24.9705 21.0781 24.9705 22.6876C24.9705 22.9559 24.9705 23.1347 25.0597 23.3135C22.6496 23.2241 20.418 22.0617 18.9897 20.2733C18.7219 20.7204 18.6327 21.1675 18.6327 21.7934C18.6327 22.777 19.1683 23.6712 19.9716 24.2077C19.5253 24.2077 19.079 24.0289 18.6327 23.85C18.6327 25.2807 19.6146 26.4432 20.9536 26.7114C20.6858 26.8008 20.418 26.8008 20.1502 26.8008C19.9716 26.8008 19.7931 26.8008 19.6146 26.7114C19.9716 27.8739 21.0428 28.768 22.3818 28.768C21.3999 29.5728 20.1502 30.0199 18.7219 30.0199C18.4541 30.0199 18.2756 30.0199 18.0078 30.0199C19.3468 30.8247 20.8643 31.3612 22.4711 31.3612C27.8269 31.3612 30.7727 26.8903 30.7727 23.0453C30.7727 22.9559 30.7727 22.777 30.7727 22.6876C31.3975 22.2405 31.9331 21.704 32.2902 21.0781Z" fill="#2A27C9"/>
                                    </svg>
                               </a>
                            </div>
                            <form action="" className=' p-2 flex flex-col gap-5 row-start-2'>
                            <div className="flex flex-col  gap-0 pb-2 px-2.5 pt-2 border-b border-[#CACACA] flex-1">
                                <label htmlFor="" className='mx-2'>Your Name</label>
                                <input
                                    type="text"
                                    className="w-full outline-none bg-transparent "
                                    placeholder=""
                                />
                            </div>
                            <div className="flex flex-col mt-3  gap-0 pb-2 px-2.5 pt-2 border-b border-[#CACACA] flex-1">
                                <label htmlFor="" className='mx-2'>Email Address</label>
                                <input
                                    type='email'
                                    className="w-full outline-none bg-transparent "
                                    placeholder=""
                                />
                            </div>
                            <div className="flex flex-col  gap-0 pb-2 px-2.5 pt-2 border-b border-[#CACACA] flex-1">
                                <label htmlFor="" className='mx-2'>Phone Number</label>
                                <input
                                    type="Number"
                                    className="w-full outline-none bg-transparent "
                                    placeholder=""
                                />
                            </div>
                            <div className="flex flex-col  gap-0 pb-2 px-2.5 pt-2 border-b border-[#CACACA] flex-1">
                                <label htmlFor="" className='mx-2'>Message</label>
                                <input
                                    type="text"
                                    className="w-full outline-none bg-transparent h-10"
                                    placeholder=""
                                />
                            </div>
                            </form>
                            <button type="button" className='flex gap-x-0 bg-[#2A27C9] w-max items-center p-3 py-4 rounded-2xl row-start-3'>
                                <p className='input-text '>
                                Leave us a Message
                                </p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M5 12.5H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 5.5L19 12.5L12 19.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                    </div>
            </div>
      </div>
        
     );
}
 
export default Agenda;