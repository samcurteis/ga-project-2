import { getAllMemes } from '../lib/api';
import { useState, useEffect } from 'react';

const Home = () => {
  const [memes, setMemes] = useState(null);

  useEffect(() => {
    getAllMemes()
      .then((res) => setMemes(res.data.data.memes))
      .catch((err) => console.error(err));
  });

  // const getRandomMeme = (memes) => {
  console.log(memes);
  // console.log(memes[Math.round(Math.random * memes.length)]);
  // }

  if (memes === null) {
    return <p>Loading...</p>;
  }

  return (
    <section className="hero is fullheight-with-navbar is-success">
      <p className="title is-1 has-text-centered has-text-black">
        {/* <MemeShow /> */}
        {/* <div className="card">
          <div className="card-header">
            <h4 className="card-header-title">{name}</h4>
          </div>
          <div className="card-image">
            <figure className="image image is-1by1">
              <img
                src={url}
                name={name}
                loading="lazy"
                width="255"
                height="255"
              />
            </figure>
          </div>
        </div> */}
      </p>
    </section>
  );
};

export default Home;
