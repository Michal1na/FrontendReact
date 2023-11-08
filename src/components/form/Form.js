import React, {useState} from 'react';

 const AddRecipeForm = () => {

     const [title, setTitle] = useState('');
     const [url, setUrl] = useState('');
     const [notes, setNotes] = useState('');
     const [category, setCategory] = useState('');

     const handleSubmit =(e) => {
        e.preventDefault()
         const recipe ={ title, url, notes, category};

         fetch('http://localhost:3001/recipes/addnew', {
             method:'POST',
             headers: {"Content-Type": "application/json"},
             body: JSON.stringify(recipe)
         }).then(()=> {
             console.log('new recipe added')
         })


     }



    return(
        <div className ="create">
            <h2> Add new recipe!</h2>
            <form onSubmit= {handleSubmit}>
                <label > Title</label>
                <input type="text" required value={title} onChange={(e)=> setTitle(e.target.value)}/>

                <label > Url </label>
                <input type="url" required value={url} onChange={(e)=> setUrl(e.target.value)}/>

                <label > Notes</label>
                <textarea name="notes" id="notes" cols="60" rows="15" value={notes} onChange={(e)=> setNotes(e.target.value)} ></textarea>

                <label > Category </label>

                <select value={category} onChange={(e)=> setCategory(e.target.value)}>
                    <option value="baking">Baking</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="main-dishes">Main dishes</option>
                    <option value="sweets">Sweets</option>
                </select>

                <button className="button"> Delete </button>
                <button className="button"> Save </button>
            </form>
        </div>
    );

}
export default AddRecipeForm;
