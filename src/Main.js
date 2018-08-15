import {Switch, Route} from 'react-router-dom';
import React,{Component} from 'react';
import Home from "./Home";
import Roaster from "./Roaster";
import Schedule from "./Schedule";
import Tree from "./Tree";

class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/roaster" component={Roaster}/>
                    <Route path="/schedule" component={Schedule}/>
                    <Route path="/tree" component={Tree}/>
                </Switch>
            </div>
        );
    }
}

export default Main;