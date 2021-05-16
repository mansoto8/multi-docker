import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <p>
            Fibonnaci App
          </p>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/otherpage">Other page</Link>
          </p>
        </header>
        <br/>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
