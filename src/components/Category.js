import React from 'react'

const Category = (props) => {

    return (
        <button onClick={props.handleClick} id={props.category}>
                {props.category}
        </button>
    )
}

export default Category;
