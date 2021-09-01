import React from "react";

class Total extends React.Component{
    render(){
        const subTotal = this.props.total;
        let delivery = 50;
        const discountedDel = 10;
        const subDelivery = 500;
        delivery = subTotal < subDelivery ? delivery : discountedDel;
        const toSpend = subDelivery - subTotal;
        const total = subTotal + delivery;
        return(
            <>
                <h3 className='orders__delivery'>Delivery: &#163; {delivery.toFixed(2)}</h3>
                {toSpend > 0 && <div className='orders__del-descr'>spend another &#163; {toSpend.toFixed(2)} to get discounted delivery for only &#163; {discountedDel.toFixed(2)}</div>}
                <h3 className='orders__total'>Total: &#163; {total.toFixed(2)}</h3>
            </>
        )
    }
}

export default Total;