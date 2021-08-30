import React from "react";
import MenuForm from "./MenuForm";
import sample_burgers from "../sample-burgers";

class MenuAdmin extends React.Component{
    
    render(){
        return(
            <div className='burgers__editor editor'>
                <h2 className='editor__tittle'>Edit Menu</h2>
                <div className='editor__forms'>
                    <MenuForm {...this.props}/>
                </div>
                <button onClick={() => this.props.loadSamples(sample_burgers)} className="editor__button select-button">Load Burgers<span>Load Burgers</span></button>
            </div>
            
        )
    }
}

export default MenuAdmin;