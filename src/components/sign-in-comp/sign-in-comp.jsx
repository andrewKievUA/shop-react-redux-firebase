import React, {Component} from 'react';
import "./sign-in-styles.scss"
import CustomButton from "../custom-button/custom-button";

import firebase from 'firebase/compat/app';
import "firebase/compat/firestore"
import "firebase/compat/auth"

firebase.initializeApp({
    apiKey: "AIzaSyCrOnzMuL1Ontd3XDQeyBFhmmr1pqwn3a0",
    authDomain: "crwn-9c549.firebaseapp.com",
    projectId: "crwn-9c549",
    storageBucket: "crwn-9c549.appspot.com",
    messagingSenderId: "405630482850",
    appId: "1:405630482850:web:f53d4aee606c0874255afb"
})
const auth = firebase.auth()

class SignInComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            text: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({email: '', password: ""})
        console.log(this.state)
    }

    changeHandler = (event) => {
        const {value, name} = event.target
        console.log(value)
        //   this.setState({...this.state,[name]: value})
        this.setState({[name]: value})
    }

    loginGoogle = async ()=>{
        const provider=  new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }

    render() {
        return (
            <div className="sign-in2">
                <h2> I already Have an account</h2>
                <span> Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                        <label className="labels"> Email<br/>
                            <input className="inputs"
                                   name="text"
                                   type="text"
                                   value={this.state.text}
                                   onChange={this.changeHandler}
                                   required
                                   label="email"
                            />
                            </label>
                        <br/>
                        <label className="labels"> Password  <br/>
                            <input  className="inputs"
                                   name="password"
                                   type="password"
                                   value={this.state.password}
                                   onChange={this.changeHandler}
                                   label="password"
                                   required/>
                            </label>
                    <br/>
                    <br/>
                    <CustomButton type="submit"> Sign In </CustomButton>{" "}
                    <CustomButton onClick={this.loginGoogle }>Google Auth </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignInComp;
