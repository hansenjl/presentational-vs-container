import React, { Component } from 'react'
import Category from "../components/Category"
import MealsIndex from './MealsIndex'

export default class CategoriesIndex extends Component {

    state = {
        categories: [],
        category: ""
    }

    componentDidMount(){
       fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
       .then(res => res.json())
       .then(data => {
           console.log(data.meals)
           this.setState({
               categories: data.meals
           })
       })
    } 

    handleBtnClick = (e) => {

        this.setState({
            category: e.target.id
        })
    }

    render() {

        const categories = this.state.categories.map((category, idx) => {
            return <Category key={idx} category={category.strCategory} handleClick={this.handleBtnClick}/>
        })
        
        return (
            <div>
                <h2>Categories:</h2>
                {categories}
                <hr />
                
                <MealsIndex category={this.state.category}/>
            </div>
        )
    }
}
