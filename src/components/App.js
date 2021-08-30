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
    loadSamples = (burgers) => {
        this.setState({burgers: burgers})
    }
    render(){
        return(
            <div className='burgers'>
                <Menu title='Hot Burgers Best' burgers={this.state.burgers}/>
                <Orders/>
                <MenuAdmin addBurger={this.addBurger} loadSamples={this.loadSamples}/>
            </div>
        )
    }
}

export default App;