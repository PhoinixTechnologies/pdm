import about from './img/about.png'

const About = () => {
    return (
    <div className='flex bg-black flex-col w-full border items-center' id='about'>
         <div className='flex p-20 px-10 md:px-20 justify-around text-white items-center gap-x-10 w-fit '>
        <div className='grid md:grid-cols-2 md:grid-rows-auto w-full p-1 justify-items-center gap-x-10 gap-y-10'>
                        <div className='flex flex-col gap-y-5 h-max justify-self-start' >
                            <span className='flex gap-x-3 '>
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
                                <h3 className='flex justify-center font-link font-semibold uppercase tracking-wide hidden md:flex'>Outline</h3>
                            </span>
                            <h3 className='Headings'>About Us</h3>
                        </div>
                        <p className='flex md:max-w-160 font-link text-md leading-6 font-medium h-max md:row-start-2 md:text-sm text-justify md:text-left'>
                            As a dedicated tutor, I am passionate about helping students and professionals unlock their true potential in Python programming, data science, and machine learning. With a hands-on, personalized approach, I strive to make complex concepts accessible and engaging for learners at all levels. My goal is to empower you with the knowledge and practical skills needed to thrive in the fast-growing fields of data analytics and AI. Whether you’re starting from scratch or looking to advance your expertise, I am here to guide you every step of the way, ensuring your learning journey is both fulfilling and impactful.
                        </p>
                        <div className=' w-80 md:w-100 h-full rounded-4xl md:row-span-3 h-max'>
                                <img src={about} alt="" className='rounded-4xl h-auto w-full max-w-full'/>
                        </div>
                        <div className='flex gap-x-4 items-center col-start-1 md:row-start-3 md:justify-self-start w-full justify-evenly md:justify-center md:justify-start'>
                                <a href="/" className='flex items-center px-4 py-4 w-max  rounded-2xl bg-white text-black justify-center tracking-wide font-medium inset-shadow-sm inset-shadow-black-500'>Get started</a>
                                <a href="/" className='flex items-center px-4 py-4 w-max md:px-4 md:py-4 rounded-2xl text-link border border-link w-max justify-center'>Learn more</a>
                        </div>
                    </div>
           
        </div>
        <div className='text-white p-20 pt-0 md:px-20 px-10'>
        <div className= 'flex flex-col p-2 h-max gap-y-5 w-full'>
        <span className='flex flex-col gap-y-2 '>
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
            <h3 className='Headings '>Our Courses</h3>
        </span>
        
            <div className='h-full flex lg:flex-row lg:justify-between md:gap-x-10 w-full flex-col items-center justify-center gap-y-10 p-1'> 
                <div className='w-full sm:w-fit lg:w-[30%] flex flex-col'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="185" height="21" viewBox="0 0 185 21" fill="none">
                    <path d="M0 10C0 4.47715 4.47715 0 10 0H156.429C161.902 0 167.136 2.2433 170.911 6.2069L185 21H0V10Z" fill="#504E52"/>
                    </svg>
                    <div className="card-bg bg-[url('./img/Python.png')]  rounded-tr-4xl">
                        <div className="card-gradient bg-gradient-to-b from-top/100 via-mid/40 to-black  rounded-tr-4xl "></div>
                        <div className="card-content ">
                            <h1 className="text-2xl font-bold tracking-wider font-sora">Python Programming</h1>
                            <p className='pText'> Key Python concepts include variables, control flow, functions, data structures, object-oriented programming, and error handling.</p>
                            <a href="" className='getStartedButton'>Get Started</a>
                        </div>
                        
                    </div>
                </div>
                <div className='w-full  sm:w-fit  lg:w-[30%]  flex flex-col'>
                <svg xmlns="http://www.w3.org/2000/svg" width="185" height="21" viewBox="0 0 185 21" fill="none">
                <path d="M0 10C0 4.47715 4.47715 0 10 0H156.429C161.902 0 167.136 2.2433 170.911 6.2069L185 21H0V10Z" fill="#D0D0EC"/>
                </svg>
                <div className="card-bg   bg-[url('./img/ml.png')]  rounded-r-4xl rounded-bl-4xl">
                <div className="card-gradient bg-gradient-to-b from-top2/80 via-mid/30 to-black/70 rounded-r-4xl rounded-bl-4xl"></div>
                <div className="card-content">
                        <h1 className="text-2xl font-bold tracking-wider font-sora">Data Analytics</h1>
                        <p className='pText'> Key data analytics concepts include data collection, cleaning, exploratory analysis, visualization, statistical modeling, and deriving actionable insights.</p>
                        <a href="" className='getStartedButton'>Get Started</a>
                    </div>
                </div>
                </div>
                <div className='w-full sm:w-fit  lg:w-[30%] flex flex-col'>
                <svg xmlns="http://www.w3.org/2000/svg" width="185" height="21" viewBox="0 0 185 21" fill="none">
                <path d="M0 10C0 4.47715 4.47715 0 10 0H156.429C161.902 0 167.136 2.2433 170.911 6.2069L185 21H0V10Z" fill="#B5C0DC"/>
                </svg>
                <div className=" card-bg bg-[url('./img/DA.png')] rounded-r-4xl rounded-bl-4xl">
                <div className=" bg-gradient-to-b from-top3/90 via-mid/30 to-black/40 card-gradient  rounded-r-4xl rounded-bl-4xl "></div>
                <div className="card-content">
                        <h1 className="text-2xl font-bold tracking-wider font-sora">Machine Learning</h1>
                        <p className='pText'> Key machine learning concepts include data preprocessing, feature engineering, model selection, training, evaluation, and tuning for accurate predictions.</p>
                        <a href="" className='getStartedButton'>Get Started</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div> 
    </div>
       
      );
}
 
export default About;