import React, {useState} from 'react';
import PropTypes from "prop-types"; 
import restaurants from '../sample-restaurants';

const Landing = (props) => {
    const [display, setDisplay] = useState(false);
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    const displayList = () => {
        setDisplay(!display)
    }
    const getTitle = (restaurant) => {
        const {title, url} = restaurant;
        setTitle(title);
        setUrl(url);
        setDisplay(false);
    }
    const visitRestaurant = () => {
        props.history.push(`/restaurant/${url}`)
    }

    return (
        <div className='rest'>
            <div className='rest__select-top select-top'>
                    
                <div onClick={displayList} className='select-top__header'>{title ? title : 'Select restaurant'}</div>
                <div className='select-top__picker picker'>
                    <div className='picker__up'><i className="arrow_up"></i></div>
                    <div className='picker__down'><i className="arrow_down"></i></div>
                </div>
            </div>

            {display ? <div className='rest__select-bottom select-bottom'>
                <ul>
                    {restaurants.map((restaurant) => {
                        return <li onClick={() => getTitle(restaurant)} key={restaurant.id}>{restaurant.title}</li>
                    })}
                </ul>
            </div> : null}

            {!display && title ? <button onClick={()=>visitRestaurant()} className='rest__select-button select-button'>
                visit the restaurant
                <span>visit the restaurant</span>
            </button> : null}

        </div>
    )
}

Landing.propTypes = {
    history: PropTypes.object,
}

export default Landing;