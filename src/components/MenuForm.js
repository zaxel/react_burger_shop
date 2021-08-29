import React from 'react';



class MenuForm extends React.Component{

    titleRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descrRef = React.createRef();
    imageRef = React.createRef();

    createBurger = (e) => {
        e.preventDefault();
        e.currentTarget.reset()
        const burger = {
            name: this.titleRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            descr: this.descrRef.current.value,
            image: this.imageRef.current.value,
        }
        this.props.addBurger(burger)
    }
    render(){
        return(
            <form onSubmit={this.createBurger} className='editor__form editor-form'>
                <div className='editor-form__main'>
                    <input ref={this.titleRef} type="text" name="burger_title" placeholder="Title"/>
                    <input ref={this.priceRef} type="number" step=".01" name="burger_price" placeholder="Price"/>
                </div>
                <select ref={this.statusRef} name="burger_status">
                    <option defaultValue="status">available</option>
                    <option value="out_of_stock">Out of stock</option>
                </select>
                <textarea ref={this.descrRef} name="burger_descr" placeholder="Enter burger description" rows="3"/>
                <input ref={this.imageRef} type="text" name="burger_img" placeholder="Image"/>
                <button className="select-button">Add To Menu<span>Add To Menu</span></button>
            </form>
        )
    }
}

export default MenuForm;