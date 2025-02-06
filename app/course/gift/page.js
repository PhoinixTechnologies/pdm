"use client"
import { useState } from 'react';
import './gift-course.styles.scss';
import DashboardHeader from '@/components/dashboard/dash.header';
import { Checkbox } from 'antd';



export default function GiftCourse() {

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [card_name, setCardName] = useState("");
  const [card_number, setCardNumber] = useState("");


  return (
      <div className="pdm">
        <DashboardHeader />
      
        <main className='gift-course'>
          <h2> Gift Course </h2>

          <form action={'#'} method='POST'>
            <div className='left'>
              <h3> Gift Course </h3>

              <section>
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
                      <textarea name="message" id="" cols="20" rows="7" placeholder="Add your personal message here..." value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                  </div>
                </div>
                
                <div className='payment-mthd'>
                  <h4> Payment Method </h4>

                  <div className='all'>
                    <div>
                      <label htmlFor='card_name'> Name </label>
                      <input type='text' name='card_name' placeholder='Name on card' value={card_name} onChange={(e) => setCardName(e.target.value)}  />
                    </div> 
                    <div>
                      <label htmlFor='card_number'> Card Number </label>
                      <input type='number' name='card_number' placeholder='Label' value={card_number} onChange={(e) => setCardNumber(e.target.value)}  />
                    </div>
                    <div>
                      <label htmlFor='card_number'> Card Number </label>
                      <input type='number' name='card_number' placeholder='Label' value={card_number} onChange={(e) => setCardNumber(e.target.value)}  />
                    </div>

                    <Checkbox> Remember this card, save it on my card list </Checkbox>
                  </div>
                </div>
              </section>
            </div>

            <div className='right'>

            </div>
          </form>
        </main>
      </div> 
  );
}


// export const metadata = { title: 'PDM - Gift Course' }