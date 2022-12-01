import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MemeIndex from './components/MemeIndex';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memes" element={<MemeIndex />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
