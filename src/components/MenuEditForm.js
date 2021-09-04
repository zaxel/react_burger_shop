import React from 'react';



class MenuEditorForm extends React.Component{
    
    
    changeHandler = (e) => {
        const formData = {
            ...this.props.burger
        }
        formData[e.currentTarget.name] = e.currentTarget.value;
        this.props.changeBurger(formData, this.props.index);
        // console.log(e.currentTarget.value);
    }
    
    render(){
        
        return(
            <form onSubmit={(e)=>{e.preventDefault(); this.props.removeBurger(this.props.index)}} className='editor__form editor-form'>
                <div className='editor-form__main'>
                    <input onChange={this.changeHandler} type="text" name="name" value={this.props.burger.name}/>
                    <input onChange={this.changeHandler} type="number" step=".01" name="price" value={this.props.burger.price}/>
                </div>
                <select onChange={this.changeHandler} name="status" value={this.props.burger.status}>
                    <option value="available">available</option>
                    <option value="out_of_stock">Out of stock</option>
                </select>
                <textarea onChange={this.changeHandler} name="descr" rows="3" value={this.props.burger.descr}/>
                <input onChange={this.changeHandler} type="text" name="image" value={this.props.burger.image}/>
                <button className="select-button">remove item<span>remove item</span></button>
            </form>
        )
        

    }
}

export default MenuEditorForm;