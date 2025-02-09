import './course.styles.scss';
import Link from 'next/link';
import DashboardHeader from '@/components/dashboard/dash.header';
import Head from 'next/head';
import Image from 'next/image';
import courseOnePreview from '../../public/assets/images/course/Course Images1.png'



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

              <div>
                <p> IT & Software <span> #50,000 </span> </p>
                <h5> Learn Python Programming Masterclass </h5>
              </div>
            </div>
          </div>

          <div className='summary'>

          </div>
        </section>
      </div> 
  );
}


export const metadata = { title: 'PDM - Courses' };