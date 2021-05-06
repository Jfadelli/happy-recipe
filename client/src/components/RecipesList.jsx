import React, { useEffect, useContext } from 'react'
import RecipeFinder from '../api/RecipeFinder'
import { useHistory } from 'react-router-dom'
import { RecipesContext } from '../context/appContext'


const RecipesList = (props) => {
    let history = useHistory()
    const { recipes, setRecipes } = useContext(RecipesContext)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RecipeFinder.get('/')
                setRecipes(response.data.data.recipeData)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();

    }, [setRecipes]);

    const handleUpdate = async (e, id) => {
        e.stopPropagation();
        history.push(`/recipes/${id}/update`)
    }

    const handleDelete = async (e, id) => {
        e.stopPropagation()
        try{
            await RecipeFinder.delete(`/${id}`)

            setRecipes(recipes.filter(recipe => {
                return recipe.id !== id
            }))
        } catch (err) {
            console.log(err)
        }
    }

    const handleRecipeSelect = (id) => {
        history.push(`/recipes/${id}/`)
    }

    return (
        <div className="recipe-list">
            <table className="table table-hover table-dark">
                <thead>
                    <tr className='bg-primary'>
                        <th scope='col'>Recipe</th>
                        <th scope='col'>Rating</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Edit</th>
                        <th scope='col'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes && recipes.map((el) => {
                        return (
                            <>
                                <tr onClick={() => {handleRecipeSelect(el.id)}} className='table-row' key={el.id}>
                                    <td>{el.name}</td>
                                    <td>{el.rating}</td>
                                    <td>{`$ `+el.price}</td>
                                    <td><button onClick={(e) => handleUpdate(e,el.id)} className='btn btn-warning'>Edit</button></td>
                                    <td><button onClick={(e) => handleDelete(e,el.id)} className='btn btn-danger'>Delete</button></td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default RecipesList
