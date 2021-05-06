import React, { useState } from 'react'
import RecipeFinder from '../api/RecipeFinder'
import { useHistory, useLocation, useParams} from 'react-router-dom'

const AddIngredients = () => {
    const {id} = useParams()
    const history = useHistory()
    const location = useLocation()
    const [ingredients, setIngredients] = useState('')


    const handleSubmitReview =async (e) =>{
        e.preventDefault()
        try{
            await RecipeFinder.post(`/${id}/addIngredients`,{
                ingredients
            });

            history.push("/")
            history.push(location)
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div className='ingredients-col'>
            <br></br>
            <form action=''>
                <div className='form-row'>
                    <div className='form-group col-8'>
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='Review'>Add Ingredients</label>
                    <textarea
                        value={ingredients}
                        onChange={e => setIngredients(e.target.value)}
                        id="Review"
                        className='form-control'

                    ></textarea>
                </div>
                <br></br>
                <button 
                onClick={handleSubmitReview} 
                type='submit'
                className='btn btn-primary'>Add / Submit</button>
            </form>
        </div>
    )
}

export default AddIngredients
