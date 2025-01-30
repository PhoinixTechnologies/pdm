import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './watch-course.scss';
import DashboardHeader from '@/components/dashboard/dash.header';
import { faArrowLeft, faClock, faFolder, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import avatarOne from '../../../../public/assets/images/course/watch/avatar_one.png';
import avatarTwo from '../../../../public/assets/images/course/watch/avatar_two.png';
import avatarThree from '../../../../public/assets/images/course/watch/avatar_three.png';
import avatarFour from '../../../../public/assets/images/course/watch/avatar_four.png';
import avatarFive from '../../../../public/assets/images/course/watch/avatar_five.png';



export default function WatchCourse() {

  const date = Date().split(" ").slice(1, 4).join(" ");

  return (
      <div className="pdm">
        <DashboardHeader />
      
        <main className='watch-courses'>
          <div className='top'>
            <button type='button'> <FontAwesomeIcon icon={faArrowLeft} /> </button>

            <div className='middle'>
              <div className='details'>
                <h5> Python Programming </h5>
                <div>
                  <p> <FontAwesomeIcon icon={faFolder} /> 6 Sections </p>
                  <p> <FontAwesomeIcon icon={faPlayCircle} /> 202 Lectures </p>
                  <p> <FontAwesomeIcon icon={faClock} /> 19h 37m </p>
                </div>
              </div>

              <div className='btns'>
                <button type='button'> Write A Review </button>
                <button type='button'> Next Lecture </button>
              </div>
            </div>
          </div>

          <div className='bottom'>
            <div className='video-title'>
              <iframe width="950" height="650" src="https://www.youtube.com/embed/F4Zu5ZZAG7I?si=jd9LC5lAry_AKo0Z" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

              <h3> 7 Ways to Make a Conversation With Anyone | Malavika Varadan </h3>

              <div className='statistics'> 
                <div className='left'>
                  <div className='icons'>
                    <Image src={avatarOne} alt='profile icon' width={100} height={100} />
                    <Image src={avatarTwo} alt='profile icon' width={100} height={100} />
                    <Image src={avatarThree} alt='profile icon' width={100} height={100} />
                    <Image src={avatarFour} alt='profile icon' width={100} height={100} />
                    <Image src={avatarFive} alt='profile icon' width={100} height={100} />
                  </div>
                  <div className='photos'>
                    <h6> 512 </h6>
                    <p> Students watching </p>
                  </div>
                </div>

                <div className='right'>
                  <p> Last updated: <b> {date} </b> </p>
                  <p> Comments: <b> 154 </b> </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div> 
  );
}


export const metadata = { title: 'PDM - Watch Courses' }