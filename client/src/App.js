import React from 'react';
import Home from './routes/Home'
import UpdatePage from './routes/UpdatePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { RecipesContextProvider } from './context/appContext'
import "./App.css"
import RecipeDetailPage from './routes/RecipeDetailPage';


const App = () => {
  return (
    <RecipesContextProvider>
    <div className="app">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/recipes/:id/update' component={UpdatePage} />
          <Route exact path='/recipes/:id' component={RecipeDetailPage} />
        </Switch>
      </Router>

    </div>
    </RecipesContextProvider>
  );
}

export default App;
