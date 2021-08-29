import React from "react";
import Menu from "./Menu";
import Orders from "./Orders";
import MenuAdmin from "./MenuAdmin";
import NotFound from "./NotFound";

class App extends React.Component{
    render(){
        return(
            <div className='burger'>
                {/* <Menu title='Hot Burgers Best'/>
                <Orders/>
                <MenuAdmin/> */}
                <NotFound/>
            </div>
        )
    }
}

export default App;