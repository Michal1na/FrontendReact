import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import RecipePrev from "../components/home/Viewall";

export default function Home() {

    return (
        <>
            <div className="addrecipe">
                <Link to='/addrecipeform'>
                    <button className="button " > Add new recipe</button>
                </Link>
            </div>

            <div className='home'>
                <RecipePrev recipessrc='http://localhost:3001/recipes/get'/>
            </div>

        </>
    );

}
