import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

class Navbar extends Component {
    state = {
        routes: [
            {name: "Home", to: "/"},
            {name: "Dashboard", to: "/dashboard"},
            {name: "Order", to: "/order"},
            {name: "Login", to: "/login"},
            {name: "Kitchen", to: "/kitchen"},
        ]
    }
    render() { 
        return (
            <nav>
                <ul>
                    { this.state.routes.map((route, id) => (
                        <li key={id}><Link to={route.to}>{route.name}</Link></li>
                    ))}
                </ul>
            </nav>
        );
    }
}
 
export default Navbar;