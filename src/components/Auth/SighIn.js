import React from "react";
import Login from "./Login";
import firebase from "firebase/app";
import { firebaseApp } from "../../base";

class SighIn extends React.Component{
    state = {
        user: ''
    }
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.authHandler({user})
            }
        })
    }

    authHandler = (authData) => {
        const {email} = authData.user;
        this.setState({user: email});
    }

    authenticate = (service) => {
        let authProvider = null;
        if(service === 'github'){
            authProvider = new firebase.auth['GithubAuthProvider']();
        }
        else if(service === 'google'){
            authProvider = new firebase.auth['GoogleAuthProvider']();
        }
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.authHandler)
    }

    render(){
        if(!this.state.user){
            return <Login authenticate={this.authenticate}/>;
        } 
        return this.props.children;
    }
}

export default SighIn;