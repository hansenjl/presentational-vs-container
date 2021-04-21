import React, {Component} from 'react';
import Category from '../components/Category'
import MealContainer from './MealContainer'

const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

class CategoriesContainer extends Component {

    state = {
        categories: [],
        category: ""
    }

    componentDidMount(){
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                categories: data.meals
            })
        })
    }

    handleOnClick = (e) => {
        this.setState({
            category: e.target.id
        })
    }

    render(){
        let categories = this.state.categories.map((cat, i) => {
            return <Category key={i} category={cat.strCategory} handleClick={this.handleOnClick}/>
        })

        return(
            <div>
                <h2>The Categories:</h2>
                {categories}
                <hr/>
                <h2 >The Meals:</h2>
                <MealContainer category={this.state.category} />
            </div>
        )
    }
}

export default CategoriesContainer