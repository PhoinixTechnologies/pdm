import './gift-course.styles.scss';
import DashboardHeader from '@/components/dashboard/dash.header';



export default function GiftCourse() {

  return (
      <div className="pdm">
        <DashboardHeader />
      
        <main className='gift-course'>
          <h3> Gift Course </h3>

          <section>
            <div className='left'>
              
            </div>

            <div className='right'>

            </div>
          </section>
        </main>
      </div> 
  );
}


export const metadata = { title: 'PDM - Gift Course' }