import { useState, useEffect } from 'react';
import { getAllMemes } from '../lib/api';
import MemeCard from './MemeCard';
// import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Spinner from './Spinner';

const MemeIndex = () => {
  const [memes, setMemes] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getAllMemes()
      .then((res) => setMemes(res.data.data.memes))
      .catch((err) => console.error(err));
  }, []);

  if (memes === null) {
    return <Spinner />;
  }

  const filterMemes = () => {
    const regex = new RegExp(searchQuery, 'i');
    const filteredMemes = memes.filter((meme) => {
      return meme.name.match(regex);
    });
    return filteredMemes;
  };

  if (!memes) {
    return <Spinner />;
  }

  return (
    <div className="MemeIndex">
      <SearchBar value={searchQuery} handleChange={setSearchQuery} />
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {memes &&
              filterMemes().map((meme) => <MemeCard key={meme.id} {...meme} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MemeIndex;
