import logo from './img/logo.png';
const Navbar = () => {
  return (
    <nav className="bg-black flex justify-between items-center py-3 px-10 ">
      <div className="text-white flex items-center gap-3 h-max text-lg font-semibold max-w-50">
        <img src={logo} alt="" className='w-12' />
        <h3 className='font-logo tracking-wide'>My PDM Tutor</h3>
      </div>
      <div className=" flex text-white gap-x-10 items-center justify-center font-normal font-link max-w-80">
        <a href="./aboutus.jsx">About</a>
        <a href="/create">Agenda</a>
        <a href="">Connect with us</a>
      </div>

     <a href="" className=" font- flex justify-center bg-white rounded-full px-6 py-3 max-w-40 items-center">Join Waitlist</a>
  
    </nav>
  );
};

export default Navbar;
