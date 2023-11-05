import banner from '../../assets/banner.jpg'
const Banner = () => {
  return (
    <div className="">
      <div className="carousel w-full lg:h-[600px]">
        <div className="carousel-item relative w-full">
          <img
            src={banner}
            className="w-full object-cover"
          />
          <div className="absolute h-full w-full  left-0 top-0 bg-gradient-to-r from-[#439ae7de] to-[#adabab2c] ">
            <div className=" text-white space-y-3 md:space-y-7 w-2/4 ml-5 mt-10 md:ml-16 md:mt-28 ">
              <h2 className=" text-xl md:text-4xl lg:text-6xl font-bold text-black">
                
                Find Your <span className=' text-[#3994e4]'>Dream Job</span> <br /> Here Easy & Fast
              </h2>
              <p className='text-black text-xs lg:text-base '>
              Discover your dream job quickly and effortlessly with our easy-to-follow guide. Unlock the secrets to streamline your job search and land the perfect opportunity in no time. Your dream career awaits – let's make it happen!
              </p>
              <div className="">
                              
               <form className=' w-[380px] md:w-full'>   
               <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
               <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                         <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                         </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#3994e4] focus:border-[#3994e4] dark:bg-[#242323] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#3994e4] dark:focus:border-[#3994e4]" placeholder="Search Jobs . . ." required />
                    <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-[#3994e4] hover:bg-[#2b6ba3] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#3994e4] dark:hover:bg-[#2a6eaa] dark:focus:ring-[#3994e4]">Search</button>
               </div>
               </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
