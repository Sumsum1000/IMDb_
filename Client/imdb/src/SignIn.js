import './signin.css';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

export default function SignIn (){
    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = (values, e) => {
        e.target.reset();
  
    }

    return(
       <div className="signIn-container">
           <div className="signin-createAccount-container">
               <form onSubmit={handleSubmit(onSubmit)}>
                   <label>Username</label>
                    <input
                    type="text"
                    autoComplete= "off"
                    {...register("Username", {
                    required: "Required",
                    })}
                    />
                    <ErrorMessage
                    errors={errors}
                    name="Username"
                    // message = "invalid Username"
                    // render={({ message }) => <p>{message}</p>}
                    />

                    <label>Password</label>
                    <input
                    type="password"
                    autoComplete= "off"
                    {...register("password", {
                    required: "Required",
                    pattern: {
                      value:  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
                    }
                    })}
                    />
                    <ErrorMessage
                    errors={errors}
                    name="password"
                    message = "password must contain at least 8 characters. must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number. Can contain special characters"
                    render={({ message }) => <p>{message}</p>}
                    />

                    <button type="submit" >Sign In</button>
               </form>

               <button>Create a New Account</button>
               <p class="text-center"><small>By signing in, you agree to IMDb's Conditions of Use and Privacy Policy.</small></p>
           </div>
           <div className="perks">
                <h1>Benefits of your free IMDb account</h1>
                <div>
                    <p><strong>Personalized Recommendations</strong></p>
                    <p>Discover shows you'll love.</p>
                </div>
                <div>
                    <p><strong>Your Watchlist</strong></p>
                    <p>Track everything you want to watch and receive e-mail when movies open in theaters.</p>
                </div>
                <div>
                    <p><strong>Your Ratings</strong></p>
                    <p>Rate and remember everything you've seen.</p>
                </div>
                <div>
                    <p><strong>Contribute to IMDb</strong></p>
                    <p>Add data that will be seen by millions of people and get cool badges.</p>
                </div>
           </div>
       </div>
    );

}