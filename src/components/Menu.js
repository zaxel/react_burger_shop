import React from "react";
import PropTypes from 'prop-types'; 
import Header from "./Header";
import Burger from "./Burger";
import { TransitionGroup, CSSTransition } from "react-transition-group";


class Menu extends React.Component{

    static propTypes = {
        burgers: PropTypes.object,
        addOrder: PropTypes.func,
    }

    
        render(){
        return(
            <div className='burgers__menu menu'>
                <Header {...this.props}/>
                <TransitionGroup component="ul" className="burgers__list">
                    {Object.keys(this.props.burgers).map((el)=>{
                        return(
                            <CSSTransition classNames="burgers__list" key={el} timeout={{enter: 800, exit: 800}}>
                             <li className='burger' key={el}><Burger burger={this.props.burgers[el]} index={el} addOrder={this.props.addOrder}/></li>
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>
            </div>
            
        )
    }
}

export default Menu;