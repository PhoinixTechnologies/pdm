import DashboardHeader from '../../components/dashboard/dash.header';
import './workshop.scss';
import { useEffect } from 'react';



export const Workshop = ({ title }) => {

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
      <div className="pdm-watch-courses">
        <DashboardHeader />
      
        <main>
          <p> Workshop Section starts here </p>
        </main>
      </div> 
  );
}

