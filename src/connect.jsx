const Connect = () => {
    return (
        <div className=' w-full bg-black pt-10 flex flex-col gap-y-5'>
             <button type="button" className='input-btn place-self-center'>
                <p className='input-text text-white'>
                    Connect with us Today
                </p>
            </button>
            <div className='flex w-full gap-x-6 justify-start text-white h-max p-20 py-10 pb-2'>
                <div className=' w-max pr-10 font-link h-max p-2'>
                    <p className='font-semibold text-4xl/10 w-90'>
                        We are always  happy to assist you
                    </p>
                </div>
                <div className='flex gap-x-[50px]  p-2 font-logo w-[50%]'>
                    <span className='flex flex-col gap-y-3'>
                        <h1 className='input-text'>Email Address</h1>
                        <div className='border border-white w-5'> </div>
                        <h1 className='input-text'>mypdmtutor@gmail.com</h1>
                       <div className='text-sm'>
                       <p className='font-light'>Assistance hours:</p>
                       <p className='font-light w-40'>Monday - Friday 6am to  8pm EST</p>
                       </div>
                    </span>
                    <span className='flex flex-col gap-y-3'>
                        <h1 className='input-text'>Number</h1>
                        <div className='border border-white w-5'> </div>
                        <h1 className='input-text'>+234 803 986 7195</h1>
                       <div className='text-sm'>
                       <p className='font-light'>Assistance hours:</p>
                       <p className='font-light w-40'>Monday - Friday 6am to  8pm EST</p>
                       </div>
                    </span>
                </div>
            </div>
            <div className='flex w-full gap-x-6 justify-center text-white h-max p-20 py-7  bg-[#2A27C9] items-center'>
                <div className=' w-[50%] pr-10 font-link h-max p-2 gap-y-5 flex flex-col'>
                    <p className='font-semibold text-3xl/10 w-max'>
                    Subscribe to our Newsletter
                    </p>
                    <p className=' w-125'>
                    Subscribe for Updates: Stay informed about the python programming, Data Analytics, Machine Learning by subscribing to our newsletter. 
                    </p>
                </div>
                <div className='flex p-2 font-logo w-[50%] h-max items-center'>
                   <input type="email" name="" id="" placeholder='Enter your email address' className='outline-none bg-white/10 pl-5 pr-10 py-5 rounded-l-2xl w-full' />
                   <button className=' px-5 py-5 bg-white text-[#2A27C9] rounded-r-2xl font-semibold shadow-lg shadow-black/10'>Suscribe</button>
                </div>
            </div>
            <div className='flex w-full gap-x-6 justify-start text-white h-max p-20 py-10 pb-2'>
                <div className=' w-max pr-10 font-link h-max p-2'>
                    <p className='font-semibold text-4xl/10 w-90'>
                        We are always  happy to assist you
                    </p>
                </div>
                <div className='flex gap-x-[50px]  p-2 font-logo w-[50%]'>
                    <span className='flex flex-col gap-y-3'>
                        <h1 className='input-text'>Email Address</h1>
                        <div className='border border-white w-5'> </div>
                        <h1 className='input-text'>mypdmtutor@gmail.com</h1>
                       <div className='text-sm'>
                       <p className='font-light'>Assistance hours:</p>
                       <p className='font-light w-40'>Monday - Friday 6am to  8pm EST</p>
                       </div>
                    </span>
                    <span className='flex flex-col gap-y-3'>
                        <h1 className='input-text'>Number</h1>
                        <div className='border border-white w-5'> </div>
                        <h1 className='input-text'>+234 803 986 7195</h1>
                       <div className='text-sm'>
                       <p className='font-light'>Assistance hours:</p>
                       <p className='font-light w-40'>Monday - Friday 6am to  8pm EST</p>
                       </div>
                    </span>
                </div>
            </div>

        </div>
      );
}
 
export default Connect;