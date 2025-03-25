import about_course from '../../assets/images/course_about.png';
import pythonImage from '../../assets/images/py.png';
import dataAnalyst from '../../assets/images/da.png';
import machingLearning from '../../assets/images/ml.png';
import loginImage from '../../assets/images/login.png';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { useEffect } from 'react';




export const Home = ({ title }) => {

    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (<>
    <Header />
        <div className="pdm">
        {/* First Section */}
            <section className="fs-sec" id="home">
                <div className="sec-div">
                    <div className="hd-line-tg"> Empowering Learners in Python, <br /> Data Analytics & Machine Learning </div>
                    <br />
                    <div className="sub-hd-line-tg"> As a dedicated tutor, I am passionate about helping 
                    <br /> students and professionals unlock their true potential 
                    <br /> in Python programming, data science and machine learning.
                    </div>

                    <div className="div-btn">
                        <div className="link-container">
                            <a href={'register'}>Get Started 🔥</a>
                        </div>

                        {/* Arrow & tilted text  */}
                        <div className="arrow-container">
                            <div className="res">
                                <p> All research <br /> starts from here </p>
                            </div>
                            <div className="arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="38" viewBox="0 0 42 38" fill="none">
                                    <g clipPath="url(#clip0_1_68)">
                                    <path d="M40.9312 10.422C41.3813 12.0722 40.659 13.3427 39.8416 14.4267C38.6846 15.9196 37.3551 17.3047 35.9306 18.5034C29.2238 23.8535 21.476 25.8576 13.0029 24.9813C10.8494 24.7508 8.69337 24.2083 6.30414 23.7458C6.77462 25.9732 8.56574 27.6426 9.17692 29.9155C8.16293 29.8466 7.70531 29.1796 7.31106 28.6369C5.70239 26.4041 4.10893 24.1243 2.57757 21.8128C1.85118 20.6957 1.95504 20.055 3.07289 19.4832C5.38588 18.2609 7.84599 17.8645 10.3911 18.3255C10.4849 18.3559 10.58 18.5423 10.7537 18.806C9.58401 20.6579 7.15666 19.3531 5.65614 20.7866C8.64883 22.5857 11.9266 23.0246 15.2017 23.1515C18.6328 23.2769 22.0143 23.0751 25.2957 22.0627C28.515 21.082 31.3704 19.4648 34.1611 17.5673C36.9836 15.7319 39.1621 13.3248 40.9312 10.422Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_1_68">
                                        <rect width="28.3944" height="34.4457" fill="white" transform="translate(41.518 10.6121) rotate(107.943)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Course Rectangles */}
                {/* Course Dec  */}
                <div className="crse-overlap">
                    {/* first rectangle  */}
                    <div className="rectangle rec1">
                        <p> Python - Search&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x</p>
                    </div>

                    {/* second rectangle */}
                    <div className="rectangle rec2">
                        <p> Machine Learning - Search&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x</p>
                    </div>

                    {/* third rectangle  */}
                    <div className="rectangle rec3">
                        <p>Data Analysis - Search&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x</p>
                    </div>
                </div>
            </section>
        {/*Ffirst Section ends */}

        {/* Second Section */}
            <section className="seco-sec" id="about">
            <div className="sec-sec-div">
                <div className="hd-line-tgs">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g opacity="0.9">
                    <g opacity="0.9"> <path d="M4.11749 16.7822H16.7827V4.117" stroke="#2A27C9" strokeWidth="3.48327" strokeMiterlimit="20" strokeLinecap="square"/> </g>
                    <g opacity="0.9"> <path d="M4.11749 4.117L15.5165 15.516" stroke="#2A27C9" strokeWidth="3.48327" strokeMiterlimit="20" strokeLinecap="square"/> </g>
                    </g>
                </svg>
                <p> OUTLINE </p>
                </div>

                <div className="abt-txt"> <p>About Us</p> </div>

                <div className="sub-line-abt-txt">
                <p> As a dedicated tutor, I am passionate about helping students and professionals unlock 
                    <br /> their true potential in Python programming, data science, and machine learning. With a 
                    <br /> hands-on, personalized approach, I strive to make complex concepts accessible and 
                    <br /> engaging for learners at all levels. My goal is to empower you with the knowledge and 
                    <br /> practical skills needed to thrive in the fast-growing fields of data analytics and AI. 
                    <br /> Whether you’re starting from scratch or looking to advance your expertise, I am here to 
                    <br /> guide you every step of the way, ensuring your learning journey is both fulfilling and 
                    <br /> impactful.
                </p>

                <div className="abt-img"> <img src={about_course} alt="about course logo" /> </div>
                </div>

                <div className="abt-links">
                <a href={'register'} className="get-started"> Get Started </a>
                <a href={'about'} className="learn-more"> Learn more </a>
                </div>
            </div>
            </section>
        {/* Second Section ends */}

        {/* Third Section */}
            <section className="sec-three">
                <div className="course-div-sec">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g opacity="0.9">
                        <g opacity="0.9"> <path d="M4.11749 16.7821H16.7827V4.11694" stroke="#2A27C9" strokeWidth="3.48327" strokeMiterlimit="20" strokeLinecap="square"/> </g>
                        <g opacity="0.9"> <path d="M4.11749 4.11694L15.5165 15.5159" stroke="#2A27C9" strokeWidth="3.48327" strokeMiterlimit="20" strokeLinecap="square"/> </g>
                        </g>
                    </svg>

                    <div className="course-btn"> <p> Our Courses </p> </div>

                <div className="bx-container">
                    <div className="btn-bx" style={{ backgroundImage: `url('${pythonImage}')`, backgroundRepeat: 'no-repeat'}} width={100} height={100}>
                        <p> Python Programming </p>
                        <br />
                        <span> Key Python concepts include variables, control flow,  <br /> functions, data structures, object-oriented  <br /> programming, and error handling.</span>
                        <br />
                        <a href={'register'}> Get Started </a>
                    </div>

                    <div className="btn-bx" style={{ backgroundImage: `url('${dataAnalyst}')`, backgroundRepeat: 'no-repeat'}} width={100} height={100}>
                    <p> Data Analysis </p>
                    <br />
                    <span>Key Python concepts include variables, control flow,  <br /> functions, data structures, object-oriented  <br /> programming, and error handling.</span>
                    <br />
                    <a href={'register'}> Get Started </a>
                    </div>

                    <div className="btn-bx" style={{ backgroundImage: `url('${machingLearning}')`, backgroundRepeat: 'no-repeat'}} width={100} height={100}>
                    <p> Machine Learning </p> <br />
                    <span> Key Python concepts include variables, control flow,  <br /> functions, data structures, object-oriented  <br /> programming, and error handling.</span>
                    <br />
                    <a href={'register'}> Get Started </a>
                    </div>
                </div>

                </div>
            </section>
        {/* Third Section ends */}

        {/* Fourth Section */}
            <section className="agenda-section" id="agenda">
                <div className="my-agenda"> <div className="circles"> <div className="circle1"> <div className="circle2"> <div className="circle3"> </div> </div> </div> </div> </div>

                <div className="contain">
                    <div className="ag-sec-img">
                        <img src={loginImage} alt="login logo" width={100} height={100} />
                    </div>
        
                    <div className="text-container">
                    <div className="ag-hd-line">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g opacity="0.9">
                                <g opacity="0.9"> <path d="M4.11749 16.7821H16.7827V4.11694" stroke="#2A27C9" strokeWidth="3.48327" strokeMiterlimit="20" strokeLinecap="square"/> </g>
                                <g opacity="0.9"> <path d="M4.11749 4.11694L15.5165 15.5159" stroke="#2A27C9" strokeWidth="3.48327" strokeMiterlimit="20" strokeLinecap="square"/> </g>
                            </g>
                            </svg>
                        <p> MY PDM TUTOR </p>
                    </div>
        
                    <div className="ag-sub-line">
                        <p> My Agenda </p> <br />
                        <span> I am an experienced tutor with strong foundation in Python programming, data analysis 
                        <br /> and machine learning. I specialize in guiding students and professionals through complex 
                        <br /> topics like data manipulation, visualization and machine learning development. My  
                        <br /> hands-on approach and tailored lessons help master practical skills in tools such as  
                        <br /> pandas, Numpy, Matplotlib and Scikit-learn.
                        </span>
        
                        <br />
                        <div className="abt-links">
                        <a href={'register'} className="get-started"> Get Started </a>
                        <a href={'about'} className="learn-more"> Learn more </a>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        {/* Fourth Section ends */}

        {/* Fifth Section */}
            <section className="dup-sec" id="contactus">
                <div className="circles"> <div className="circle1"> <div className="circle2"> <div className="circle3"> </div> </div> 0 </div> </div>

                <div className="div-container">
                <div className="get-trh">
                    <div className="text-container-get"> 
                    <p> Get in touch with us. <br /> We &#39re here to assist you. </p> 
                    </div>

                    <div className="div-ics">
                    <div className="lks">
                        <a href={'#facebook'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                            <path d="M25.0059 50.1495C38.8097 50.1495 50 39.0236 50 25.2991C50 11.5746 38.8097 0.44873 25.0059 0.44873C11.202 0.44873 0.0117188 11.5746 0.0117188 25.2991C0.0117188 39.0236 11.202 50.1495 25.0059 50.1495Z" fill="#D9D9D9"/>
                            <path d="M23.7062 32.6462L23.6858 26.387H21.0078V23.7044H23.6858V21.9161C23.6858 19.5025 25.1778 18.3394 27.3272 18.3394C28.3568 18.3394 29.2417 18.4161 29.4995 18.4505V20.9728L28.0088 20.9735C26.8399 20.9735 26.6135 21.5299 26.6135 22.3464V23.7044H29.9343L29.0416 26.387H26.6135V32.6462H23.7062Z" fill="#2A27C9"/>
                        </svg>
                        </a>
                    </div>

                    <div className="lks">
                        <div className="insta">
                        <a href={'#instagram'} className="instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                            </svg>
                        </a>
                        </div>
                    </div>

                    <div className="lks">
                        <a href={'#X'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                            <path d="M25.0059 50.5511C38.8097 50.5511 50 39.4252 50 25.7007C50 11.9762 38.8097 0.850342 25.0059 0.850342C11.202 0.850342 0.0117188 11.9762 0.0117188 25.7007C0.0117188 39.4252 11.202 50.5511 25.0059 50.5511Z" fill="#D9D9D9"/>
                            <path d="M32.2902 21.0783C31.7546 21.3466 31.219 21.436 30.5942 21.5254C31.219 21.1677 31.6653 20.6312 31.8439 19.9159C31.3083 20.2736 30.6834 20.4524 29.9693 20.6312C29.4337 20.0947 28.6303 19.7371 27.8269 19.7371C26.3094 19.7371 24.9705 21.0783 24.9705 22.6879C24.9705 22.9561 24.9705 23.1349 25.0597 23.3138C22.6496 23.2244 20.418 22.0619 18.9897 20.2736C18.7219 20.7207 18.6327 21.1677 18.6327 21.7937C18.6327 22.7773 19.1683 23.6715 19.9716 24.208C19.5253 24.208 19.079 24.0291 18.6327 23.8503C18.6327 25.281 19.6146 26.4434 20.9536 26.7117C20.6858 26.8011 20.418 26.8011 20.1502 26.8011C19.9716 26.8011 19.7931 26.8011 19.6146 26.7117C19.9716 27.8741 21.0428 28.7683 22.3818 28.7683C21.3999 29.573 20.1502 30.0201 18.7219 30.0201C18.4541 30.0201 18.2756 30.0201 18.0078 30.0201C19.3468 30.8249 20.8643 31.3614 22.4711 31.3614C27.8269 31.3614 30.7727 26.8905 30.7727 23.0455C30.7727 22.9561 30.7727 22.7773 30.7727 22.6879C31.3975 22.2408 31.9331 21.7043 32.2902 21.0783Z" fill="#2A27C9"/>
                        </svg>
                        </a>
                    </div>

                    </div>
                </div>

                <br />
                <div className="input-area">
                    <form action="#" method="POST">
                    {/* <label for="Name"> Name: </label> */}
                    <input type="text" id="fullname" name="fname" placeholder="Your Name" />
                    <input type="email" id="email" name="email" placeholder="Email Address" />
                    <input type="number" id="phone" name="phone" placeholder="Phone Number[optional]" />
                    <textarea name="message" rows="5" cols="30" placeholder="Message"></textarea>
                    </form>
                </div>
                <div className="leave-a-message">
                    <a href="#leave-a-message"> Leave us a Message 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                    </svg>
                    </a>
                </div>
                </div>
            </section>
        {/* Fifth Section ends */}

        {/* Sixth Section */}
            <section className="six-sec" id="connect">
                <div className="connect">
                <div className="a-connect"> 
                    <a href="#connect"> Connect With Us Today </a>
                </div>

                <div className="sub-connect">
                    <div className="text-hd">
                    <p> We are always happy to assist you </p>
                    </div>

                    <div className="sub-text">
                    <p> Email Address <br />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
                        </svg>
                        <br /> mypdmtutor@gmail.com
                    </p>
                    <p> Assistance hours: <br /> Monday - Friday 6 am to <br /> 8pm EST </p>
                    </div>

                    <div className="sub-text2">
                    <p> Number <br />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
                        </svg>
                        <br /> +2348039867195 
                    </p>               
                        
                    <p>  Assitance hours <br /> Monday - Friday 6 am to  <br /> 8pm EST </p>
                    </div>

                    <div className="sub-text-sideline"> <p></p> </div>
                </div>
                </div>
            </section>
        {/* Sixth Section ends */}
        </div>
    <Footer />

  </>);
}

