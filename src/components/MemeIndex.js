import { useState, useEffect } from 'react';
import { getAllMemes } from '../lib/api';

const MemeIndex = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    getAllMemes()
      .then((res) => setMemes(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!memes) {
    return <p>Loading...</p>;
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">{}</div>
      </div>
    </section>
  );
};

export default MemeIndex;
