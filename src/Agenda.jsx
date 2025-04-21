import about from './img/agenda.png'
const Agenda = () => {
    return ( 
      <div className='bg-black'>
            <div className='flex justify-center items-center border-white h-max p-20 py-40 relative'>
            <div className="w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] xl:w-[630px] xl:h-[629px] flex-shrink-0 rounded-[630px] border-[3px] border-dashed border-[#0D0F2B] opacity-90 bg-[#060714] flex justify-center items-center">
                <div className="w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] xl:w-[818px] xl:h-[817px] flex-shrink-0 rounded-[818px] border-[3px] border-solid border-[#0D0F2B] opacity-80 bg-[#060714] flex justify-center items-center">
                    <div className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] xl:w-[990px] xl:h-[989px] flex-shrink-0 rounded-[990px] border-[3px] border-dashed border-[#0D0F2B] opacity-70 bg-[#060714] flex justify-center items-center">
                        <div class="w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] md:w-[700px] md:h-[700px] lg:w-[950px] lg:h-[950px] xl:w-[1144px] xl:h-[1143px] flex-shrink-0 rounded-[1144px] border-[3px] border-solid border-[#0D0F2B] opacity-60 bg-[#060714]">
                        </div>
                    </div>
                </div>
            </div>
             <div className='flex p-20 justify-around text-white items-center gap-x-10 absolute flex-row-reverse '>
                        <div className='flex flex-col gap-y-6 h-max max-w-full '>
                            <div className='flex flex-col gap-y-5' >
                                <span className='flex gap-x-3'>
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g opacity="0.9">
                                        <g opacity="0.9">
                                        <path d="M4.11768 16.7821H16.7828V4.11694" stroke="#2A27C9" stroke-width="3.48327" stroke-miterlimit="20" stroke-linecap="square"/>
                                        </g>
                                        <g opacity="0.9">
                                        <path d="M4.11768 4.11694L15.5167 15.5159" stroke="#2A27C9" stroke-width="3.48327" stroke-miterlimit="20" stroke-linecap="square"/>
                                        </g>
                                    </g>
                                    </svg>
                                    </div>
                                    <h3 className='flex justify-center font-link font-semibold uppercase tracking-wide'>My pdm tutor</h3>
                                </span>
                                <h3 className='Headings'>My Agenda</h3>
                            </div>
                            <p className='max-w-160 font-link text-md leading-6 font-medium '>
                            I am an experienced tutor with strong foundation in Python programming, data analysis and machine learning. I specialize in guiding students and professionals through complex topics like data manipulation, visualization and machine learning development. My hands-on approach and tailored lessons help master practical skills in tools such as pandas, Numpy, Matplotlib and Scikit-learn.
                            </p>
                            <div className='flex gap-x-4  items-center'>
                                <a href="/" className='flex items-center px-1 py-3 rounded-2xl bg-white text-black justify-center tracking-wide w-30 font-medium shadow-[inset_-4px_-4px_4px_rgba(0,0,0,0.1),_inset_4px_4px_4px_rgba(255,255,255,0.1)]'>Get started</a>
                                <a href="/" className='flex items-center px-1 py-3 rounded-2xl text-link border border-link w-30 justify-center'>Learn more</a>
                            </div>
                        </div>
                        <div className='w-100 h-full rounded-4xl'>
                            <img src={about} alt="" className='rounded-4xl h-auto w-full max-w-full'/>
                        </div>
                    </div>
            </div>

            <div className='flex justify-center items-center  border-white h-max p-20 py-40 relative inset-x-0 -top-12 '>
            <div className="w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] xl:w-[630px] xl:h-[629px] flex-shrink-0 rounded-[630px] border-[3px] border-dashed border-[#0D0F2B] opacity-90 bg-[#060714] flex justify-center items-center">
                <div className="w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] xl:w-[818px] xl:h-[817px] flex-shrink-0 rounded-[818px] border-[3px] border-solid border-[#0D0F2B] opacity-80 bg-[#060714] flex justify-center items-center">
                    <div className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] xl:w-[990px] xl:h-[989px] flex-shrink-0 rounded-[990px] border-[3px] border-dashed border-[#0D0F2B] opacity-70 bg-[#060714] flex justify-center items-center">
                        <div class="w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] md:w-[700px] md:h-[700px] lg:w-[950px] lg:h-[950px] xl:w-[1144px] xl:h-[1143px] flex-shrink-0 rounded-[1144px] border-[3px] border-solid border-[#0D0F2B] opacity-60 bg-[#060714]">
                        </div>
                    </div>
                </div>
            </div>
             <div className='flex p-20 justify-around text-white items-center gap-x-10 absolute flex-row-reverse '>
                        <div className='flex flex-col gap-y-6 h-max max-w-full '>
                            <div className='flex flex-col gap-y-5' >
                                <span className='flex gap-x-3'>
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g opacity="0.9">
                                        <g opacity="0.9">
                                        <path d="M4.11768 16.7821H16.7828V4.11694" stroke="#2A27C9" stroke-width="3.48327" stroke-miterlimit="20" stroke-linecap="square"/>
                                        </g>
                                        <g opacity="0.9">
                                        <path d="M4.11768 4.11694L15.5167 15.5159" stroke="#2A27C9" stroke-width="3.48327" stroke-miterlimit="20" stroke-linecap="square"/>
                                        </g>
                                    </g>
                                    </svg>
                                    </div>
                                    <h3 className='flex justify-center font-link font-semibold uppercase tracking-wide'>My pdm tutor</h3>
                                </span>
                                <h3 className='Headings'>My Agenda</h3>
                            </div>
                            <p className='max-w-160 font-link text-md leading-6 font-medium '>
                            I am an experienced tutor with strong foundation in Python programming, data analysis and machine learning. I specialize in guiding students and professionals through complex topics like data manipulation, visualization and machine learning development. My hands-on approach and tailored lessons help master practical skills in tools such as pandas, Numpy, Matplotlib and Scikit-learn.
                            </p>
                            <div className='flex gap-x-4  items-center'>
                                <a href="/" className='flex items-center px-1 py-3 rounded-2xl bg-white text-black justify-center tracking-wide w-30 font-medium shadow-[inset_-4px_-4px_4px_rgba(0,0,0,0.1),_inset_4px_4px_4px_rgba(255,255,255,0.1)]'>Get started</a>
                                <a href="/" className='flex items-center px-1 py-3 rounded-2xl text-link border border-link w-30 justify-center'>Learn more</a>
                            </div>
                        </div>
                        <div className='w-100 h-full rounded-4xl'>
                            <img src={about} alt="" className='rounded-4xl h-auto w-full max-w-full'/>
                        </div>
                    </div>
            </div>
      </div>
        
     );
}
 
export default Agenda;