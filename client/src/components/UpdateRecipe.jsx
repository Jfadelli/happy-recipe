import React, { useState, useEffect } from 'react'
import { useParams, useHistory, useLocation } from 'react-router-dom'
import RecipeFinder from '../api/RecipeFinder'

const UpdateRecipe = () => {
    let location = useLocation()
    let history = useHistory()
    const [name, setName] = useState()
    const [rating, setRating] = useState()
    const [price, setPrice] = useState('Price')
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RecipeFinder.get(`/${id}`)
                setName(response.data.data.recipe.name)
                setRating(response.data.data.recipe.rating)
                setPrice(response.data.data.recipe.price)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [id])


    const handleDelete = async (e) => {
        e.preventDefault()
        try {
            let id = location.pathname.replace("/recipes/", "" ).replace("/update","")
            await RecipeFinder.delete(`/${id}`)
            history.push('/')

        } catch (err) {
            console.log(err)
        }
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await RecipeFinder.put(`/${id}`, {
            name,
            rating,
            price
        })
        history.push('/')
    }
    return (
        <div className='recipe-detail-wrapper' >
            <form className='ingredients-col'>
                <div style={{width: "100%", display:"flex", flexDirection:"row", justifyContent: "space-around", margin:"20px 0"}}>
                    <button onClick={handleDelete} className='btn btn-danger'>  Delete</button>
                    <button onClick={handleSubmit} className='btn btn-primary'>Update</button>
                </div>
                <div className='form-group'>
                    <label style={{margin: "10px"}} htmlFor="name">Name</label>
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        id="name"
                        className="form-control"
                        type='text'
                    />
                </div>

                <div className='form-group'>
                    <br />
                    <label style={{margin: "10px"}} htmlFor="rating">Rating</label>
                    <br />
                    <input
                        value={rating}
                        onChange={e => setRating(e.target.value)}
                        id="rating"
                        className="form-control"
                        type='text'
                    />
                </div>

                <div className='form-group'>
                    <br />
                    <label style={{margin: "0 10px"}} htmlFor="price">Price </label>
                    <select
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        className="custom-select my-1 mr-sm-2"
                        placeholder='price'
                        style={{ borderRadius: '4px', border: '1px solid rgb(206, 212, 218)', fontSize: '25.5px' }}
                        type="text"
                    >


                        <option disabled>Price</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                        <option value="5">$$$$$</option>
                    </select>
                </div>

                <br /><br /><br />



            </form>


        </div>
    )
}

export default UpdateRecipe
