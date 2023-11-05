import React, {useState} from 'react';
import Login from "../components/loginSignup/Login";
import Signup from "../components/loginSignup/Signup";

 function FormSwitch () {
    const [currentForm, setCurrentForm] =useState('login');
    const toggleForm =(formName) =>{
        setCurrentForm(formName);
    }

    return(
        <div >
            {currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Signup onFormSwitch={toggleForm}/>}
        </div>
    );
    }

export default FormSwitch
