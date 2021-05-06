import React, { useState } from 'react'
import RecipeFinder from '../api/RecipeFinder'
import { useHistory, useLocation, useParams} from 'react-router-dom'

const AddInstructions = () => {
    const {id} = useParams()
    const history = useHistory()
    const location = useLocation()
    const [instructions, setInstructions] = useState('')


    const handleSubmit =async (e) =>{
        e.preventDefault()
        try{
            await RecipeFinder.post(`/${id}/addInstructions`,{
                instructions
            });

            history.push("/")
            history.push(location)
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div className='ingredients-col'>
            <br/>
            <form action=''>
                <div className='form-row'>
                    <div className='form-group col-8'>
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='Review'>Add Instructions</label>
                    <textarea
                        value={instructions}
                        onChange={e => setInstructions(e.target.value)}
                        id="Review"
                        className='form-control'
                    ></textarea>
                </div>
                <br/>
                <button 
                onClick={handleSubmit} 
                type='submit'
                className='btn btn-primary'>Add / Submit</button>
            </form>
            <br/>
        </div>
    )
}

export default AddInstructions
