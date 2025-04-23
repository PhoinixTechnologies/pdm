import about from './img/agenda.png'
const Agenda = () => {
    return ( 
      <div className='bg-black  p-20 py-40 flex flex-col gap-70 '>
            <div className='flex justify-center items-center h-max relative'>
            <div className="w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] xl:w-[630px] xl:h-[629px] flex-shrink-0 rounded-[630px] border-[3px] border-dashed border-[#0D0F2B] opacity-90 bg-[#060714] flex justify-center items-center">
                <div className="w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] xl:w-[818px] xl:h-[817px] flex-shrink-0 rounded-[818px] border-[3px] border-solid border-[#0D0F2B] opacity-80 bg-[#060714] flex justify-center items-center">
                    <div className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] xl:w-[990px] xl:h-[989px] flex-shrink-0 rounded-[990px] border-[3px] border-dashed border-[#0D0F2B] opacity-70 bg-[#060714] flex justify-center items-center">
                        <div class="w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] md:w-[700px] md:h-[700px] lg:w-[950px] lg:h-[950px] xl:w-[1144px] xl:h-[1143px] flex-shrink-0 rounded-[1144px] border-[3px] border-solid border-[#0D0F2B] opacity-60 bg-[#060714]">
                        </div>
                    </div>
                </div>
            </div>
             <div className='flex justify-around text-white items-center gap-x-10 absolute flex-row-reverse '>
                        <div className='flex flex-col gap-y-6 h-max max-w-full '>
                            <div className='flex flex-col gap-y-5' >
                                <span className='flex gap-x-3'>
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g opacity="0.9">
                                        <g opacity="0.9">
                                        <path d="M4.11768 16.7821H16.7828V4.11694" stroke="#2A27C9" stroke-width="3.48327" stroke-miterlimit="20" stroke-linecap="square"/>
                                        </g>
                                        <g opacity="0.9">
                                        <path d="M4.11768 4.11694L15.5167 15.5159" stroke="#2A27C9" stroke-width="3.48327" stroke-miterlimit="20" stroke-linecap="square"/>
                                        </g>
                                    </g>
                                    </svg>
                                    </div>
                                    <h3 className='flex justify-center font-link font-semibold uppercase tracking-wide'>My pdm tutor</h3>
                                </span>
                                <h3 className='Headings'>My Agenda</h3>
                            </div>
                            <p className='max-w-160 font-link text-md leading-6 font-medium '>
                            I am an experienced tutor with strong foundation in Python programming, data analysis and machine learning. I specialize in guiding students and professionals through complex topics like data manipulation, visualization and machine learning development. My hands-on approach and tailored lessons help master practical skills in tools such as pandas, Numpy, Matplotlib and Scikit-learn.
                            </p>
                            <div className='flex gap-x-4  items-center'>
                                <a href="/" className='flex items-center px-1 py-3 rounded-2xl bg-white text-black justify-center tracking-wide w-30 font-medium shadow-[inset_-4px_-4px_4px_rgba(0,0,0,0.1),_inset_4px_4px_4px_rgba(255,255,255,0.1)]'>Get started</a>
                                <a href="/" className='flex items-center px-1 py-3 rounded-2xl text-link border border-link w-30 justify-center'>Learn more</a>
                            </div>
                        </div>
                        <div className='w-100 h-full rounded-4xl'>
                            <img src={about} alt="" className='rounded-4xl h-auto w-full max-w-full'/>
                        </div>
                    </div>
            </div>

            <div className='flex justify-center items-center h-max border relative inset-x-0 -top-0 '>
            <div className="w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] xl:w-[630px] xl:h-[629px] flex-shrink-0 rounded-[630px] border-[3px] border-dashed border-[#0D0F2B] opacity-90 bg-[#060714] flex justify-center items-center">
                <div className="w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] xl:w-[818px] xl:h-[817px] flex-shrink-0 rounded-[818px] border-[3px] border-solid border-[#0D0F2B] opacity-80 bg-[#060714] flex justify-center items-center">
                    <div className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] xl:w-[990px] xl:h-[989px] flex-shrink-0 rounded-[990px] border-[3px] border-dashed border-[#0D0F2B] opacity-70 bg-[#060714] flex justify-center items-center">
                        <div class="w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] md:w-[700px] md:h-[700px] lg:w-[950px] lg:h-[950px] xl:w-[1144px] xl:h-[1143px] flex-shrink-0 rounded-[1144px] border-[3px] border-solid border-[#0D0F2B] opacity-60 bg-[#060714]">
                        </div>
                    </div>
                </div>
            </div>
                    <div className='flex flex-col w-full h-auto text-white gap-x-10 absolute p-1 -top-10 gap-y-5'>
                        <div className='w-full p-2 flex gap-x-3  '> 
                            <div className=''>
                                <h3 className='w-full font-link font-bold text-6xl/20'>
                                Unlock your PDM mastery—join the waitlist today!
                                </h3>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                            <path d="M25.0059 50.1495C38.8097 50.1495 50 39.0236 50 25.2991C50 11.5746 38.8097 0.44873 25.0059 0.44873C11.202 0.44873 0.0117188 11.5746 0.0117188 25.2991C0.0117188 39.0236 11.202 50.1495 25.0059 50.1495Z" fill="#D9D9D9"/>
                            <path d="M23.7062 32.6462L23.6858 26.387H21.0078V23.7044H23.6858V21.9161C23.6858 19.5025 25.1778 18.3394 27.3272 18.3394C28.3568 18.3394 29.2417 18.4161 29.4995 18.4505V20.9728L28.0088 20.9735C26.8399 20.9735 26.6135 21.5299 26.6135 22.3464V23.7044H29.9343L29.0416 26.387H26.6135V32.6462H23.7062Z" fill="#2A27C9"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <path d="M25.0059 49.8502C38.8097 49.8502 50 38.7243 50 24.9998C50 11.2753 38.8097 0.149414 25.0059 0.149414C11.202 0.149414 0.0117188 11.2753 0.0117188 24.9998C0.0117188 38.7243 11.202 49.8502 25.0059 49.8502Z" fill="#D9D9D9"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                            <path d="M25.0059 50.5509C38.8097 50.5509 50 39.425 50 25.7005C50 11.976 38.8097 0.850098 25.0059 0.850098C11.202 0.850098 0.0117188 11.976 0.0117188 25.7005C0.0117188 39.425 11.202 50.5509 25.0059 50.5509Z" fill="#D9D9D9"/>
                            <path d="M32.2902 21.0781C31.7546 21.3463 31.219 21.4358 30.5942 21.5252C31.219 21.1675 31.6653 20.631 31.8439 19.9157C31.3083 20.2733 30.6834 20.4522 29.9693 20.631C29.4337 20.0945 28.6303 19.7368 27.8269 19.7368C26.3094 19.7368 24.9705 21.0781 24.9705 22.6876C24.9705 22.9559 24.9705 23.1347 25.0597 23.3135C22.6496 23.2241 20.418 22.0617 18.9897 20.2733C18.7219 20.7204 18.6327 21.1675 18.6327 21.7934C18.6327 22.777 19.1683 23.6712 19.9716 24.2077C19.5253 24.2077 19.079 24.0289 18.6327 23.85C18.6327 25.2807 19.6146 26.4432 20.9536 26.7114C20.6858 26.8008 20.418 26.8008 20.1502 26.8008C19.9716 26.8008 19.7931 26.8008 19.6146 26.7114C19.9716 27.8739 21.0428 28.768 22.3818 28.768C21.3999 29.5728 20.1502 30.0199 18.7219 30.0199C18.4541 30.0199 18.2756 30.0199 18.0078 30.0199C19.3468 30.8247 20.8643 31.3612 22.4711 31.3612C27.8269 31.3612 30.7727 26.8903 30.7727 23.0453C30.7727 22.9559 30.7727 22.777 30.7727 22.6876C31.3975 22.2405 31.9331 21.704 32.2902 21.0781Z" fill="#2A27C9"/>
                            </svg>
                            </div>
                        </div>
                        <form action="" className=' p-2 flex flex-col gap-5'>
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
                        <button type="button" className='input-btn '>
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