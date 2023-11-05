import React, {useState} from "react";
import './LoginSignup.css';

export default function Signup(props)  {
    const [email, setEmail] =useState("");
    const [pass, setPass] =useState("")
    const [name, setName] =useState("")

    const handleSubmitSignup=(e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="loginsignupform">
            <>
                <form className="signup-form" onSubmit={handleSubmitSignup} >

                    <label htmlFor="name"> name </label>
                    <input value={name}
                           type="text"
                           placeholder="full name"
                           id="name"
                           name="name"

                    />

                    <label htmlFor="email"> email </label>
                    <input value={email}
                           type="email"
                           placeholder="xxx@gmail.com"
                           id="email"
                           name="email"
                           onChange={(e)=> setEmail(e.target.value)}/>

                    <label htmlFor="password"> password </label>
                    <input value= {pass}
                           type="password"
                           placeholder="*********"
                           id="password"
                           name="password"
                           onChange={(e)=> setPass(e.target.value)}/>

                    <button type="submit" className="button"> Sign Up</button>
                </form>
                <button className="link-btn"
                        onClick={()=>props.onFormSwitch('login')}>
                    Already have an account? Login here.
                </button>

            </>
        </div>
    );
}


