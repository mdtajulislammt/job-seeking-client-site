import Banner from "./Banner";
import JobsCuantity from "./JobsCuantity";
import Jobssection from "./Jobssection";
import TrandingJobs from "./TrandingJobs";


const Home = () => {
     return (
          <div className=" dark:bg-[#242323]" >
              <Banner></Banner>
              <Jobssection></Jobssection>
              <TrandingJobs></TrandingJobs>
              <JobsCuantity></JobsCuantity>
          </div>
     );
};

export default Home;