import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { getAllMemes } from '../lib/api';
import { useState, useEffect } from 'react';
<link rel="stylesheet" href="carousel.css" />;
const MemeCarousel = () => {
  const [memes, setMemes] = useState(null);

  useEffect(() => {
    getAllMemes()
      .then((res) => setMemes(res.data.data.memes))
      .catch((err) => console.error(err));
  }, []);
  console.log(memes);

  return (
    <div className="container">
      <div className="carousel-container">
        <h1 className="title">Memes, on a carousel!</h1>
        <img
          className="image is-128x128"
          src="https://media3.giphy.com/media/MwlicVM5EnaxO/giphy.gif?cid=ecf05e47x00spcj788z8t1cq9tbwkyp30zzjm1z5zrqszzyt&rid=giphy.gif&ct=g"
          alt="carousel"
        />
        <p>Use your arrow keys to browse the memes</p>
      </div>
      <Carousel
        className="carousel-box"
        loop
        autoPlay
        useKeyboardArrows
        showArrows={true}
        renderIndicator={(onClickHandler, isSelected, index) => {
          const defStyle = {
            marginLeft: 20,
            color: 'white',
            cursor: 'pointer'
          };
          const style = isSelected
            ? { ...defStyle, color: 'black' }
            : { ...defStyle };
          return (
            <span
              style={style}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
            ></span>
          );
        }}
      >
        {memes?.map((meme) => (
          <div key={meme.url}>
            <figure className="carousel-item">
              <img src={meme.url} alt={meme.name} />
            </figure>
            <p className="legend">{meme.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MemeCarousel;
