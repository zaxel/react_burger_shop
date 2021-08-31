import React from "react";

class Orders extends React.Component{
    key = Object.keys(this.props.burgers);
    render(){
        return(
            <div className='burgers__orders orders'>
                <h2 className='orders__tittle'>
                    Your Order
                </h2>
                <div className='orders__list-cont'>
                    <h3 className='orders__list-noitem'>Please make your order</h3>
                    <div className='orders__list-item'>3 x The Impossible Burger</div>
                    <div className='orders__list-item'>1 x The Original</div>
                </div>
                <div className='orders__total-cont'>
                    <h3 className='orders__delivery'>Delivery: &#163; 120.00</h3>
                    <div className='orders__del-descr'>spend another &#163; 55.00 to get discounted delivery for only &#163; 10.00</div>
                    <h3 className='orders__total'>Total: &#163; 320.00</h3>
                </div>
            </div>
            
        )
    }
}

export default Orders;