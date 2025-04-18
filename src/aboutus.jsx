import about from './img/about.png'
const About = () => {
    return (
        <div className='flex border p-20 justify-around bg-black text-white'>
            <div className='border w-md h-max'>
                <div>
                    <span className='flex'>
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
                        <h3>Outline</h3>
                    </span>
                    <h3>About Us</h3>
                </div>
                <p>
                As a dedicated tutor, I am passionate about helping students and professionals unlock their true potential in Python programming, data science, and machine learning. With a hands-on, personalized approach, I strive to make complex concepts accessible and engaging for learners at all levels. My goal is to empower you with the knowledge and practical skills needed to thrive in the fast-growing fields of data analytics and AI. Whether you’re starting from scratch or looking to advance your expertise, I am here to guide you every step of the way, ensuring your learning journey is both fulfilling and impactful.
                </p>
                <div>
                    <a href="">Get started</a>
                    <a href="">Learn more</a>
                </div>
            </div>
            <div className='w-80 rounded-full'>
                <img src={about} alt="" className='rounded-4xl'/>
            </div>
        </div>
      );
}
 
export default About;