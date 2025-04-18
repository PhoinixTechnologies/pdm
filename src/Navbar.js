import logo from './img/logo.png';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
        <h3>My PDM Tutor</h3>
      </div>
      <div className="links">
        <a href="/">About</a>
        <a href="/create">Agenda</a>
        <a href="">Connect with us</a>
      </div>
      <a href="" className="join">Join Waitlist</a>
    </nav>
  );
};

export default Navbar;
