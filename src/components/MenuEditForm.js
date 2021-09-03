import React from 'react';



class MenuEditorForm extends React.Component{
    
    render(){
        return(
            <form className='editor__form editor-form'>
                <div className='editor-form__main'>
                    <input type="text" name="burger_title" placeholder="Title"/>
                    <input type="number" step=".01" name="burger_price" placeholder="Price"/>
                </div>
                <select name="burger_status">
                    <option defaultValue="status">available</option>
                    <option value="out_of_stock">Out of stock</option>
                </select>
                <textarea name="burger_descr" placeholder="Enter burger description" rows="3"/>
                <input type="text" name="burger_img" placeholder="Image"/>
        
            </form>
        )
        

    }
}

export default MenuEditorForm;