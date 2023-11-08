import Banner from "./Banner";
import Jobssection from "./Jobssection";
import TrandingJobs from "./TrandingJobs";


const Home = () => {
     return (
          <div className=" dark:bg-[#242323]" >
              <Banner></Banner>
              <Jobssection></Jobssection>
              <TrandingJobs></TrandingJobs>
          </div>
     );
};

export default Home;