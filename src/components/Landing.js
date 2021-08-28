import React from 'react';
import restaurants from '../sample-restaurants';

class Landing extends React.Component {
    render() {

        return (
            <div className='rest'>
                <div className='rest__select-top select-top'>
                    <div className='select-top__header'>Select restaurant</div>
                    <div className='select-top__picker picker'>
                        <button className='picker__up'><i class="arrow_up"></i></button>
                        <button className='picker__down'><i class="arrow_down"></i></button>
                    </div>
                </div>

                <div className='rest__select-bottom select-bottom'>
                    <ul>
                        {restaurants.map((restaurant) => {
                            return <li key={restaurant.id}>{restaurant.title}</li>
                        })}
                    </ul>
                </div>

                <button className='rest__select-button select-button'>
                    visit the restaurant
                    <span>visit the restaurant</span>
                </button>

            </div>


        )
    }
}
export default Landing;