import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MemeIndex from './components/MemeIndex';
import Navbar from './components/Navbar';
import MemeShow from './components/MemeShow';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memes/:Id" element={<MemeShow />} />
        <Route path="/memes" element={<MemeIndex />} />
        <Route
          path="*"
          element={<p>No memes to show here. Please try again</p>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
