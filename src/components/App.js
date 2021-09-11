import React from "react";
import Menu from "./Menu";
import Orders from "./Orders";
import MenuAdmin from "./MenuAdmin";
import base from '../base';
// import firebase from 'firebase/app';




class App extends React.Component{
    state = {
        burgers: {},
        order: {},
        scrollingDirection: {},
        // numberClasses: {},
    }
    componentDidMount(){
        const {params} = this.props.match;
        const scrollingDirection = {isScrolOrdrNumUp: true}
        const localStorageRef = localStorage.getItem(params.restaurantId);
        // console.log({order: JSON.parse(localStorageRef)})

        if(localStorageRef){
            // this.setState({order: JSON.parse(localStorageRef)})
            this.setState({order: JSON.parse(localStorageRef)})
        }
       
        this.ref = base.syncState(`${params.restaurantId}/burgers`, {
            context: this,
            state: 'burgers'
          });
        this.setState({scrollingDirection})
    }

    componentDidUpdate(){
        this.setLocalStore();
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

    setLocalStore = () => {
        const {params} = this.props.match;
        const {order} = this.state;
        const orderNames = Object.keys(order)

        if(!orderNames.length) localStorage.setItem(params.restaurantId, {});
        
        let storeValue = orderNames.reduce((acc, item, i)=>{
            return {...acc, [item]: {
                amount: order[item]['amount'], 
                className: order[item]['className'],
                transitionClass: order[item]['transitionClass']
            }}
        }, {})
        // if(!Object.keys(storeValue).length) return;
        localStorage.setItem(params.restaurantId, JSON.stringify(storeValue));
    }
    
    addBurger = (burger) => {
        //making copy of state 
        const burgers = {...this.state.burgers};
        //adding new burger
        burgers[`burger${Date.now()}`]=burger;
        //add our burgers to state
        this.setState({burgers})
    }
    removeBurger = (key) => {
        //making copy of burgers state 
        const burgers = {...this.state.burgers};
        //delete burger
        burgers[key] = null;
        //add our burgers to state
        this.setState({burgers})

        //making copy of order state 
        const order = {...this.state.order};
        //if burger exist delete burger
        order[key] && delete order[key] 
        //add our order to state
        this.setState({order});
    }
    changeBurger = (burger, key) => {
        //making copy of state 
        const burgers = {...this.state.burgers};
        //changing burger
        burgers[key]=burger;
        //add our burgers to state
        this.setState({burgers})
    }
    addOrder = (key) => {
        let order = {...this.state.order};
        let amount = order[key]?.['amount'] + 1 || 1;
        order[key] = {
            amount: amount,
            className: '',
            transitionClass: ''
         }
        this.setState({order}, ()=>{
            this.changeScrollDirection(true);
            this.changeNumberClasses(key, true);
        });
    }
    removeOrder = (key) => {
        const order = {...this.state.order};

        order[key]?.['amount'] > 1 ? order[key]['amount'] -= 1 : delete order[key]; 
        this.setState({order}, ()=>{
            this.changeScrollDirection(false);
            this.changeNumberClasses(key, false);
        });
    }
    loadSamples = (burgers) => {
        this.setState({burgers: burgers})
    }


    changeScrollDirection = (isDirectionUp) => {
        const scrollingDirection = {...this.state.scrollingDirection}
        scrollingDirection['isScrolOrdrNumUp'] = isDirectionUp;
        this.setState({scrollingDirection});
    }

    changeNumberClasses = (key, addingOrder) => {
        const order = {...this.state.order}
        
        if(!order[key]) return;
        order[key]['transitionClass'] = 'orders__transition';
        this.setState({order});

        if(addingOrder){
            order[key]['className'] = 'orders__number-down';
            this.setState({order});
            setTimeout(()=>{
                order[key]['transitionClass'] = 'orders__transition orders__transition-up'
                this.setState({order})

                setTimeout(()=>{
                    order[key]['transitionClass'] = 'none orders__transition'
                    this.setState({order})
                }, 800)

            }, 0)
         } else {
            order[key]['className'] = 'orders__number-up';
            this.setState({order});
            setTimeout(()=>{
                order[key]['transitionClass'] = 'orders__transition orders__transition-down'
                this.setState({order})

                setTimeout(()=>{
                    order[key]['transitionClass'] = 'none orders__transition'
                    this.setState({order})
                }, 800)

            }, 0)
         }
        setTimeout(()=>{
            order[key]['className'] = 'orders__number'
            this.setState({order})
        }, 0)

    }

    



    render(){
        return(
            <div className='burgers'>
                <Menu title='Hot Burgers Best' burgers={this.state.burgers} addOrder={this.addOrder}/>
                <Orders burgers={this.state.burgers} order={this.state.order} scrollingDirection={this.state.scrollingDirection} numberClasses={this.state.numberClasses} removeOrder={this.removeOrder}/>
                <MenuAdmin addBurger={this.addBurger} loadSamples={this.loadSamples} burgers={this.state.burgers} changeBurger={this.changeBurger} removeBurger={this.removeBurger}/>
            </div>
        )
    }
}

export default App;