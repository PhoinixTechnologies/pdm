import Image from 'next/image';
import './dashboard.styles.scss';
import Link from 'next/link';
import logo_icon from '../../public/assets/icons/pdm.png';
import DashboardHeader from '@/components/dashboard/dash.header';



export default function Dashboard() {

  return (
    <div className="pdm-dashboard">
        <DashboardHeader />
      
        Dashboard starts here
    </div> 
  );
}
