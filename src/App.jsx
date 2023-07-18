import { Route, Routes } from 'react-router-dom';
import Page1 from './page1';
import Menu from './Menu';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
};

export default App;
