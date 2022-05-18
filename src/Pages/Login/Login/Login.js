import React from 'react';
import {useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../hooks/useToken';

// import { EmailAuthCredential } from 'firebase/auth';

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user || gUser)
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";


  if(loading || gLoading){
    return <Loading></Loading>
  }

  let signInError;
  if(error || gError){
    signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
  }
  if(token){
    navigate(from, { replace: true });
  }

  const onSubmit = data => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password)
  }

  return (
    <div className="card  h-screen justify-center items-center">
    <div className='card w-100 bg-base-100 shadow-2xl'>
    <div className="card-body">
    <h2 className="text-center text-accent text-2xl font-bold">Login</h2>

    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text text-accent text-xl">Email</span>
      </label>
      <input 
      type="email" 
      placeholder="Your Email" 
      className="input input-bordered w-full max-w-xs border-accent text-accent text-xl" 
      {...register("email", {
        required: {
          value: true,
          message: 'Email is Required'
        },
        pattern: {
          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
          message: 'Provide a valid email' // JS only: <p>error message</p> TS only support string
        }
      }
      )}
      />
      <label className="label">
      {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
      {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
      </label>
    </div>
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text text-accent text-xl">Password</span>
      </label>
      <input 
      type="password" 
      placeholder="Password" 
      className="input input-bordered w-full max-w-xs border-accent text-accent text-xl" 
      {...register("password", {
        required: {
          value: true,
          message: 'password is Required'
        },
        minLength: {
          value: 6,
          message: 'Must be 6 characters to longer' // JS only: <p>error message</p> TS only support string
        }
      }
      )}
      />
      <label className="label">
      {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
      {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
      </label>
    </div>    
    {signInError}
      <input className='btn w-full max-w-xs bg-accent text-white' type="submit" value="Login" />
    </form>
    <p className='text-accent'>New Doctors Portal? <Link to="/signup" className='text-primary'>Create New Account</Link></p>
    <div className="divider text-accent text-xl">OR</div>
    <button 
    className="btn btn-outline uppercase text-xl border-accent text-accent"
    onClick={() => signInWithGoogle()}
    >Continue with Google</button>
    </div>
    </div>
  </div>
  );
};

export default Login;