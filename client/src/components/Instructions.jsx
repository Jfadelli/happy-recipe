import React from 'react'
import RecipeFinder from '../api/RecipeFinder';
import {useLocation, useHistory} from 'react-router-dom'

const Instructions = ({ instructions }) => {
    const location = useLocation()
    const history = useHistory()
    const handleDelete = async (e, id ) => {
        e.preventDefault();
        try {
            await RecipeFinder.delete(`/${id}/instructions`, {data: {id:id}})
            history.push('/')
            history.push(location)

        } catch (err) { console.log(err) }
    }
    return (
        <div className='ingredients-col'>
            {instructions.map((el) => {
                return (
                    < div key={el.id}>

                        <div className="card-header d-flex justify-content-between">
                            <span>{el.instructions}</span>
                            <span><button onClick={(e) => handleDelete(e, el.id)} className='btn btn-danger' >Delete</button></span>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Instructions

// <StarRating rating={el.rating}/>