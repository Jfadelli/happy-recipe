import React from 'react'
import Header from '../components/Header'
import RecipesList from '../components/RecipesList'
import AddRecipes from '../components/AddRecipes'
import '../App.css'


const Home = () => {
    return (
        <div >
            <Header />
            <AddRecipes/>
            <RecipesList />
            
        </div>
    )
}

export default Home
