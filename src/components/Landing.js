import React from 'react';
import restaurants from '../sample-restaurants';

class Landing extends React.Component {
    render() {

        return (
            <div className='rest'>
                <div className='rest__select-top select-top'>
                    <div className='select-top__header'>Выберите ресторан</div>
                    <div className='select-top__picker picker'>
                        <div className='picker__up'></div>
                        <div className='picker__down'></div>
                    </div>
                </div>

                <div className='rest__select-bottom select-bottom'>
                    <ul>
                        {restaurants.map((restaurant) => {
                            return <li key={restaurant.id}>{restaurant.title}</li>
                        })}
                    </ul>
                </div>

                <button className='rest__select-button'>Перейти в ресторан</button>

            </div>


        )
    }
}
export default Landing;