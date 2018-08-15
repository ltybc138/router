import {Switch, Route} from 'react-router-dom';
import React,{Component} from 'react';
import Home from "./Home";
import Roaster from "./Roaster";
import Schedule from "./Schedule";

class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/roaster" component={Roaster}/>
                    <Route path="/schedule" component={Schedule}/>
                </Switch>
            </div>
        );
    }
}

export default Main;