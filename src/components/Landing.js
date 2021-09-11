import React from 'react';
import PropTypes from "prop-types"; 
import restaurants from '../sample-restaurants';

class Landing extends React.Component {
    static propTypes = {
        history: PropTypes.object
    }
    state = {
        display: false,
        title: '',
        url: '',
    }

    displayList = () => {
        const {display} = this.state;
        this.setState({display: !display})
    }
    getTitle = (restaurant) => {
        const {title, url} = restaurant;
        this.setState({
            title, url, display: false
        })
    }
    visitRestaurant = () => {
        const {url} = this.state;
        this.props.history.push(`/restaurant/${url}`)
    }

    render() {

        return (
            <div className='rest'>
                <div className='rest__select-top select-top'>
                        
                    <div onClick={this.displayList} className='select-top__header'>{this.state.title ? this.state.title : 'Select restaurant'}</div>
                    <div className='select-top__picker picker'>
                        <div className='picker__up'><i className="arrow_up"></i></div>
                        <div className='picker__down'><i className="arrow_down"></i></div>
                    </div>
                </div>

                {this.state.display ? <div className='rest__select-bottom select-bottom'>
                    <ul>
                        {restaurants.map((restaurant) => {
                            return <li onClick={() => this.getTitle(restaurant)} key={restaurant.id}>{restaurant.title}</li>
                        })}
                    </ul>
                </div> : null}

                {!this.state.display && this.state.title ? <button onClick={()=>this.visitRestaurant()} className='rest__select-button select-button'>
                    visit the restaurant
                    <span>visit the restaurant</span>
                </button> : null}

            </div>


        )
    }
}
export default Landing;