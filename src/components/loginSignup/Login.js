import React, {useState} from "react";
import './LoginSignup.css';

export default function Login(props)  {
     const [email, setEmail] =useState("");
     const [pass, setPass] =useState("")

     const handleSubmitLogin=(e) => {
         e.preventDefault();
         console.log(email);

         fetch(`http://localhost:3001/users/login`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, pass})
           
        }).then((response) => {
            if(response.ok) {
            console.log('user logged')
            
            window.location= 'http://localhost:3000/home'
            } else {
                throw new Error("HTTP status " + response.status);
            }
        })
     }

    


    return (
        <div className="loginsignupform">
        <>
            <form className="login-form" onSubmit={handleSubmitLogin} >
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

                <button type="submit" className="button"> Log In</button>
            </form>
            <button className="link-btn"
                    onClick={()=>props.onFormSwitch('signup')}>
                Don't have an account? Register here.
            </button>
        </>
        </div>
    );
}



