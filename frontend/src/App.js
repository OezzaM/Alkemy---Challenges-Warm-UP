import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import Home from './components/Home';
import PostState from './context/postState';

function App() {
  return (
    <PostState>
      <Router>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </PostState>
  );
}

export default App;
