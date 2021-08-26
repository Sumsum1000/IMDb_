import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import './createAccount.css';
import logo from './Images/IMDb.png';


export default function CreateAccount (){

    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = (values, e) => {
        e.target.reset();
    }

    return(
        <div className="createAccount-container">
                 <img src={logo} alt='logo' />
              <form onSubmit={handleSubmit(onSubmit)}>
                  <h1>Create account</h1>
                    <label>Your name</label>
                    <input
                    type="text"
                    autoComplete= "off"
                    {...register("name", {
                    required: "Required",
                    })}
                    />
                    <ErrorMessage
                    errors={errors}
                    name="name"
                    // message = "invalid Username"
                    // render={({ message }) => <p>{message}</p>}
                    />

                    <label>Email</label>
                    <input
                    type="email"
                    autoComplete= "off"
                    {...register("Email", {
                    required: "Required",
                    // pattern: {
                    //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    //     message: "invalid email address"
                    //   }
                    })}
                    />
                    <ErrorMessage
                    errors={errors}
                    name="Email"
                    message = "invalid Email"
                    render={({ message }) => <p>{message}</p>}
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

                    <label>Re-enter password</label>
                    <input
                    type="password"
                    autoComplete= "off"
                    {...register("Re-enter password", {
                    required: "Required",
                   
                    })}
                    />
                    <ErrorMessage
                    errors={errors}
                    name="Re-enter password"
                    message = "password must contain at least 8 characters. must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number. Can contain special characters"
                    render={({ message }) => <p>{message}</p>}
                    />

                    <button type="submit" >Create your IMDB account</button>
               </form>
        </div>
    )

}