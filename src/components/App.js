import React from "react";
import Menu from "./Menu";
import Orders from "./Orders";
import MenuAdmin from "./MenuAdmin";

class App extends React.Component{
    state = {
        burgers: {},
        order: {},
    }
    addBurger = (burger) => {
        //making copy of state 
        const burgers = {...this.state.burgers};
        //adding new burger
        burgers[`burger${Date.now()}`]=burger;
        //add our burgers to state
        this.setState({burgers})
    }
    render(){
        return(
            <div className='burger'>
                <Menu title='Hot Burgers Best'/>
                <Orders/>
                <MenuAdmin addBurger={this.addBurger}/>
            </div>
        )
    }
}

export default App;