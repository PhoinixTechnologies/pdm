import './course.styles.scss';
import Link from 'next/link';
import DashboardHeader from '@/components/dashboard/dash.header';
import Head from 'next/head';



export default function Course() {

  return (
      <div className="pdm-course">
        <Head>
          <title> PDM - Courses </title>
        </Head>

        <DashboardHeader />
      
        
      </div> 
  );
}


export const metadata = { title: 'PDM - Courses' };