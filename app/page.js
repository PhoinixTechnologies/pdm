import Image from "next/image";

export default function Home() {
  return (
    <div className="pdm">
       {/* The First Section */}
         <section className="fs-sec" style="background-image: url('../static/images/bg.png')" id="home">
            <div className="sec-div">
                <div className="hd-line-tg"> Empowering Learners in Python, <br /> Data Analytics & Machine Learning </div>
                <br />
                <div className="sub-hd-line-tg"> As a dedicated tutor, I am passionate about helping 
                  <br /> students and professionals unlock their true potential 
                  <br /> in Python programming, data science and machine learning.
                </div>


                <div className="div-btn">
                    <div className="link-container">
                        <a href="{{ url_for('auth.signup') }}">Get Started 🔥</a>
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
                 <div classNameName="rectangle rec3">
                    <p>Data Analysis - Search&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x</p>
                 </div>
              </div>
         </section>
        {/* The first Section ends */}
    </div>
  );
}
