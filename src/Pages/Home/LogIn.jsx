import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible, AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast, } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import loginPhoto from "../../assets/LogIn.svg"

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInWithGoogle,signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // login setup
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((res) => {
        toast.success("Successfully LogIn!");
        console.log(res.user);
          navigate(location?.state ? location.state : "/");
       
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("Login Failed: " + err.code);
      });
  };

  //google account login setup
  const handleGoogleLogIn = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
        toast.success("Successfully Google SingUp!");
        navigate(location?.state ? location.state : "/");
        return ;
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("Invalid SingUp Credentials");
      });
  };
  return (
    <div>
      <section  className=" dark:bg-gray-900 bg-gradient-to-t  from-[#439ae7af]">
        <div className="flex flex-col-reverse lg:flex-row-reverse  items-center justify-center gap-28 px-6 py-8 mx-auto  lg:py-0">
          <div className=" md:w-[550px] lg:mt-10">
            <img
              src={loginPhoto}
              alt=""
            />
          </div>
          <div className="w-full bg-white rounded-xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#242323] dark:border-[#242323] border-4  border-[#3994e4]">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
                Sign In
              </h1>
              <form onSubmit={handleLogIn} className="  space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 "
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg   block w-full p-2.5 "
                    required=""
                  />
                  <span className=" absolute right-3 top-10  cursor-pointer text-xl text-[#3994e4]" onClick={()=>setShowPassword(!showPassword)}>{showPassword ?<AiFillEye/> :<AiFillEyeInvisible/>}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full hover:text-black  text-white bg-[#3994e4] font-semibold rounded-lg text-md px-5 py-2.5 text-center "
                >
                  Sign in
                </button>
                <div className=" flex gap-7">
                <button
                  onClick={handleGoogleLogIn}
                  type="submit"
                  className="w-full hover:text-black text-white bg-[#3994e4] font-semibold rounded-lg text-md px-5 py-2.5 text-center flex items-center justify-center gap-4 "
                >
                  <AiFillGoogleCircle className=" text-2xl" /> Google
                </button>
                <button
                   
                  type="submit"
                  className="w-full hover:text-black text-white bg-[#3994e4] font-semibold rounded-lg text-md px-5 py-2.5 text-center flex items-center justify-center gap-4 "
                >
                  <AiFillFacebook className=" text-2xl" /> Google
                </button>
                </div>

                <p className="text-sm font-light text-gray-500 ">
                  Do not have an account yet?
                  <Link
                    to={"/signup"}
                    className="font-medium  ml-2 text-lg  hover:underline text-[#3994e4]"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogIn;
