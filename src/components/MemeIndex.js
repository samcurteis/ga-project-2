import { useState, useEffect } from 'react';
import { getAllMemes } from '../lib/api';
import MemeCard from './MemeCard';
import { Link } from 'react-router-dom';

const MemeIndex = () => {
  const [memes, setMemes] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);

  useEffect(() => {
    getAllMemes()
      .then((res) => setMemes(res.data.data.memes))
      .catch((err) => console.error(err));
  }, []);

  if (memes === null) {
    return <p>Loading...</p>;
  }

  const filterMemes = () => {
    const regex = new RegExp(searchQuery, 'i');
    const filteredMemes = memes.filter((meme) => {
      return meme.name.match(regex);
    });
    return filteredMemes;
  };

  // if (!cheeses) {
  //   return <Spinner />;
  // }

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {memes?.map((meme) => (
            // <Link key={meme.url} to={`/memes/${meme.id}`} state={meme}>
            <MemeCard key={meme.id} {...meme} />
            // </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemeIndex;
