require("dotenv").config();
const express = require("express");
const cors = require('cors')
const db = require('./db')

const morgan = require('morgan');

const app = express();

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

//Get all recipes
app.get("/api/v1/recipes/", async (req, res) => {
    try {
        const recipeData = await db.query('select * from  recipes')
        res.status(200).json({
            status: 'success',
            results: recipeData.rows.length,
            data: {
                recipeData: recipeData.rows
            }
        })
    }
    catch (err) { console.log(err) }
    
})

// Get One Recipe
app.get("/api/v1/recipes/:id", async (req, res) => {
    try {
        const recipe = await db.query("select * from recipes where id = $1", [req.params.id])
        const ingredients = await db.query("select * from ingredients_list where recipe_id = $1", [req.params.id])
        const instructions = await db.query("SELECT * FROM instructions_list where recipe_id = $1", [req.params.id])
        res.status(200).json({
            status: 'success',
            data: {
                recipe: recipe.rows[0],
                ingredients: ingredients.rows,
                instructions: instructions.rows
            }
        })
    } catch (err) { console.log(err) }
})


//POST RECIPE
app.post("/api/v1/recipes", async (req, res) => {
    try {
        const results = await db.query("INSERT INTO recipes (name, rating, price) values ($1, $2, $3) returning *", [req.body.name, req.body.rating, req.body.price])
        res.status(201).json({
            status: 'success',
            data: {
                recipe: results.rows[0]
            }
        })
    } catch (err) { console.log(err) }
})

//DELETE RECIPE
app.delete('/api/v1/recipes/:id', async (req, res) => {
    try {
        const results = await db.query("DELETE from recipes where id = $1", [req.params.id])
        res.status(204).json({
            status: 'success',
            data: {
                recipe: results.rows[0]
            }
        })
    } catch (err) { console.log(err) }
})

// EDIT RECIPE
app.put('/api/v1/recipes/:id', async (req, res) => {
    try {
        const results = await db.query("UPDATE recipes SET name = $1, rating = $2, price = $3 where id = $4 returning *", [req.body.name, req.body.rating, req.body.price, req.params.id])
        res.status(200).json({
            status: 'success',
            data: {
                recipe: results.rows[0]
            }
        })
    } catch (err) { console.log(err) }
})

app.post('/api/v1/recipes/:id/addIngredients', async (req, res) => {
    try {
        const newIngredients = await db.query('INSERT INTO ingredients_list (recipe_id, ingredients) values ($1, $2) returning *;', [req.params.id, req.body.ingredients]);
        res.status(201).json({
            status: 'status',
            data: { ingredients: newIngredients.rows[0] }
        })  
    } catch (err) { console.log(err) }
})

app.delete('/api/v1/recipes/:id/ingredients', async (req, res) => {
    try {

        const results = await db.query("DELETE from ingredients_list where id = $1", [req.body.id]);
        res.status(204).json({
            status:'success',
            ingredients: results.rows
        })

    } catch (err) { console.log(err) }
})

app.post('/api/v1/recipes/:id/addInstructions', async (req, res) => {
    try {
        const newInstructions = await db.query('INSERT INTO instructions_list (recipe_id, instructions) values ($1, $2) returning *;', [req.params.id, req.body.instructions]);
        res.status(201).json({
            status: 'status',
            data: { instructions: newInstructions.rows[0] }
        })  
    } catch (err) { console.log(err) }
})

app.delete('/api/v1/recipes/:id/instructions', async (req, res) => {
    try {
        console.log(req.body.id)
        const results = await db.query("DELETE from instructions_list where id = $1", [req.body.id]);
        res.status(204).json({
            status:'success',
            instructions: results.rows
        })

    } catch (err) { console.log(err) }
})

// app.login('http://192.168.0.37:3001/api/v1/recipes')


const port = process.env.PORT || 4500;

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})
