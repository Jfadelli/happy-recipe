import React, { useState } from 'react'
import RecipeFinder from '../api/RecipeFinder';
import { useLocation, useHistory } from 'react-router-dom'

const Ingredients = ({ ingredients }) => {
    const location = useLocation()
    const history = useHistory()
    const [edit, setEdit] = useState(false)

    const handleDelete = async (e, id) => {
        e.preventDefault();
        try {
            await RecipeFinder.delete(`/${id}/ingredients`, { data: { id: id } })
            history.push('/')
            history.push(location)

        } catch (err) { console.log(err) }
    }

    const handleEdit = () => {
        if (edit === false) {
            setEdit(true)
        } else {
            setEdit(false)
        }
    }

    return (
        <div className='ingredients-col'>
            <div className="card-header d-flex justify-content-flex-end" style={{ display: "flex", justifyContent: "flex-end" }}>
                <button onClick={handleEdit} style={{ margin: "auto 0px", width:"71px" }} className='btn btn-warning'>Edit </button>
            </div>


            {ingredients.map((el) => {
                return (
                    < div key={el.id}>
                        <div className="card-header d-flex justify-content-between">
                            <span>{el.ingredients}</span>
                            <span>
                                {edit === true ?
                                    < button onClick={(e) => handleDelete(e, el.id)} className='btn btn-danger' >Delete</button> : null
                                }
                            </span>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default Ingredients

// <StarRating rating={el.rating}/>