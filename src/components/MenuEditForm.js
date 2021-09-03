import React from 'react';



class MenuEditorForm extends React.Component{
    
    render(){
        return(
            <form className='editor__form editor-form'>
                <div className='editor-form__main'>
                    <input type="text" name="burger_title" value={this.props.burger.name}/>
                    <input type="number" step=".01" name="burger_price" value={this.props.burger.price}/>
                </div>
                <select name="burger_status" value={this.props.burger.status}>
                    <option value="status">available</option>
                    <option value="out_of_stock">Out of stock</option>
                </select>
                <textarea name="burger_descr" rows="3" value={this.props.burger.descr}/>
                <input type="text" name="burger_img" value={this.props.burger.image}/>
        
            </form>
        )
        

    }
}

export default MenuEditorForm;