import React from 'react';

 const Create = () => {
    return(
        <div className ="create">
            <h2> Add new recipe!</h2>
            <form>
                <label > Title</label>
                <input type="text" required/>

                <label > Url </label>
                <input type="url" required/>

                <label > Notes</label>
                <textarea name="notes" id="notes" cols="60" rows="15"  ></textarea>

                <label > Category </label>
                <select>
                    <option value="baking">Baking</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="main-dishes">Main dishes</option>
                    <option value="sweets">Sweets</option>
                </select>
                <button className="delete"> Delete </button>

                <button className="save"> Save </button>
            </form>
        </div>
    );

}
export default Create;
