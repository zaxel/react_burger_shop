import React from "react";

class Burger extends React.Component{
    render(){
        return( 
            <li className='burger'>
                <div className='burger__container'>
                    <div className='burger__pic-cont'><img src={this.props.burger.image} alt="Burger"/></div>
                    <div className='burger__descr-cont descr-cont'>
                        <div className='descr-cont__top-cont'>
                            <div className='descr-cont__title-cont'>
                                <div className='descr-cont__title'>{this.props.burger.name}</div>
                                <div className='descr-cont__price'>&#163; {this.props.burger.price}</div>    
                            </div>
                            <div className='descr-cont__descr'>{this.props.burger.descr}</div>
                        </div> 
                        <div className='descr-cont__button-cont'>
                            <button className="select-button    descr-cont__bottom">Order Now<span>Order Now</span></button>
                        </div>
                        
                    </div>
                </div>
            </li>
        )
    }
}

export default Burger;