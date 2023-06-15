
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contador from './components/Contador';
import Imc from './components/Imc';
import ListaTarefa from './components/ListaTarefa';
import { BrowserRouter as Router ,Switch , Route  }from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Contador/>
          </Route>
          <Route path='/IMC'>
            <Imc/>
          </Route>
          <Route path='/ListaTarefa'>
            <ListaTarefa/>
          </Route>
        </Switch>
      </div>
      <Footer/> 
    </Router>
  );
}

export default App;
