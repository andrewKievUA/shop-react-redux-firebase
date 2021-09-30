import React, {Component} from 'react';
import './App.css';
import Header from "./components/header/header.jsx";
import SignIn from "./components/sign/sign-in";
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";


class App extends Component {
    render() {
        return (<>


                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/shop" component={ShopPage}/>
                    <Route path="/sign-in" component={SignIn}/>
                </Switch>




            </>
        )
    }
}
export default App;
