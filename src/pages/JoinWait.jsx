import logo from './img/My_PDM_Tutor_1-removebg-preview.png';
const Join = () => {
    return ( 
     <div className=' w-[35%] h-[90%] flex flex-col gap-y-10 items-center py-5'>
          <div>
          <img src={logo} alt="" />
          <h1 className='font-bold font-logo text-xl'>My PDM Tutor</h1>
          </div>
            
          <div className=' bg-white w-full  flex flex-col gap-y-10 rounded-xl border-1 border-[#E2E8F0] py-5'>
                <h1 className='font-bold font-logo text-xl self-center'>Create an account</h1>
                <form action="" className='p-2 gap-y-10 flex flex-col '>
                   <div className='flex flex-col px-1 gap-2 border'>
                        <label htmlFor="">Full Name</label>
                        <input type="text" className="w-full outline-none bg-transparent  border-2 py-2 px-2 rounded-xl  border-[#9EA2AE]"placeholder="Enter your fullname"/>
                   </div>
                   <div className='flex flex-col px-1 gap-2 border'>
                        <label htmlFor="">Full Name</label>
                        <input type="text" className="w-full outline-none bg-transparent  border-2 py-2 px-2 rounded-xl  border-[#9EA2AE]"placeholder="Enter your fullname"/>
                   </div>
                   <div className='flex flex-col px-1 gap-2 border'>
                        <label htmlFor="">Full Name</label>
                        <input type="text" className="w-full outline-none bg-transparent  border-2 py-2 px-2 rounded-xl  border-[#9EA2AE]"placeholder="Enter your fullname"/>
                   </div>
                   <div className='flex flex-col px-1 gap-2 border'>
                        <label htmlFor="">Full Name</label>
                        <input type="text" className="w-full outline-none bg-transparent  border-2 py-2 px-2 rounded-xl  border-[#9EA2AE]"placeholder="Enter your fullname"/>
                   </div>
                   
                </form>
          </div>
     </div>
     );
}
 
export default Join;