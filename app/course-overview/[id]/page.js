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