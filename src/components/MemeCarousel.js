import { Carousel } from 'react-responsive-carousel';
import { getAllMemes } from '../lib/api';
import { useState, useEffect } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MemeCarousel = () => {
  const [memes, setMemes] = useState(null);

  useEffect(() => {
    getAllMemes()
      .then((res) => setMemes(res.data.data.memes))
      .catch((err) => console.error(err));
  }, []);
  console.log(memes);

  return (
    <div className="container carousel-container">
      <h1 className="title">Memes, on a carousel!</h1>
      <p>Use your arrow keys to browse the memes</p>
      <Carousel
        useKeyboardArrows
        centerMode
        showIndicators="false"
        className="carousel"
      >
        {memes?.map((meme) => (
          <div key={meme.id} className="container carousel-item" height={meme}>
            <p>{meme.name}</p>
            <img
              className="carousel-image"
              key={meme.url}
              src={meme.url}
              alt={meme.name}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MemeCarousel;
