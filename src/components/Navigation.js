import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class Navigation extends Component {
    
    
    render() {
        const link = {
            width: '100px',
            padding: '12px',
            margin: '0 6px 6px',
            background: 'lightblue',
            textDecoration: 'none',
            color: 'white',
        }

        return (
            <div>
                <NavLink to="/" 
                    exact 
                    style={link}
                    activeStyle={{
                    fontWeight: "bold",
                    color: "white",
                    background: "darkblue"
                    }}
                >
                    Home
                </NavLink>
                <NavLink to="/categories"
                    exact 
                    style={link}
                    activeStyle={{
                    fontWeight: "bold",
                    color: "white",
                    background: "darkblue"
                    }}
                >
                    Categories
                </NavLink>
               
            </div>
        )
    }
}
