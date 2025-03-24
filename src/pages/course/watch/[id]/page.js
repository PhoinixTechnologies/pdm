import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './watch-course.scss';
import DashboardHeader from '@/components/dashboard/dash.header';
import { faArrowLeft, faClock, faComment, faDownload, faFolder, faPlayCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import avatarOne from '../../../../public/assets/images/course/watch/avatar_one.png';
import avatarTwo from '../../../../public/assets/images/course/watch/avatar_two.png';
import avatarThree from '../../../../public/assets/images/course/watch/avatar_three.png';
import avatarFour from '../../../../public/assets/images/course/watch/avatar_four.png';
import avatarFive from '../../../../public/assets/images/course/watch/avatar_five.png';
import { notificationAlert } from '@/utils/utils';



export default function WatchCourse() {

  const date = Date().split(" ").slice(1, 4).join(" ");

  return (
      <div className="pdm">
        <DashboardHeader />
      
        <main className='watch-courses'>
          <div className='top'>
            <button type='button'> <FontAwesomeIcon icon={faArrowLeft} /> </button>

            <div className='middle'>
              <div className='details'>
                <h5> Python Programming </h5>
                <div>
                  <p> <FontAwesomeIcon icon={faFolder} /> 6 Sections </p>
                  <p> <FontAwesomeIcon icon={faPlayCircle} /> 202 Lectures </p>
                  <p> <FontAwesomeIcon icon={faClock} /> 19h 37m </p>
                </div>
              </div>

              <div className='btns'>
                <button type='button'> Write A Review </button>
                <button type='button'> Next Lecture </button>
              </div>
            </div>
          </div>

          <div className='bottom'>
            <div className='video-title'>
              <iframe width="950" height="650" src="https://www.youtube.com/embed/F4Zu5ZZAG7I?si=jd9LC5lAry_AKo0Z" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

              <h3> 7 Ways to Make a Conversation With Anyone | Malavika Varadan </h3>

              <div className='statistics'> 
                <div className='left'>
                  <div className='icons'>
                    <Image src={avatarOne} alt='profile icon' width={100} height={100} />
                    <Image src={avatarTwo} alt='profile icon' width={100} height={100} />
                    <Image src={avatarThree} alt='profile icon' width={100} height={100} />
                    <Image src={avatarFour} alt='profile icon' width={100} height={100} />
                    <Image src={avatarFive} alt='profile icon' width={100} height={100} />
                  </div>
                  <div className='photos'>
                    <h6> 512 </h6>
                    <p> Students watching </p>
                  </div>
                </div>

                <div className='right'>
                  <p> Last updated: <b> {date} </b> </p>
                  <p> Comments: <b> 154 </b> </p>
                </div>
              </div>
            </div>

            <section className='rest'>
              <div className='rest-btns'>
                <button type='button' className='description-btn'> Description </button>
                <button type='button' className=''> Lectures Notes </button>
                <button type='button' className=''> Attach File <span> 01 </span> </button>
                <button type='button' className=''> Comments </button>
              </div>

              <div className='description'>
                <div>
                  <h3> Lecture Description </h3>
                  <p> This Python Programming course covers everything from basic concepts like Python installation, syntax, variables, and data structures (strings, lists, tuples, sets, and dictionaries) to intermediate topics such as control flow, functions, modules, and file handling, and finally advanced subjects like object-oriented programming (OOP), web scraping, GUI creation, working with databases, regular expressions, network programming, and web development with Flask, making it perfect for beginners, intermediate learners, aspiring data scientists, web developers, IT professionals, and hobbyists, with no prior programming experience required beyond basic computer literacy. </p>
                </div>
                <div>
                  <h3> Lectures Notes <button onClick={notificationAlert('success', 'Congratulations!', 'Hi there, your download process have started :)')} type='button'> <FontAwesomeIcon icon={faDownload} /> Download Notes </button> </h3>
                  <p> The Python Programming course lecture notes cover the basics of Python, including installation, variables, data types, operators, input/output, and core data structures (strings, lists, tuples, sets, dictionaries), progressing through intermediate topics like control flow (if-else, loops), functions, and modules, to file handling, equipping students with a solid foundation for more advanced programming concepts. </p>
                </div>
              </div>

              <div className='comments'>
                <h3> Comments (154) </h3>

                <div className='combine'>
                  <Image src={avatarFive} alt='progfile icon' />
                  <form action={'#'} method='POST'>
                    <h6> Ronald Richards <span> . </span> <small> 1 week ago </small> </h6>
                    <p> Thank You so much ma, you’re a great mentor. 🔥🔥🔥 </p>
                    <input type='text' name='comment' placeholder='💬 REPLY...'  />
                  </form>                  
                </div>

                <div className='combine'>
                  <Image src={avatarThree} alt='progfile icon' />
                  <form action={'#'} method='POST'>
                    <h6> Guy Hawkins <span> . </span> <small> 2 week ago </small> </h6>
                    <p> Thank you for your helpful video.  </p>
                    <input type='text' name='comment' placeholder='💬 REPLY...'  />
                  </form>                  
                </div>

                <div className='combine'>
                  <Image src={avatarOne} alt='progfile icon' />
                  <form action={'#'} method='POST'>
                    <h6> Esther Howard <span> . </span> <small> 2 week ago </small> </h6>
                    <p> Quality Content </p>
                    <input type='text' name='comment' placeholder='💬 REPLY...'  />
                  </form>                  
                </div>

                <div className='combine'>
                  <Image src={avatarTwo} alt='progfile icon' />
                  <form action={'#'} method='POST'>
                    <h6> Theresa Webb <span> . </span> <small> 3 week ago </small> </h6>
                    <p> Now i know that i will spent that 5 minutes of my life with pure pleasure </p>
                    <input type='text' name='comment' placeholder='💬 REPLY...'  />
                  </form>                  
                </div>

                <div className='combine'>
                  <Image src={avatarThree} alt='progfile icon' />
                  <form action={'#'} method='POST'>
                    <h6> Courtney Henry <span> . </span> <small> 1 month ago </small> </h6>
                    <p> Imagine seeing this while being a front end programmer. </p>
                    <input type='text' name='comment' placeholder='💬 REPLY...'  />
                  </form>                  
                </div>
              </div>

              <button type='button' id='load-more'> Load more <FontAwesomeIcon icon={faSpinner} /> </button>

            </section>
          </div>
        </main>
      </div> 
  );
}


export const metadata = { title: 'PDM - Watch Courses' }