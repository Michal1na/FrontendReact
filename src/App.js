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
import Create from "./components/form/Form";

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

          <Header/>
             <Router>

                    <Routes>
                        <Route path='/' exact component={Home}/>
                        <Route path='/main-dishes' exact component={MainDishes}/>
                        <Route path='/breakfasts' exact component={Breakfasts}/>
                        <Route path='/baking' exact component={Baking}/>
                        <Route path='/sweets' exact component={Sweets}/>

                    </Routes>
             </Router>

          <Create/>
      </div>
      </ThemeProvider>

  );
}



export default App;
