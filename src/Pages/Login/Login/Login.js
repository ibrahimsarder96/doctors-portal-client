import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
// import { EmailAuthCredential } from 'firebase/auth';

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();

  if(user){
    console.log(user)
  }

  const onSubmit = data => {
    console.log(data);
  }

  return (
    <div className="card  h-screen justify-center items-center">
    <div className='card w-100 bg-base-100 shadow-2xl'>
    <div className="card-body">
    <h2 className="text-center text-accent text-2xl font-bold">Login</h2>

    <form onSubmit={handleSubmit(onSubmit)}>
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text text-accent text-xl">Email</span>
      </label>
      <input 
      type="email" 
      placeholder="Your Email" 
      class="input input-bordered w-full max-w-xs border-accent text-accent text-xl" 
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
      <label class="label">
      {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
      {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
      </label>
    </div>
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text text-accent text-xl">Password</span>
      </label>
      <input 
      type="password" 
      placeholder="Password" 
      class="input input-bordered w-full max-w-xs border-accent text-accent text-xl" 
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
      <label class="label">
      {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
      {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
      </label>
    </div>    
      <input className='btn w-full max-w-xs bg-accent text-white' type="submit" value="Login" />
    </form>
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