import React, { Component } from 'react'
import MealsIndex from './MealsIndex'

export default class CategoryShow extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h2>The Meals With {this.props.match.params.id}</h2>
                <MealsIndex category={this.props.match.params.id}/>
            </div>
        )
    }
}
