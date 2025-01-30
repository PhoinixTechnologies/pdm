import './watch-course.scss';
import DashboardHeader from '@/components/dashboard/dash.header';



export default function WatchCourse() {

  return (
      <div className="pdm">
        <DashboardHeader />
      
        <main className='watch-courses'>
          <p> Watch Courses Section starts here </p>
        </main>
      </div> 
  );
}


export const metadata = { title: 'PDM - Watch Course' }