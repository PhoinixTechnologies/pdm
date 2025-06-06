import logo from './img/My_PDM_Tutor_1-removebg-preview.png';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';



const Navbar = () => {
  const Vid = () => {if (document.getElementById('main').classList.contains('hidden')){
    document.getElementById('main').classList.remove('hidden');
    document.getElementById('btn1').classList.add('hidden');
    document.getElementById('btn2').classList.remove('hidden');
  }
  else{
    document.getElementById('main').classList.add('hidden');
    document.getElementById('btn1').classList.remove('hidden');
    document.getElementById('btn2').classList.add('hidden');
  }
}
  
    
  return (
    <motion.nav
    initial ={{y:-70, opacity:0}}
    animate={{y:-0, opacity:1}}
    transition={{ 
    delay:1.5,
    duration: 0.5,
    type:'sprirng',
        // Animation duration in seconds
    ease: "easeOut"      // Easing function
  }}
    className="bg-black/60 flex flex-col md:flex-row  md:justify-between md:items-center py-3 px-10 absolute inset-x-0 top-0 h-max">
      <div className='flex justify-between  items-center'>
      <div className="text-white flex items-center gap-3 h-max text-lg font-semibold max-w-50">
          <LazyLoadImage src={logo} alt="" className='w-12' />
          <a href=""><h3 className='font-logo tracking-wide hidden md:block'>My PDM Tutor</h3></a>
        </div>
        <div className='flex' id='btn'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" id='btn1' onClick={Vid} className='md:hidden'>
          <rect width="24" height="24" fill="black" fillOpacity="0.32"/>
          <path d="M3 17H21V15H3V17Z" fill="white"/>
          <path d="M3 9H21V7H3V9Z" fill="white"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='hidden' id='btn2' onClick={Vid}>
          <rect width="24" height="24" fill="white" fillOpacity="0.32"/>
          <path d="M3 17H21V15H3V17Z" fill="black"/>
          <path d="M3 9H21V7H3V9Z" fill="black"/>
        </svg>
        </div>
     </div>
    <motion.div 
  
    className='flex flex-col md:flex-row items-end md:items-center gap-y-3 gap-x-3 md:min-w-[70%] md:justify-between hidden md:flex' id='main'>
     <div className=" flex text-white gap-x-10 items-end md:items-center md:justify-center font-normal font-link max-w-80 flex-col md:flex-row gap-y-3 " >
        <a href="#about">About</a>
        <a href="#Agenda">Agenda</a>
        <a href="#connect">Connect with us</a>
      </div>
     <Link to="/join" className=" font- flex justify-center bg-white rounded-full px-6 py-3 max-w-40 items-center">Join Waitlist</Link>
  
     </motion.div>
    </motion.nav>
  );
};

export default Navbar;
