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
    addOrder = (key) => {
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({order});
    }
    removeOrder = (key) => {
        const order = {...this.state.order};
        order[key] > 1 ? order[key] -= 1 : delete order[key];
        this.setState({order});
    }
    loadSamples = (burgers) => {
        this.setState({burgers: burgers})
    }
    render(){
        return(
            <div className='burgers'>
                <Menu title='Hot Burgers Best' burgers={this.state.burgers} addOrder={this.addOrder}/>
                <Orders burgers={this.state.burgers} order={this.state.order} removeOrder={this.removeOrder}/>
                <MenuAdmin addBurger={this.addBurger} loadSamples={this.loadSamples}/>
            </div>
        )
    }
}

export default App;