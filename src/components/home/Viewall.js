import * as React from 'react';

export default function RecipePrev ({recipes}) {
    return (
        <>
            {recipes.map((recipe) => {

                    return(
            <div className="recipe-prev">
                <h2> {recipe.title}</h2>
                <img alt="obrazek"/>
                <a href={recipe.url}>
                    <button className="button"  > View recipe >> </button>
                </a>

                <button className="button" > View notes >> </button>
                <button className="button" > Delete </button>
            </div>)}
            )}
        </>

    )

}
