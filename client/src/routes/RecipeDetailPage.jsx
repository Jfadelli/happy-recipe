import React, {useState, useContext, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import RecipeFinder from '../api/RecipeFinder'

import { RecipesContext } from '../context/appContext'

import Ingredients from '../components/Ingredients'
import AddIngredients from '../components/AddIngredients'

import Instructions from '../components/Instructions'
import AddInstructions from '../components/AddInstructions'


const RecipeDetailPage = () => {
    const {id} = useParams();
    const { selectedRecipe, setSelectedRecipe} = useContext(RecipesContext)

    const [edit, setEdit] = useState(false)
    const handleEdit = () => {
        if (edit === false) {
            setEdit(true)
        } else {
            setEdit(false)
        }
    }

    useEffect(() => {
        const fetchData = async () =>{
            try{ 
                const response = await RecipeFinder.get(`/${id}`)
                setSelectedRecipe(response.data.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchData();
    }, [setSelectedRecipe, id])

    return (
        <div className="recipe-detail-wrapper">
            {selectedRecipe && (
                <>
                <h1 className='recipe-title'>{selectedRecipe.recipe.name}</h1>
                <h1>Ingredients</h1>
            <Ingredients ingredients={selectedRecipe.ingredients} />
            <AddIngredients/>
            <hr></hr>
            <h1>Instructions</h1>
            
            <Instructions instructions={selectedRecipe.instructions}/>
            <AddInstructions />
                </>
            )}

        </div>
    )
}

export default RecipeDetailPage
