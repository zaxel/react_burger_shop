import React from "react";

class UserProfile extends React.Component{
    render(){
        return(
            <div className='editor__userprofile userprofile'> 
                <div className='userprofile__container'>
                    <div className='userprofile__info-cont'>
                        <div className='userprofile__photo'>
                            <img src='../../images/user_placeholder.png' alt='user photo'/>
                        </div>
                        <h3 className='userprofile__user-name'>zaxel</h3>
                        <h5 className='userprofile__user-email'>sae11.z.alex@gmail.com</h5>
                    </div>
                    <div className='userprofile__button-cont'>
                        <button onClick={()=>{}} className='select-button userprofile__button'>Logout
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile;