import './App.css';
import ListAll from './components/ListAll';
import New from './components/New';
import Edit from './components/Edit';
import Details from './components/Details';
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <ListAll path="/" />
        <New path="/pets/new" />
        <Details path="/pets/:_id" />
        <Edit path="/pets/:_id/edit" />
      </Router>
    </div>
  );
}

export default App;
