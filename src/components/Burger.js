import React from "react";

class Burger extends React.Component{
   
    render(){
    const isAvailable = this.props.burger.status === 'available';

        return( 
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
                        <button onClick={() => this.props.addOrder(this.props.index)} className={`select-button descr-cont__bottom ${!isAvailable && 'disabled'}`} >Order Now<span>Order Now</span></button>
                    </div>
                    <div className={`descr-cont__banner ${isAvailable && 'disabled'}`}>
                        out of stock
                    </div>
                </div>
            </div>
        )
    }
}

export default Burger;