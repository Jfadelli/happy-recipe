
import React, { useState, useContext } from 'react'
import RecipeFinder from '../api/RecipeFinder'
import RecipeList from './RecipesList'
import { RecipesContext } from '../context/appContext'



const AddRecipes = () => {
    const [name, setName] = useState()
    const [rating, setRating] = useState()
    const [price, setPrice] = useState()
    const { recipes, setRecipes } = useContext(RecipesContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await RecipeFinder.post('/', {
                name,
                rating,
                price
            })

            setRecipes([...recipes, response.data.data.recipe])
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="add-recipe-wrapper" >
            <form className="add-recipe-form" action="">

                <div className="add-recipe-col">
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder='Recipe Name' />
                </div>
                <div className="add-recipe-col" >
                <select
                        value={rating}
                        onChange={e => setRating(e.target.value)}
                        className="custom-select my-1 mr-sm-2"
                        style={{ width: "200px", borderRadius: '4px', color: 'rgb(108, 117, 125)', border: '1px solid rgb(206, 212, 218)', fontSize: '14px', height: '38px' }}
                    >
                        <option value="" selected disabled>Rating</option>
                        <option value="1">★</option>
                        <option value="2">★★</option>
                        <option value="3">★★★</option>
                        <option value="4">★★★★</option>
                        <option value="5">★★★★★</option>
                    </select>
                </div>
                
                <div className="add-recipe-col" >
                    <select
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        className="custom-select my-1 mr-sm-2"
                        style={{ width: "200px", borderRadius: '4px', color: 'rgb(108, 117, 125)', border: '1px solid rgb(206, 212, 218)', fontSize: '14px', height: '38px' }}
                    >
                        <option value="0" selected disabled>Price</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                        <option value="5">$$$$$</option>
                    </select>
                </div>
                <button type="submit" style={{margin: "10px 0 0 0",width:"200px"}}onClick={handleSubmit} className="btn btn-primary">Add</button>

            </form>
            <RecipeList />
        </div >
    )
}

export default AddRecipes
