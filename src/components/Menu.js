import React from "react";
import Header from "./Header";
import Burger from "./Burger";

class Menu extends React.Component{
    render(){
        return(
            <div className='burgers__menu menu'>
                <Header {...this.props}/>
                <ul className='burgers__list'>
                    <Burger/>
                </ul>
            </div>
            
        )
    }
}

export default Menu;