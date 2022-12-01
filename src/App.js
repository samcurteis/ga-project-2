import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MemeIndex from './components/MemeIndex';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meme" element={<MemeIndex />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
