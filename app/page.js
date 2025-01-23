import Image from "next/image";
import Link from "next/link";
import about_course from '../public/assets/images/course_about.png';


export default function Home() {
  return (
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
                        <Link href={'#'}>Get Started 🔥</Link>
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
                  <g opacity="0.9"> <path d="M4.11749 16.7822H16.7827V4.117" stroke="#2A27C9" stroke-width="3.48327" stroke-miterlimit="20" stroke-linecap="square"/> </g>
                  <g opacity="0.9"> <path d="M4.11749 4.117L15.5165 15.516" stroke="#2A27C9" stroke-width="3.48327" stroke-miterlimit="20" stroke-linecap="square"/> </g>
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

              <div className="abt-img"> <Image src={about_course} alt="about course logo" /> </div>
            </div>

            <div className="abt-links">
              <Link href={'#'} className="get-started"> Get Started </Link>
              <Link href={'#learn-more'} className="learn-more"> Learn more </Link>
            </div>
          </div>
        </section>
      {/* Second Section ends */}

    </div>
  );
}
