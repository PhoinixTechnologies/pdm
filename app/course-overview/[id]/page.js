import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './course-overview.scss';
import DashboardHeader from '@/components/dashboard/dash.header';
import { faAngleRight, faArrowRight, faCheckCircle, faClockFour, faFolderOpen, faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import videoImg from '../../../public/assets/images/course/Course Images1.png'
import Link from 'next/link';
import creatorsImg from '../../../public/assets/images/eniola_icon.png'
import ClientMenu from '@/components/courses/menu';


export default function CourseOverview() {

  const stars = Array(5).fill('faStar').map((icon, index) => (
    <FontAwesomeIcon key={index} icon={faStar} />
  ));

  return (
      <div className="pdm">
        <DashboardHeader />
      
        <main className='course-overview'>
          <div className='left'>
            <div className='all'>
              <div className='head'>
                <div className='upper'>
                  <ul>
                    <li> <Link href={'#'}> Home <FontAwesomeIcon icon={faAngleRight} /> </Link> </li>
                    <li> <Link href={'#'}> Learn Python Programming <FontAwesomeIcon icon={faAngleRight} /> </Link> </li>
                  </ul>
                  <h3> Learn Python Programming Masterclass </h3>
                </div>
                <div className='title'>
                  <div className='l'>
                    <Image src={creatorsImg} alt='course creator image' />
                    <div>
                      <p> Created by: </p>
                      <p> Eniola Somoye </p>
                    </div>
                  </div>
                  <div className='r'>
                    {stars}
                    <p> 4.8 </p>
                    <p> (451,444 Rating) </p>
                  </div>
                </div>
              </div>

              <div className='video'>
                <Image src={videoImg} alt='course play button'/>
              </div>  

              <div className='describe'>
                <h4> Description </h4>
                <p> This Python Programming course is designed to take you from a beginner to an advanced level of proficiency in Python. It covers fundamental concepts, intermediate programming techniques, and advanced topics for real-world applications. </p>
                <p style={{ margin: 'unset' }}> <b> Basic Section </b> </p>
                <p> Start with an introduction to Python, its installation, and configuration. Learn the fundamentals of programming, including variables, operators, expressions, and data types. You’ll also dive deep into Python’s data structures: strings, lists, tuples, sets, and dictionaries. </p>
                <p style={{ margin: 'unset' }}> <b> Intermediate Section </b> </p>
                <p> Explore control flow with if, for, and while statements, and master functions, modules, and file handling. You’ll learn to work with CSV, JSON, PDF, and Excel files, followed by an introduction to object-oriented programming (OOP) and creating classes. </p>
                <p style={{ margin: 'unset' }}> <b> Advanced Section </b> </p>
                <p> Delve into advanced Python topics such as web scraping, creating GUIs with Tkinter, using regular expressions, and network programming. You’ll also learn how to develop web apps using Flask, interact with MySQL databases, and build scalable applications. </p>
                <p> This course is ideal for anyone looking to gain a comprehensive understanding of Python, with practical tests and exercises at each stage to solidify your skills. </p>
              </div>

              <div className='what-you-learn'>
                <h4> What you will learn in this course (Beginner) </h4>
                <div className='mt-4'>
                  <p> <FontAwesomeIcon icon={faCheckCircle} /> Introduction to Python </p>
                  <p> <FontAwesomeIcon icon={faCheckCircle} /> Python Basics </p>
                  <p> <FontAwesomeIcon icon={faCheckCircle} /> Data Structure (Strings) </p>
                  <p> <FontAwesomeIcon icon={faCheckCircle} /> Data Structure (Lists) </p>
                  <p> <FontAwesomeIcon icon={faCheckCircle} /> Data Structure (Tuples) </p>
                  <p> <FontAwesomeIcon icon={faCheckCircle} /> Data Structure (Dictionaries) </p>
                </div>
              </div>

              <div className='what-you-learn'>
                <h4> What you will learn in this course (Intermediate) </h4>
                <div className='mt-4'>
                  <p> <FontAwesomeIcon icon={faCheckCircle} /> Program Flow (Control Flow Statements) </p>
                  <p> <FontAwesomeIcon icon={faCheckCircle} /> Functions & Modules </p>
                  <p> <FontAwesomeIcon icon={faCheckCircle} /> File Handling </p>
                  <p> <FontAwesomeIcon icon={faCheckCircle} /> CSV & JSON Files </p>
                  <p> <FontAwesomeIcon icon={faCheckCircle} /> Word, Pdf & Json Documents using Python </p>
                  <p> <FontAwesomeIcon icon={faCheckCircle} /> Handling Excel FIles using Python </p>
                  <p> <FontAwesomeIcon icon={faCheckCircle} /> Class and OOP </p>
                  <p> <FontAwesomeIcon icon={faCheckCircle} /> Web Scraping  </p>
                  <p> <FontAwesomeIcon icon={faCheckCircle} /> Writing GUIs in python </p>
                  <p> <FontAwesomeIcon icon={faCheckCircle} /> Regular Expression </p>
                  <p> <FontAwesomeIcon icon={faCheckCircle} /> Network Programming </p>
                  <p> <FontAwesomeIcon icon={faCheckCircle} /> Flask </p>
                  <p> <FontAwesomeIcon icon={faCheckCircle} /> My SQL Database in Python </p>
                </div>
              </div>

              <div className='who-the-course-is-for'>
                <h4> Who this course is for: </h4>
                <div>
                  <p> <FontAwesomeIcon icon={faArrowRight} /> Beginners: Individuals with no prior programming experience who want to learn Python from scratch. </p>
                  <p> <FontAwesomeIcon icon={faArrowRight} /> Intermediate Learners: Those with basic Python knowledge looking to deepen their understanding and tackle more complex topics. </p>
                  <p> <FontAwesomeIcon icon={faArrowRight} /> Aspiring Data Scientists: Anyone interested in data science and machine learning, as Python is the go-to language in these fields. </p>
                  <p> <FontAwesomeIcon icon={faArrowRight} /> Web Developers: Developers who want to build dynamic web applications using Python frameworks like Flask. </p>
                  <p> <FontAwesomeIcon icon={faArrowRight} /> IT Professionals: Individuals aiming to automate tasks, manage files, and perform network programming. </p>
                  <p> <FontAwesomeIcon icon={faArrowRight} /> Students & Hobbyists: Anyone curious about learning a versatile and powerful language for both career advancement and personal projects. </p>
                </div>
              </div>

              <div className='course-reqs'>
                <h4> Course requirements </h4>

                <ul>
                  <li> Basic Computer Literacy: Familiarity with using a computer, browsing the internet, and managing files. </li>
                  <li> Access to a Computer: A laptop or desktop where Python and an IDE (like VS Code or PyCharm) can be installed. </li>
                  <li> Internet Access: For downloading Python, the IDE, and additional packages or libraries as required. </li>
                  <li> No Prior Programming Knowledge: This course starts from the basics, so no prior coding experience is needed. A desire to learn and explore Python is essential! </li>
                </ul>
              </div>
            </div>

            <div className='curriculum'>
              <h4> Curriculum 
                <div> 
                  <span> <FontAwesomeIcon icon={faFolderOpen} /> 6 Sections </span> 
                  <span> <FontAwesomeIcon icon={faPlay} /> 202 lectures </span> 
                  <span> <FontAwesomeIcon icon={faClockFour} /> 19h 37m </span> 
                </div> 
              </h4>

              <ClientMenu />
            </div>
          </div>

          <div className='right'>

          </div>
        </main>
      </div> 
  );
}


export const metadata = { title: 'PDM - Course Overview' }