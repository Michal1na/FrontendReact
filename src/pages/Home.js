import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import RecipePrev from "../components/home/Viewall";
import Recipes from '../components/home/db.json';

export default function Home() {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/recipes/get', {mode: 'cors'})
            .then(res => res.json())
            .then(recipe => {setRecipes(recipe)})
    }, []);

    return (
        <>
            <div className="addrecipe">
                <Link to='/addrecipeform'>
                    <button className="button " > Add new recipe</button>
                </Link>
            </div>

            <div className='home'>
                <RecipePrev recipes={recipes}/>
            </div>

        </>
    );

}
