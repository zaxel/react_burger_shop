import React from "react";

class Header extends React.Component{
    render(){
        return( 
            <div className='menu__header menu-header'>
                <div className='menu-header__rating header-rating'>
                    <div className='header-rating__text'>Rating: </div>
                    <div className='header-rating__stars'> *****</div>
                </div>
                <span className='menu-header__line'></span>
                <h1 className='menu-header__slogan'>Hot Burgers</h1>
                <h2 className='menu-header__descr'> Hot <span className='menu-header__highlight'>burgers</span> and quick delivery</h2>
            </div>
        )
    }
}

export default Header;
