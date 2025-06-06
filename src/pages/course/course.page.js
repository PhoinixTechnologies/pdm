import './course.styles.scss';
import courseOnePreview from '../../assets/images/course/Course Images1.png'
import courseTwoPreview from '../../assets/images/course/Image2.png'
import courseThreePreview from '../../assets/images/course/Image3.png'
import courseFourPreview from '../../assets/images/course/Image4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import DashboardHeader from '../../components/dashboard/dash.header';
import { useEffect } from 'react';
import SummaryndDatePicker from '../../components/summary/index.tsx';



export const Courses = ({ title }) => {

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <div className="pdm-course">

        <DashboardHeader />
      
        <section className='both'>
          <div className='main'>
            <div className='each'>
              <img src={courseOnePreview} alt='course icon preview logo' />

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
              <img src={courseTwoPreview} alt='course icon preview logo' />

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
              <img src={courseThreePreview} alt='course icon preview logo' />

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
              <img src={courseFourPreview} alt='course icon preview logo' />

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

          <SummaryndDatePicker />
        </section>
      </div> 
  );
}

