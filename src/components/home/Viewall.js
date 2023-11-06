import * as React from 'react';
import  {useState} from 'react';
import Popup from "./popup/Popup";
import ModeIcon from '@mui/icons-material/Mode';

export default function RecipePrev ({recipes}) {

    const [isOpen, setIsOpen] = useState(false);
    const togglePopup =(notes) => {
        setMessage(notes);
        setIsOpen(!isOpen);
    }
    const [message, setMessage] = useState({message:""});


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

                <button className="button" onClick={()=>togglePopup(recipe.notes)} > View notes >> </button>

                <button className="button" onClick={()=>togglePopup("Deleted")} > Delete </button>
                <button className="button-edit button" onClick={()=>togglePopup("Edit")}>
                    <ModeIcon/>
                </button>


            </div>)}
            )}

            { isOpen ? <Popup handleClose={togglePopup} content={message}>  </Popup>:""}
        </>

    )

}
