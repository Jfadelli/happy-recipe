import React, { useEffect, useContext } from 'react'
import RecipeFinder from '../api/RecipeFinder'
import { useHistory } from 'react-router-dom'
import { RecipesContext } from '../context/appContext'
import StarRating from '../components/StarRating'


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
        try {
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

    const renderRating = (rating) => {
        if (rating <= 0) {
            return <span className="text-warning">Not Yet Rated</span>
        }
        return (<>
            <StarRating rating={rating} />
        </>)
    }

    const priceStyle = (price) => {
        if (price <= 2) {
            return ('green'
            )
        } else if(price >2 && price <= 4){
            return ('yellow')
        } else {
            return ('red')
        }
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
                            <tr key={el.id} onClick={() => { handleRecipeSelect(el.id) }} className='table-row' >
                                <td >{el.name}</td>
                                <td>{renderRating(el.rating)}</td>
                                <td style={{color: priceStyle(el.price)}}>{`$`.repeat(el.price)}</td>
                                <td><button onClick={(e) => handleUpdate(e, el.id)} className='btn btn-warning'>Edit</button></td>
                                <td><button onClick={(e) => handleDelete(e, el.id)} className='btn btn-danger'>Delete</button></td>
                            </tr>


                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default RecipesList
