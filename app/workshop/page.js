import './workshop.scss';
import DashboardHeader from '@/components/dashboard/dash.header';



export default function Workshop() {

  return (
      <div className="pdm-watch-courses">
        <DashboardHeader />
      
        <main>
          <p> Workshop Section starts here </p>
        </main>
      </div> 
  );
}


export const metadata = { title: 'PDM - WorkShop' }