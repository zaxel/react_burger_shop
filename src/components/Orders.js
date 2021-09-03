import React from "react";
import Total from "./Total";


class Orders extends React.Component{
    

    render(){
        
        const burgers = this.props.burgers;
        const order = this.props.order;
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
                <ul className='orders__list-cont'>
                    {!keys.length && <h3 className='orders__list-noitem'>Please make your order</h3>}
                    
                    
                    {keys.map((item)=>{
                        
                        return <li key={item} className={`orders__list-item ${!isAvailable(item) ? 'orders__list-outofstock' : ''}`}>
                            
                        {!isAvailable(item) &&
                            <h4 className='orders__outofstock-warning'>ouof stock temporary</h4> }
                            <div className='orders__title-cont'>
                                <div className='orders__list-info'>{order[item]} x {burgers[item].name} &nbsp;&nbsp;&nbsp;&#163;{burgers[item].price.toFixed(2)}</div>
                                <button onClick={()=>{this.props.removeOrder(item)}} className='orders__list-button   select-button'>X<span>X</span></button> 
                            </div>
                            
                        </li>
                    })}
                </ul>
                <div className='orders__total-cont'>
                    {total > 0 && <Total total={total}/>}
                </div>
            </div>
            
        )
    }
}
 
export default Orders;

 
