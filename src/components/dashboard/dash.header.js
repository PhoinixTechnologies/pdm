'use client'
import '../../pages/dashboard/dashboard.styles.scss'
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../hook/AuthProvider';
import { RESPONSE_STATES } from '../../utils/constants';
import Swal from 'sweetalert2';
import { Loader } from '../loader/loader.component';


export default function DashboardHeader() {

    const auth = useAuth();
    const token = localStorage.getItem("authtoken");
    const refreshToken = JSON.parse(token).refresh.token;

    const location = useLocation();
    const pathname = location.pathname;
    const id = 4444;


    const [errorMessage, setErrorMessage] = useState("");
    const [responseState, setResponseState] = useState(RESPONSE_STATES.none);

    const submitLogout = async () => {
    
        try {
            setResponseState(RESPONSE_STATES.loading);
            setErrorMessage("");
        
            const responseState = await auth.logOut({ refreshToken });
            setResponseState(responseState);
        
            if (responseState === RESPONSE_STATES.error) {
                setErrorMessage("Invalid Credentials");
            }
        
        } catch (error) {
            setResponseState(RESPONSE_STATES.none);
            const errorMessage = error.response ? error.response.data.message : error.message;            

            Swal.fire({ icon: 'error', title: 'Error', text: errorMessage, });
        }
    };



    return (
        <header>
            
            {/* Navigation plane which includes links to pages and notification bell and profile  */}
            <div id="nav">
                <div style={{ padding: '10px' }}> <div id="logo"> </div> </div>
                
                <a href={'/dashboard'} className={`navigate ${pathname === '/dashboard' ? 'active' : ''}`}> Home </a>

                <a href={'/courses'} className={`navigate ${pathname === '/courses' || pathname === `/courses/watch/${id}` || pathname === '/courses/gift' || pathname === `/course-overview/${id}` ? 'active' : ''}`}> Courses </a>

                <a href={'/workshop'} className={`navigate ${pathname === '/workshop' ? 'active' : ''}`}> Workshop </a>

                <a href={'groups'} className={`navigate ${pathname === '#groups' ? 'active' : ''}`}> Groups </a>

                <a href={'certifications'} className={`navigate ${pathname === '#certificates' ? 'active' : ''}`}> Certificates </a>
            </div>


            {/* notification bell and profile */}
            <div id="notify">
                <div id="bell">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" id="bells">
                        <path d="M9.375 0.625C9.375 0.28125 9.65625 0 10 0C10.3438 0 10.625 0.28125 10.625 0.625V1.28125C13.7852 1.59375 16.25 4.25781 16.25 7.5V8.63672C16.25 10.3438 16.9297 11.9805 18.1367 13.1914L18.2461 13.3008C18.5703 13.625 18.7539 14.0664 18.7539 14.5234C18.7539 15.4805 17.9805 16.2539 17.0234 16.2539H2.98047C2.02344 16.25 1.25 15.4766 1.25 14.5195C1.25 14.0625 1.43359 13.6211 1.75781 13.2969L1.86719 13.1875C3.07031 11.9805 3.75 10.3438 3.75 8.63672V7.5C3.75 4.25781 6.21484 1.59375 9.375 1.28125V0.625ZM10 2.5C7.23828 2.5 5 4.73828 5 7.5V8.63672C5 10.6758 4.19141 12.6328 2.74609 14.0742L2.64062 14.1797C2.55078 14.2695 2.5 14.3906 2.5 14.5195C2.5 14.7852 2.71484 15 2.98047 15H17.0195C17.2852 15 17.5 14.7852 17.5 14.5195C17.5 14.3906 17.4492 14.2695 17.3594 14.1797L17.25 14.0703C15.8086 12.6289 14.9961 10.6719 14.9961 8.63281V7.5C14.9961 4.73828 12.7578 2.5 9.99609 2.5H10ZM8.82031 17.918C8.99219 18.4023 9.45703 18.75 10 18.75C10.543 18.75 11.0078 18.4023 11.1797 17.918C11.293 17.5938 11.6523 17.4219 11.9766 17.5352C12.3008 17.6484 12.4727 18.0078 12.3594 18.332C12.0156 19.3047 11.0898 20 10 20C8.91016 20 7.98438 19.3047 7.64063 18.332C7.52734 18.0078 7.69531 17.6484 8.02344 17.5352C8.35156 17.4219 8.70703 17.5898 8.82031 17.918Z" fill="#222222"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" id="orange">
                        <circle cx="5" cy="5" r="4.5" fill="#FE5A4A" stroke="white"/>
                    </svg>
                </div>

                {/* <User image  */}
                {/* <div id="user-image" onClick={() => auth.logOut(refreshToken)}> </div> */}
                <div id="user-image" onClick={() => submitLogout()}> {responseState === RESPONSE_STATES.loading ? <Loader /> : ""} </div>
            </div>
        </header>
    );
}
