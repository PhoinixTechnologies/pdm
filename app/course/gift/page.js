"use client"
import { useState } from 'react';
import './gift-course.styles.scss';
import DashboardHeader from '@/components/dashboard/dash.header';



export default function GiftCourse() {

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  return (
      <div className="pdm">
        <DashboardHeader />
      
        <main className='gift-course'>
          <h2> Gift Course </h2>

          <section>
            <div className='left'>
              <h3> Gift Course </h3>

              <form action={'#'} method='POST'>
                <div className='recipient-info'>
                  <h4> Recipient`s Information </h4>

                  <div className='all'>
                    <div>
                      <label htmlFor='fullname'> Recipient`s Name </label>
                      <input type='text' name='fullname' placeholder='Full name' value={fullname} onChange={(e) => setFullname(e.target.value)}  />
                    </div> 
                    <div>
                      <label htmlFor='email'> Recipient`s Email: </label>
                      <input type='email' name='email' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)}  />
                    </div> 
                    <div>
                      <label htmlFor='message'> Gift Message </label>
                      <textarea name="message" id="" cols="30" rows="10" placeholder="Add your personal message here..." value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className='right'>

            </div>
          </section>
        </main>
      </div> 
  );
}


// export const metadata = { title: 'PDM - Gift Course' }