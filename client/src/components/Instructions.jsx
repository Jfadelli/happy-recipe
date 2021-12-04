import React, { useState } from 'react'
import RecipeFinder from '../api/RecipeFinder';
import { useLocation, useHistory } from 'react-router-dom'

const Instructions = ({ instructions }) => {
    const location = useLocation()
    const history = useHistory()
    const [edit, setEdit] = useState(false)
    const handleDelete = async (e, id) => {
        e.preventDefault();
        try {
            await RecipeFinder.delete(`/${id}/instructions`, { data: { id: id } })
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
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button onClick={handleEdit} style={{ margin: "auto 16px", width:"71px" }} className='btn btn-warning'>Edit </button>


            </div>
            {instructions.map((el) => {
                return (
                    < div key={el.id}>

                        <div className="card-header d-flex justify-content-between">
                            <span style={{ width: '80%' }}>{el.instructions}</span>
                            <span style={{ alignSelf: 'center' }}>
                                {edit === true ? < button onClick={(e) => handleDelete(e, el.id)} className='btn btn-danger' >Delete</button> : null
                                }
                            </span>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Instructions

// <StarRating rating={el.rating}/>