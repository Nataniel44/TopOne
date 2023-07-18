import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Page1 from './page1';
import Menu from './Menu';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Page1 />} />
        <Route path="/menu" element={<Menu />} />
      </Switch>
    </Router>
  );
};

export default App;
