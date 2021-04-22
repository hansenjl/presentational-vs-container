import './App.css';
import './containers/CategoriesIndex'
import CategoriesIndex from './containers/CategoriesIndex';
import CategoryShow from './containers/CategoryShow';
import Home from './components/Home'
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/categories"  component={CategoriesIndex}/>
          <Route path="/categories/:id"  component={CategoryShow}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
