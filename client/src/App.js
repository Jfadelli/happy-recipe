import React from 'react';
import Home from './routes/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { RecipeContextProvider } from './context/appContext'
import "./App.css"


const App = () => {
  return (
    <RecipeContextProvider>
    <div className="app">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/recipes/:id/update' component={UpdatePage} />
          <Route exact path='/recipes/:id' component={RestaurantDetailPage} /> */}
        </Switch>
      </Router>

    </div>
    </RecipeContextProvider>
  );
}

export default App;
