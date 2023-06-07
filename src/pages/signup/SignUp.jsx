import Lottie from "lottie-react";
import signUpimg from '../../assets/lotte/signup.json'
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../sharedPage/socialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState(null);
  // react form hook 
  const { register, handleSubmit , formState: { errors } } = useForm();
  const onSubmit = (data) => {console.log(data);
  
if(data.password !== data.confirmPassword){
  
  setError("Password and Confirm Password must be same")
  return;}
  else{
    setError(null)
  }

       
  
  }
    return (
        <>
         <Helmet>
        <title>EliteSports Academy | SignUp</title>
      </Helmet>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
  <div className="w-1/2 lg:pr-20">
  <Lottie animationData={signUpimg} loop={true} />
    </div>
    <div className="card rounded-none flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)}   className="card-body">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an account
            </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" {...register("name", {  maxLength: 20 })} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text"  placeholder="email" {...register("email", { required: true, maxLength: 20 })} className="input input-bordered" />
          {errors.email?.type === "required" && (
                  <p className="text-red-500"> Email is required</p>
                )}
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"  placeholder="password"
          {...register("password", {
            required: true,
            minLength: 6,
            pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])\S+$/,
          })}
           className="input input-bordered" />
          {errors.password?.type === "required" && (
                  <p className="text-red-500"> password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">
                    {" "}
                    password must be six character
                  </p>
                )}
 {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    {" "}
                    password should have one uppercase letter and one special
                  </p>
                )}
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Confirm password</span>
          </label>
          <input type="password" placeholder="Confirm password" {...register("confirmPassword", { required: true, maxLength: 20 })}className="input input-bordered" />
          {error && (
                  <p className="text-red-500"> {error}</p>
                )}
        </div>
        <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo-URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo-URL"
                    {...register("photoURL", { required: true })}
                    className="input input-bordered"
                  />
                </div>
        <div className="form-control mt-6">
        <input type="submit" className="btn  border-[#AC9C63] border-2 rounded-none bg-black text-white hover:bg-[#AC9C63]"  value="SignUp" />
        </div>
        
        <p className="text-sm font-light text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium link text-[#AC9C63] 
                  hover:text-red-500"
                >
                  Login 
                </Link>
              </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  </div>
</div> 
        </>
    );
};

export default SignUp;