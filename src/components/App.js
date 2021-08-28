import React from "react";
import Menu from "./Menu";
import Orders from "./Orders";
import MenuAdmin from "./MenuAdmin";

class App extends React.Component{
    render(){
        return(
            <div className='burger'>
                <Menu/>
                <Orders/>
                <MenuAdmin/>
            </div>
        )
    }
}

export default App;