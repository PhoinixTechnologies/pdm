import back from './img/BG1.png'
import Navbar from './Navbar';
import {motion} from 'framer-motion';


const Home = () => {
    return (  
      <div className=' max-w-full '>
        <div className=" h-max w-full bg-cover bg-no-repeat 
      bg-center" style={{backgroundImage:`url(${back}) `}} >
        <div className='bg-black/70 w-full h-full p-20 pt-50 flex flex-col items-center justify-start gap-y-5 box-border'>
        <Navbar/>
          <motion.h1
          initial={{scale: 0.1}}
            animate={{scale: 1.0}}
            transition={{ 
              duration: 0.8,       // Animation duration in seconds
              ease: "easeOut"}}
            className='text-white text-[35px] sm:max-md:text-4xl md:text-6xl/16 font-semibold pb-5 text-center font-link w-90 md:max-lg:w-fit lg:w-5xl'>Empowering Learners in Python,
          Data Analytics & Machine Learning</motion.h1>

          <p className='text-[#BDBCBC] w-70 md:w-120 p-2 text-center sm:max-md:w-100 sm:max-md:text-xl text-md/6 font-link'>As a dedicated tutor, I am passionate about helping
              students and professionals unlock their true potential <br />
              in Python programming, data science and machine learning.
            </p>
           <div className='flex relative mt-10'>
            <motion.button
            initial={{x:'-100vw'}}
            animate={{x:0}}
             type="button" className='flex gap-x-0 bg-[#3935FF] w-max items-center px-5 py-3 rounded-4xl mt-0 h-max self-center'>
                  <p className=' items-center text-xl font-semibold text-white  font-link'>
                  Join Waitlist 🔥
                  </p>
              </motion.button>
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="38" viewBox="0 0 42 38" fill="none" className=' self-center transform rotate-[-10.943deg]'>
              <g clip-path="url(#clip0_4545_153)">
                <path d="M40.9312 10.422C41.3814 12.0722 40.659 13.3427 39.8416 14.4267C38.6846 15.9196 37.3552 17.3047 35.9307 18.5034C29.2239 23.8535 21.476 25.8576 13.0029 24.9813C10.8495 24.7508 8.69343 24.2083 6.3042 23.7458C6.77468 25.9732 8.5658 27.6426 9.17698 29.9155C8.163 29.8466 7.70537 29.1796 7.31112 28.6369C5.70245 26.4041 4.10899 24.1243 2.57763 21.8128C1.85124 20.6957 1.9551 20.055 3.07295 19.4832C5.38594 18.2609 7.84605 17.8645 10.3912 18.3255C10.485 18.3559 10.5801 18.5423 10.7537 18.806C9.58407 20.6579 7.15672 19.3531 5.6562 20.7866C8.64889 22.5857 11.9266 23.0246 15.2018 23.1515C18.6328 23.2769 22.0144 23.0751 25.2958 22.0627C28.515 21.082 31.3705 19.4648 34.1612 17.5673C36.9837 15.7319 39.1622 13.3248 40.9312 10.422Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_4545_153">
                  <rect width="28.3944" height="34.4457" fill="white" transform="translate(41.5181 10.6121) rotate(107.943)"/>
                </clipPath>
              </defs>
            </svg>
            <motion.p
            initial={{x:'-100vw'}}
            animate={{x:0}}
            className='text-white font-light self-center text-center w-30 text-lg/5 transform rotate-[10.943deg] self-start absolute -top-7 -right-17 font-dog'>All research start from here</motion.p>

           </div>
         </div>
        
        </div>
       </div>
    );
}
 
export default Home;