import { getAllMemes } from '../lib/api';
import { useState, useEffect } from 'react';
import Spinner from './Spinner';

const Home = () => {
  const [randomMeme, setRandomMeme] = useState(null);
  const [randomToggle, setRandomToggle] = useState(true);

  function handleClick() {
    setRandomToggle(!randomToggle);
  }

  useEffect(() => {
    getAllMemes()
      .then((res) =>
        setRandomMeme(res.data.data.memes[Math.round(Math.random() * 100)])
      )
      .catch((err) => console.error(err));
  }, [randomToggle]);

  if (randomMeme === null) {
    return <Spinner />;
  }

  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="container home-container is-centered">
        <h2 className="title is-2">Here&apos;s a meme for you</h2>
        <p className="subtitle is-centered">Click the meme to have another!</p>
        <div className="columns">
          <div className="column ">
            <div className="card is-centered">
              <h4 className="card-header-title is-centered">
                {randomMeme.name}
              </h4>
              <div className="card-image home-meme">
                <figure className="image image">
                  <img
                    src={randomMeme.url}
                    name={randomMeme.name}
                    loading="lazy"
                    height="255"
                    width="255"
                    onClick={handleClick}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
