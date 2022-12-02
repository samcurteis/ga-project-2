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
    <>
      <Carousel
        autoPlay
        showArrows={true}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const defStyle = {
            marginLeft: 20,
            paddingBottom: 900,
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
              // aria-label={`${label} ${index + 1}`}
            ></span>
          );
        }}
      >
        {memes?.map((meme) => (
          <div key={meme.url}>
            <p className="legend">{meme.name}</p>
            <img src={meme.url} alt={meme.name} />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default MemeCarousel;
