import Pageone from './Pageone';
import Pagetwo from './Pagetwo';
import Pagethree from './Pagethree';
import React, { Component } from 'react'
import {BrowserRouter as Router,NavLink} from 'react-router-dom'
import Route from "react-router-dom/Route"

export default class Main extends Component{
    render(){
        return(
            <div>
                <NavLink to ="/page_one" activetyle={{color:"red"}} style = {{marginRight:100}}>Page One</NavLink>
                <NavLink to ="/page_one" activetyle={{color:"red"}} style = {{marginRight:100}}>Page Two</NavLink>
                <NavLink to ="/page_one" activetyle={{color:"red"}} style = {{marginRight:100}}>Page Three</NavLink>
            <Route path = "page_one" component={Pageone}/>
            <Route path = "page_two" component={Pagetwo}/>
            <Route path = "page_three" component={Pagethree}/>
            </div>
        )
    }
}
