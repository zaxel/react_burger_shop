import React from "react";
import PropTypes from "prop-types";
import MenuForm from "./MenuForm";
import UserProfile from "./UserProfile";
import sample_burgers from "../sample-burgers";
import MenuEditorForm from "./MenuEditForm";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class MenuAdmin extends React.Component{
    static propTypes = {
        burgers: PropTypes.object,
        loadSamples: PropTypes.func,
        changeBurger: PropTypes.func,
        removeBurger: PropTypes.func,
        handleLogout: PropTypes.func
    }
    
    
    render(){
        return(
            <div className='burgers__editor editor'>
                <UserProfile handleLogout={this.props.handleLogout}/>
                <h2 className='editor__tittle'>Edit Menu</h2>
                    <TransitionGroup component='div' className="edtr">
                        {Object.keys(this.props.burgers).map((key)=> {
                            return(
                                <CSSTransition classNames='edtr' key={key} timeout={{enter: 800, exit: 800}}>
                                    <MenuEditorForm key={key} index={key} burger={this.props.burgers[key]} changeBurger={this.props.changeBurger} removeBurger={this.props.removeBurger}/>
                                </CSSTransition>)
                        })}
                    <MenuForm {...this.props}/>
                    </TransitionGroup>
                <button onClick={() => this.props.loadSamples(sample_burgers)} className="editor__button select-button">Load Burgers Samples<span>Load Burgers Samples</span></button>
            </div>
            
        )
    }
}

export default MenuAdmin;