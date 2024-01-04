import React from "react";
import PropTypes from "prop-types"; 
import Menu from "./Menu";
import Orders from "./Orders";
import MenuAdmin from "./MenuAdmin";
import base from '../base';
import SighIn from "./Auth/SighIn";
import firebase from "firebase/app";


class App extends React.Component{
    static propTypes = {
        match: PropTypes.object
    }

    state = {
        burgers: {},
        order: {},
        scrollingDirection: {},
    }
    
    componentDidMount(){
        const restaurantId = window.location.href.split('/')[5];
        const scrollingDirection = {isScrolOrdrNumUp: true}
        const localStorageRef = localStorage.getItem(restaurantId);

        if(localStorageRef){
            this.setState({order: JSON.parse(localStorageRef)})
        }
       
        this.ref = base.syncState(`${restaurantId}/burgers`, {
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
        const {order} = this.state;
        const orderNames = Object.keys(order);
        const restaurantId = window.location.href.split('/')[4];

        if(!orderNames.length) localStorage.setItem(restaurantId, {});
        
        let storeValue = orderNames.reduce((acc, item, i)=>{
            return {...acc, [item]: {
                amount: order[item]['amount'], 
                className: order[item]['className'],
                transitionClass: order[item]['transitionClass']
            }}
        }, {})
        localStorage.setItem(restaurantId, JSON.stringify(storeValue));
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
            amount,
            className: '',
            transitionClass: ''
         }
        this.setState({order}, ()=>{
            this.changeScrollDirection(true);
            this.changeNumberClasses(key, true);
        });
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
        
        const delay = (ms) => {
            return new Promise((resolve, reject) => {
              setTimeout(() => resolve(), ms);
            });
          }

        if(!order[key]) return;
        order[key]['transitionClass'] = 'orders__transition';
        this.setState({order});

        if(addingOrder){
            order[key]['className'] = 'orders__number-down';
            this.setState({order});

            delay(0)
                .then(()=>{
                    order[key]['transitionClass'] = 'orders__transition orders__transition-up';
                    this.setState({order});
                })
                .then(()=>{return delay(800)})
                .then(()=>{
                    order[key]['transitionClass'] = 'none orders__transition';
                        this.setState({order});
                    })
         } else {
            order[key]['className'] = 'orders__number-up';
            this.setState({order});

            delay(0)
                .then(()=>{
                    order[key]['transitionClass'] = 'orders__transition orders__transition-down';
                    this.setState({order});
                })
                .then(()=>{return delay(800)})
                .then(()=>{
                        order[key]['transitionClass'] = 'none orders__transition';
                        this.setState({order});
                    })

         }
         delay(0)
            .then(()=>{
                order[key]['className'] = 'orders__number';
                this.setState({order});
            })
    }
    
    handleLogout = async () => {
        await firebase.auth().signOut();
        window.location.reload();
    }

    render(){
        return(
            <SighIn>
                <div className='burgers'>
                    <Menu 
                        title='Hot Burgers Best' 
                        burgers={this.state.burgers} 
                        addOrder={this.addOrder}/>
                    <Orders 
                        burgers={this.state.burgers} 
                        order={this.state.order} 
                        scrollingDirection={this.state.scrollingDirection} 
                        removeOrder={this.removeOrder}/>
                    <MenuAdmin 
                        addBurger={this.addBurger} 
                        loadSamples={this.loadSamples} 
                        burgers={this.state.burgers} 
                        changeBurger={this.changeBurger} 
                        removeBurger={this.removeBurger} 
                        handleLogout={this.handleLogout}/>
                </div>
            </SighIn>
        )
    }
}

export default App;