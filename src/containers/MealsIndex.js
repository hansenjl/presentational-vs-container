import React, { Component } from 'react'
import Meal from '../components/Meal'

export default class MealsIndex extends Component {

    state = {
       meals: [],
       category: ""
    }

    fetchMeals(){
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.category}`)
        .then(res => res.json())
        .then(data => {
           this.setState({
                meals: data.meals,
                category: this.props.category
           })
        })
    }
    componentDidMount(){
        this.fetchMeals()
    }

    componentDidUpdate(prevProps){
        if(prevProps.category !== this.props.category){
            this.fetchMeals()
        }
    } 

    render() {
        const meals = this.state.meals.map((meal, idx) => <Meal key={idx} meal={meal.strMeal}/>)
        
        return (
            <div>
                {this.state.category === "" ? 
                (<h3>Please Select a Category</h3>): 
                (<div>
                    <h2> {this.state.category} Meals:</h2>
                     {meals}
                </div>
                )}
                
            </div>
        )
    }
}
