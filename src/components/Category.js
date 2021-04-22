import React from 'react'
import {Link} from 'react-router-dom'


const Category = (props) => {
   return(
    <Link to={`/categories/${props.category.split(" ").join("_")}`}>
      <button id={props.category} onClick={props.handleClick}>{props.category}</button>
    </Link>
    ) 
}

export default Category