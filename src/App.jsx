import { Route, Routes, HashRouter } from 'react-router-dom';
import Page1 from './page1';
import Menu from './Menu';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
