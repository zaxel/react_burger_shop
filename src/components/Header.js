import React from "react";

const Header = props => ( 
    <div className='menu__header menu-header'>
        <div className='menu-header__rating header-rating'>
            <div className='header-rating__text'>Rating: </div>
            <div className='header-rating__stars'> &#9733;&#9733;&#9733;&#9733;&#9733; </div>
        </div>
        <span className='menu-header__line'></span>
        <h1 className='menu-header__slogan'>{props.title}</h1>
        <h2 className='menu-header__descr'> Hot <span className='menu-header__highlight'>burgers</span> and quick delivery</h2>
    </div>
)


export default Header;
