import React, { Component } from 'react'
import Meal from '../components/Meal'

export default class MealContainer extends Component {
    
    state = {
        meals: [],
        category: ""
    }

    componentDidUpdate(prevProps){
        if(prevProps.category !== this.props.category){
            this.fetchMeals()
        }
    }


    fetchMeals = () => {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.category}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            this.setState({
                meals: data.meals,
                category: this.props.category
            })
        })
    }
    
    render() {
        const meals = this.state.meals.map((meal, i) => <Meal key={i} meal={meal.strMeal} />)
        return (
            <div >
                {this.state.category !== "" ?
                (<div> 
                    <h3>The {this.state.category} Meals</h3> 
                    {meals}
                </div>) : (<h3>Please Select A Category</h3>)
                }
            </div>
        )
    }
}
