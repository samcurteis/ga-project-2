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
    <>
      <Carousel>
        {memes?.map((meme) => (
          <img key={meme.url} src={meme.url} alt={meme.name} />
        ))}
      </Carousel>
    </>
  );
};

export default MemeCarousel;
