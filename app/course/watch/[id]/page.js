import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './watch-course.scss';
import DashboardHeader from '@/components/dashboard/dash.header';
import { faArrowLeft, faClock, faFolder, faPlayCircle } from '@fortawesome/free-solid-svg-icons';



export default function WatchCourse() {

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

          </div>
        </main>
      </div> 
  );
}


export const metadata = { title: 'PDM - Watch Courses' }