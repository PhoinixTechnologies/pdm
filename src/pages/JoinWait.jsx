import logo from '../img/My_PDM_Tutor_1-removebg-preview.png';

const Join = () => {
    return (
<>     <div>
          <p>biy</p>
     </div>
     <div className='sm:max-md:w-[60%] w-[90%] lg:w-[40%] h-[100%] flex flex-col gap-y-10 items-center '>
          <div className='flex gap-x-2 items-center'>
               <img src={logo} alt="" className='w-10' />
               <h1 className='font-bold font-logo text-xl'>My PDM Tutor</h1>
          </div>
            
          <div className=' bg-white w-full  flex flex-col gap-y-10 rounded-xl border-1 border-[#E2E8F0] py-5 shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10),0px_4px_6px_-1px_rgba(0,0,0,0.10)]'>
                <h1 className='font-semibold font-logo text-2xl self-center'>Create an account</h1>
                <form action="" className='px-10 gap-y-7 flex flex-col '>
                   <div className='flex flex-col px-1 gap-2'>
                        <label htmlFor="" className='font-link text-lg font-medium'>Full Name</label>
                        <input type="text" className="w-full outline-none bg-transparent  border-2 py-3 px-3 rounded-xl  border-[#9EA2AE]"placeholder="Enter your full name"/>
                   </div>
                   <div className='flex flex-col px-1 gap-1'>
                        <label htmlFor=" " className='font-link text-lg font-medium'>Email Address</label>
                        <input type="text" className="w-full outline-none bg-transparent  border-2 py-3 px-3 rounded-xl  border-[#9EA2AE]"placeholder="Enter your email address"/>
                   </div>
                   <div className='flex flex-col px-1 gap-1'>
                        <label htmlFor="" className='font-link text-lg font-medium'>Password</label>
                        <input type='password' className="w-full outline-none bg-transparent  border-2 py-3 px-3 rounded-xl  border-[#9EA2AE]"placeholder="Enter your password"/>
                   </div>
                   <div className='flex flex-col px-1 gap-1'>
                        <label htmlFor="" className='font-link text-lg font-medium'>What do you want to learn?</label>
                        {/* <input type="text" className="w-full outline-none bg-transparent  border-2 py-4 px-3 rounded-xl  border-[#9EA2AE]"placeholder="Enter your fullname"/> */}
                        <select name="courses" id="courses" className='w-full outline-none bg-transparent  border-2 rounded-xl py-3 px-3 border-[#9EA2AE]'>
                        <option value="0">Select Course:</option>
                         <option value="1">Python Programmming</option>
                         <option value="2">Machine Learning</option>
                         <option value="3">Artificial Intelligence</option>
                        </select>
                   </div>
                    <div className='flex px-1 gap-5 '>
                        <label htmlFor="" className='font-link text-lg font-medium'>Are you a Student?</label>
                        <div className='flex gap-6'>
                         <span className='flex gap-2 items-center'>
                              <label htmlFor="" className='font-link text-lg font-medium'>Yes</label>
                         <input type="checkbox" name="" id="" className='w-5 h-5 outline-none bg-transparent  border-2 rounded-xl py-3 px-3 border-[#9EA2AE]'/>
                         </span>
                           <span className='flex gap-2 items-center'>
                              <label htmlFor="" className='font-link text-lg font-medium'>No</label>
                         <input type="checkbox" name="" id="" className='w-5 h-5 outline-none bg-transparent  border-2 rounded-xl py-3 px-3 border-[#9EA2AE]'/>
                         </span>
                        </div>
                   </div>
                   
                </form>
                <div></div>
          </div>

     </div></>
     );
}
 
export default Join;