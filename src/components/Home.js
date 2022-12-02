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

  console.log(randomMeme);

  if (randomMeme === null) {
    return <Spinner />;
  }

  return (
    <div className="container is-full-height-minus-navbar">
      <div className="columns  is-centered ">
        <div className="column is-one-quarter is-centered ">
          <div className="card is-centered ">
            <h4 className="card-header-title is-centered">{randomMeme.name}</h4>
            <div className="card-image">
              <figure className="image is-one-third">
                <img src={randomMeme.url} />
                <div className="card-footer">
                  <button
                    className="card-footer-item is-centered is-2"
                    onClick={handleClick}
                  >
                    Can I have another please?
                  </button>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
