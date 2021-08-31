import React from "react";


class Orders extends React.Component{
    

    render(){
        
        const burgers = this.props.burgers;
        const order = this.props.order;
        const keys = Object.keys(order);

        

        const total = keys.reduce((acc, item)=>{
            if(burgers[item].status !== 'available')
            return acc

            return acc + burgers[item].price * order[item];
        }, 0)
        
        return(
            <div className='burgers__orders orders'>
                <h2 className='orders__tittle'>
                    Your Order 
                </h2>
                <ul className='orders__list-cont'>
                    <h3 className='orders__list-noitem'>Please make your order</h3>
                    
                    {keys.map((item)=>{
                        return <li key={item} className='orders__list-item'>{order[item]} x {burgers[item].name}</li>
                    })}
                </ul>
                <div className='orders__total-cont'>
                    <h3 className='orders__delivery'>Delivery: &#163; 120.00</h3>
                    <div className='orders__del-descr'>spend another &#163; 55.00 to get discounted delivery for only &#163; 10.00</div>
                    <h3 className='orders__total'>Total: &#163; {total}</h3>
                </div>
            </div>
            
        )
    }
}

export default Orders;