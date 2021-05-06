import React from 'react'
import RecipeFinder from '../api/RecipeFinder';
import {useLocation, useHistory} from 'react-router-dom'

const Ingredients = ({ ingredients }) => {
    const location = useLocation()
    const history = useHistory()
    const handleDelete = async (e, id ) => {
        e.preventDefault();
        try {
            await RecipeFinder.delete(`/${id}/ingredients`, {data: {id:id}})
            history.push('/')
            history.push(location)

        } catch (err) { console.log(err) }
    }
    return (
        <div className='ingredients-col'>
            {ingredients.map((el) => {
                return (
                    < div key={el.id}>

                        <div className="card-header d-flex justify-content-between">
                            <span>{el.ingredients}</span>
                            <span><button onClick={(e) => handleDelete(e, el.id)} className='btn btn-danger' >Delete</button></span>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Ingredients

// <StarRating rating={el.rating}/>