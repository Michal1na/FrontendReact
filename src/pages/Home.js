import React from 'react';
import {Link} from "react-router-dom";
import RecipePrev from "../components/home/Viewall";
import Recipes from '../components/home/db.json';

export default function Home() {
    return (
        <>
            <div className="addrecipe">
                <Link to='/addrecipeform'>
                    <button className="button " > Add new recipe</button>
                </Link>
            </div>

            <div className='home'>
                <RecipePrev recipes={Recipes}/>
            </div>

        </>
    );

}
