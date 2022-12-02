import { useState, useEffect } from 'react';
import { getAllMemes } from '../lib/api';
import MemeCard from './MemeCard';
import { Link } from 'react-router-dom';

const MemeIndex = () => {
  const [memes, setMemes] = useState(null);

  useEffect(() => {
    getAllMemes()
      .then((res) => setMemes(res.data.data.memes))
      .catch((err) => console.error(err));
  }, []);

  console.log(memes);
  if (memes === null) {
    return <p>Loading...</p>;
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {memes?.map((meme) => (
            <Link key={meme.url} to={`/memes/${meme.id}`} state={meme}>
              <MemeCard key={meme.id} {...meme} />
            </Link>
          ))}
          <img src="https://i.imgflip.com/1ur9b0.jpg"></img>
        </div>
      </div>
    </section>
  );
};

export default MemeIndex;
