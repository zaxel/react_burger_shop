import React from "react";
import firebase from "firebase/app";
import PropTypes from "prop-types";

class UserProfile extends React.Component{
    static propTypes = {
        handleLogout: PropTypes.func
    }
    state = {
        user: '',
        email: '',
        photo: ''
    }
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.setState({
                    user: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                })
            }
        })
    }

    render(){
        return(
            <div className='editor__userprofile userprofile'> 
                <div className='userprofile__container'>
                    <div className='userprofile__info-cont'>
                        <div className='userprofile__photo'>
                            <img src={this.state.photo || '../../images/user_placeholder.png'} alt='user'/>
                        </div>
                        <h3 className='userprofile__user-name'>{this.state.user || 'user'}</h3>
                        <h5 className='userprofile__user-email'>{this.state.email}</h5>
                    </div>
                    <div className='userprofile__button-cont'>
                        <button onClick={this.props.handleLogout} className='select-button userprofile__button'>Logout
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile;