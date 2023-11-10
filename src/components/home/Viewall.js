import * as React from 'react';
import { useState, useEffect } from 'react';
import Popup from "./popup/Popup";
import ModeIcon from '@mui/icons-material/Mode';

export default function RecipePrev({ recipessrc }) {

    const [recipes, setRecipes] = useState([]);
    const getRecipes = () => {
        fetch(`${process.env.REACT_APP_API_HOST}${recipessrc}`, { mode: 'cors' })
            .then(res => res.json())
            .then(recipe => { setRecipes(recipe) })
    }
    useEffect(getRecipes, []);

    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = (notes) => {
        setMessage(notes);
        setIsOpen(!isOpen);
    }
    const [message, setMessage] = useState({ message: "" });

    const handleDelete = (id) => {
        fetch(`${process.env.REACT_APP_API_HOST}/recipes/delete/${id}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" },
        }).then(() => {
            console.log(' recipe deleted')
            getRecipes();
        })
        togglePopup("Deleted")
    }

    // const [imageSourceUrl, setImageSourceUrl] = useState("");

    // const getimage = () => {
    //     fetch('https://www.jadlonomia.com/wp-content/uploads/2018/10/IMG_0262_male-600x900.jpg', { 
    //         referrerPolicy: "no-referrer",mode: 'no-cors',cache: "no-cache" })
    //         .then(res => res.blob())
    //         .then((myBlob) => {
    //             const objectURL = URL.createObjectURL(myBlob);
    //             console.log(objectURL)
    //             setImageSourceUrl(objectURL);
    //         }
    //         )
    // }
    // useEffect(getimage,[]);


    return (
        <>
            {recipes.map((recipe) => {

                return (
                    <div className="recipe-prev">
                        <h2> {recipe.title}</h2>
                        {/* <img alt="obrazek" src={imageSourceUrl}/> */}
                        <a href={recipe.url}>
                            <button className="button"  > View recipe >> </button>
                        </a>

                        <button className="button" onClick={() => togglePopup(recipe.notes)} > View notes >> </button>

                        <button className="button" onClick={() => handleDelete(recipe.id)} > Delete </button>
                        <button className="button-edit button" onClick={() => togglePopup("Edit")}>
                            <ModeIcon />
                        </button>


                    </div>)
            }
            )}

            {isOpen ? <Popup handleClose={togglePopup} content={message}>  </Popup> : ""}
        </>

    )

}
