import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './course-overview.scss';
import DashboardHeader from '@/components/dashboard/dash.header';
import { faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import videoImg from '../../../public/assets/images/course/Course Images1.png'
import Link from 'next/link';
import creatorsImg from '../../../public/assets/images/eniola_icon.png'



export default function CourseOverview() {

  const stars = Array(5).fill('faStar').map((icon, index) => (
    <FontAwesomeIcon key={index} icon={faStar} />
  ));

  return (
      <div className="pdm">
        <DashboardHeader />
      
        <main className='course-overview'>
          <div className='left'>
            <div className='brief'>
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
            </div>

            <div className='therest'>

            </div>
          </div>

          <div className='right'>

          </div>
        </main>
      </div> 
  );
}


export const metadata = { title: 'PDM - Course Overview' }