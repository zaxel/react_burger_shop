import React from "react";
import MenuForm from "./MenuForm";

class MenuAdmin extends React.Component{
    render(){
        return(
            <div className='burger__editor editor'>
                <h2 className='editor__tittle'>Edit Menu</h2>
                <MenuForm/>
            </div>
            
        )
    }
}

export default MenuAdmin;