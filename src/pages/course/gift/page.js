"use client"
import { useState } from 'react';
import './gift-course.styles.scss';
import DashboardHeader from '@/components/dashboard/dash.header';
import { Checkbox } from 'antd';
import { notificationAlert } from '@/utils/utils';
import PaymentMethods from '@/components/payment-method/page';
import Image from 'next/image';
import course_icon from '../../../public/assets/images/course/Course Images1.png'



export default function GiftCourse() {

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [card_name, setCardName] = useState("");
  const [card_number, setCardNumber] = useState("");
  const [expiration_date, setExpirationDate] = useState("");
  const [cvv, setCVV] = useState("");

  const radioInputBox = function () {
    let lastCheckedRadio = null;

    if (event.target.type === "radio") {
      if (lastCheckedRadio === event.target) {
          event.target.checked = false; 
          lastCheckedRadio = null;
      } else {
          lastCheckedRadio = event.target;
      }
    }

    notificationAlert('success', 'Congratulations!', 'Hi there, your download process have started :)');
  }


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

                  <PaymentMethods />

                  <div className='all'>
                    <div>
                      <label htmlFor='card_name'> Name </label>
                      <input type='text' name='card_name' placeholder='Name on card' value={card_name} onChange={(e) => setCardName(e.target.value)}  />
                    </div> 
                    <div>
                      <label htmlFor='card_number'> Card Number </label>
                      <input type='number' name='card_number' placeholder='Label' value={card_number} onChange={(e) => setCardNumber(e.target.value)}  />
                    </div>
                    <div id='duplicate'>
                      <div>
                        <label htmlFor='expiration_date'> MM / YY </label>
                        <input type='date' name='expiration_date' value={expiration_date} onChange={(e) => setExpirationDate(e.target.value)}  />
                      </div>
                      <div>
                        <label htmlFor='cvv'> CVV </label>
                        <input type='number' name='cvv' placeholder='Security Code' value={cvv} onChange={(e) => setCVV(e.target.value)}  />
                      </div>
                    </div>

                    <Checkbox> Remember this card, save it on my card list </Checkbox>
                  </div>
                </div>
              </section>
            </div>

            <div className='right'>
              <div className='title'>
                <h5> Course </h5>

                <div className='inner'>
                  <Image src={course_icon} alt='course icon' />

                  <div>
                    <p> <span> Course by: </span> Somoye Eniola </p>
                    <p> Python Programming </p>
                    <p> $13.00 </p>
                  </div>
                </div>
              </div>

              <hr />

              <div className='summarize'>
                <h5> Order Summary </h5>

                <div>
                  <p> Subtotal <span> $61.97 USD </span> </p>
                  <p> Coupon Discount <span> 8% </span> </p>
                </div>

                <hr />

                <p> Total: <span> $75.00 USD </span> </p>

                <button type='submit'> Complete Payment </button>
              </div>
            </div>
          </form>
        </main>
      </div> 
  );
}


// export const metadata = { title: 'PDM - Gift Course' }