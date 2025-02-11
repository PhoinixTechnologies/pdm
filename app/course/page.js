import './course.styles.scss';
import Link from 'next/link';
import DashboardHeader from '@/components/dashboard/dash.header';
import Head from 'next/head';
import Image from 'next/image';
import courseOnePreview from '../../public/assets/images/course/Course Images1.png'
import courseTwoPreview from '../../public/assets/images/course/Image2.png'
import courseThreePreview from '../../public/assets/images/course/Image3.png'
import courseFourPreview from '../../public/assets/images/course/Image4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faListDots, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { faIntercom } from '@fortawesome/free-brands-svg-icons';



export default function Course() {

  return (
      <div className="pdm-course">
        <Head>
          <title> PDM - Courses </title>
        </Head>

        <DashboardHeader />
      
        <section className='both'>
          <div className='main'>
            <div className='each'>
              <Image src={courseOnePreview} alt='course icon preview logo' />

              <div className='title'>
                <div>
                  <p> IT & Software </p>
                  <p> #50,000 </p>
                </div>
                <h5> Learn Python Programming Masterclass </h5>
              </div>

              <div className='add-ons'>
                <p> <FontAwesomeIcon icon={faStar} /> 4.0 </p>
                <p> <FontAwesomeIcon icon={faUser} /> 211,434 <span> students </span> </p>
              </div>
            </div>
            
            <div className='each'>
              <Image src={courseTwoPreview} alt='course icon preview logo' />

              <div className='title'>
                <div>
                  <p> IT & Software </p>
                  <p> #50,000 </p>
                </div>
                <h5> Learn Machine Learning  Masterclass </h5>
              </div>

              <div className='add-ons'>
                <p> <FontAwesomeIcon icon={faStar} /> 4.6 </p>
                <p> <FontAwesomeIcon icon={faUser} /> 236,568 <span> students </span> </p>
              </div>
            </div>

            <div className='each'>
              <Image src={courseThreePreview} alt='course icon preview logo' />

              <div className='title'>
                <div>
                  <p> DESIGN </p>
                  <p> #50,000 </p>
                </div>
                <h5> Learn Data Analtics Masterclass </h5>
              </div>

              <div className='add-ons'>
                <p> <FontAwesomeIcon icon={faStar} /> 4.9 </p>
                <p> <FontAwesomeIcon icon={faUser} /> 197,637 <span> students </span> </p>
              </div>
            </div>

            <div className='each'>
              <Image src={courseFourPreview} alt='course icon preview logo' />

              <div className='title'>
                <div>
                  <p> TECH </p>
                  <p> FREE </p>
                </div>
                <h5> Things You have to know before entering Tech </h5>
              </div>

              <div className='add-ons'>
                <p> <FontAwesomeIcon icon={faStar} /> 4.9 </p>
                <p> <FontAwesomeIcon icon={faUser} /> 197,637 <span> students </span> </p>
              </div>
            </div>
          </div>

          <div className='summary'>
            <div className='dates'>

            </div>

            <div className='reviews'>
              <div className='each-item'>
                <div>
                  <p> <FontAwesomeIcon icon={faClock} /> 10:00 - 10:30 </p>
                  <button type='button'> <FontAwesomeIcon icon={faListDots} /> </button>
                </div>

                <h6> Works review </h6>
                <em> Data ANayltics </em>
              </div>
              
              <div className='each-item live'>
                <div>
                  <p> <FontAwesomeIcon icon={faClock} /> 11:00 - 12:30 </p>
                  <button type='button'> <FontAwesomeIcon icon={faListDots} /> </button>
                </div>

                <div>
                  <FontAwesomeIcon icon={faIntercom} />
                  <div>
                    <h6> Notes and messages </h6>
                    <em> Variables </em>
                  </div>
                </div>
              </div>

              <div className='each-item'>
                <div>
                  <p> <FontAwesomeIcon icon={faClock} /> 15:00 - 16:45 </p>
                  <button type='button'> <FontAwesomeIcon icon={faListDots} /> </button>
                </div>

                <h6> Teamwork </h6>
                <em> Python Fundamentals </em>
              </div>

              <div className='each-item'>
                <div>
                  <p> <FontAwesomeIcon icon={faClock} style={{ color: '#CDDC39' }} /> 17:00 - 17:30 </p>
                  <button type='button'> <FontAwesomeIcon icon={faListDots} /> </button>
                </div>

                <h6> Tutor </h6>
              </div>

            </div>
          </div>
        </section>
      </div> 
  );
}


export const metadata = { title: 'PDM - Courses' };