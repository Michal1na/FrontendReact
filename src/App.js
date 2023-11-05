import React from "react";
import './App.css';
import './components/form/Form.css';
import Header from "./components/header/Header";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Breakfasts from './pages/Breakfasts';
import Baking from './pages/Baking';
import MainDishes from './pages/Main-dishes';
import Sweets from './pages/Sweets';
import AddRecipePage from "./pages/Form";
import LoginSignup from "./pages/LoginSignup";


const theme = createTheme({
    palette: {
        primary: {
            main: '#A93C3C'

        },
        secondary:{
            main: '#3ca9a9'
        },
    },
});

function App() {


  return (
      <ThemeProvider theme={theme}>    <div className="App">
{/*Wszystko  do browser router*/}
             <Router>

                 <Header/>
                    <Routes>
                        <Route path='/home' element={<Home/>}/>
                        <Route path='/main-dishes' element={<MainDishes/>}/>
                        <Route path='/breakfasts' element={<Breakfasts/>}/>
                        <Route path='/baking' element={<Baking/>}/>
                        <Route path='/sweets' element={<Sweets/>}/>
                        <Route path='/addrecipeform' element={<AddRecipePage/>}/>
                        <Route path='/login' element={<LoginSignup/>}/>
                    </Routes>


             </Router>


      </div>
      </ThemeProvider>

  );
}

export default App;
