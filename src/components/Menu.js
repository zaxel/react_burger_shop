import React from "react";
import Header from "./Header";
import Burger from "./Burger";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Menu extends React.Component{
    render(){
        return(
            <div className='burgers__menu menu'>
                <Header {...this.props}/>
                {/* <ul className='burgers__list'> */}
                <TransitionGroup component="ul" className="burgers__list">
                    {Object.keys(this.props.burgers).map((el)=>{
                        return(
                            <CSSTransition classNames="burgers__list" key={el} timeout={{enter: 800, exit: 800}}>
                             <li className='burger' key={el}><Burger burger={this.props.burgers[el]} index={el} addOrder={this.props.addOrder}/></li>
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>
                {/* </ul> */}
            </div>
            
        )
    }
}

export default Menu;