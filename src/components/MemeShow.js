import { getAllMemes } from '../lib/api';
// import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MemeShow = () => {
  // const { id } = useParams();
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    getAllMemes()
      .then((res) => setMeme(res.data.data.memes))
      .catch((err) => console.error(err));
  }, [id]);

  console.log(`/memes/${id}`);

  if (meme === null) {
    return <p>Loading...</p>;
  }

  // handleClick(e) => {
  //   e.target.[]
  // }

  return (
    <section className="section">
      <p>just testinng</p>
      <div className="container">
        <h2 className="title has-text-centered">{meme.name}</h2>
        <hr />
        <div className="columns">
          <div className="column-is-half">
            <figure className="image">
              <img src={meme.url} alt={meme.name} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemeShow;
