import React from "react";
import MenuForm from "./MenuForm";

class MenuAdmin extends React.Component{
    render(){
        return(
            <div className='burger__editor editor'>
                <h2 className='editor__tittle'>Edit Menu</h2>
                <div className='editor__forms'>
                    <MenuForm {...this.props}/>
                    <MenuForm/>
                    <MenuForm/>
                </div>
                <button className="editor__button select-button">Load Burgers<span>Load Burgers</span></button>
            </div>
            
        )
    }
}

export default MenuAdmin;