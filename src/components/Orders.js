import React from "react";
import Total from "./Total";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Orders extends React.Component{
   
    constructor(){
        super()
        this.myClass = 'none'

    }
    
    componentDidUpdate(){
        console.log('updated')
    }

    setMoveUpCss = (item) => {
        this.myClass = item;
        console.log(this.myClass)
   }



    render(){
    // let timer = null;
        console.log('render')
        const burgers = this.props.burgers;
        const order = this.props.order;
        const { isScrolOrdrNumUp } = this.props.scrollingDirection;
        const { className } = this.props.numberClasses;
        const keys = Object.keys(order);
        
        if(Object.entries(burgers).length === 0) return <div className='burgers__orders orders'><h2 className='orders__tittle'>Your Order </h2></div>;


        const isAvailable =(burger) => {
            return burgers[burger].status === 'available';
        }
        
        const total = keys.reduce((acc, item)=>{
            if(isAvailable(item))
            return acc + burgers[item].price * order[item];

            return acc

        }, 0)

        

        return(
            <div className='burgers__orders orders'>
                <h2 className='orders__tittle'>
                    Your Order 
                </h2>
                {!keys.length && <h3 className='orders__list-noitem'>Please make your order</h3>}
                <TransitionGroup component='ul' className='orders__list-cont'>
                    {keys.map((item)=>{
                        return( 
                            <CSSTransition classNames='orders__list-cont' key={item} timeout={{enter: 800, exit: 800}}>
                                <li key={item} className={`orders__list-item ${!isAvailable(item) ? 'orders__list-outofstock' : ''}`}>

                                {!isAvailable(item) &&
                                    <h4 className='orders__outofstock-warning'>ouof stock temporary</h4> }
                                    <div className='orders__title-cont'>
                                        <div className='orders__list-info'>
                                            <span className={className || 'orders__number'}>{order[item]}</span>
                                            <span className='orders__transition'>{isScrolOrdrNumUp ? order[item]-1 : order[item]+1}</span>
                                        <span> x {burgers[item].name} &nbsp;&nbsp;&nbsp;&#163;{parseFloat(burgers[item].price).toFixed(2)}</span></div>
                                        <button onClick={()=>{this.props.removeOrder(item); this.setMoveUpCss()}} className='orders__list-button   select-button'>X<span>X</span></button> 
                                    </div>
                                
                                </li>
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>
                <div className='orders__total-cont'>
                    {total > 0 && <Total total={total}/>}
                </div>
            </div>
            
        )
    }
}
 
export default Orders;

 
