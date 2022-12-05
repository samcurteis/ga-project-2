import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <img
            className="py-3 px-2"
            src="https://w7.pngwing.com/pngs/363/279/png-transparent-meme-soundboard-rage-comic-android-internet-meme-android-text-logo-meme.png"
            width="60"
            height="10"
          />
          <Link to="/" className="navbar-item">
            Meme Generator
          </Link>
          <Link to="/memes" className="navbar-item">
            Meme Index
          </Link>

          <Link to="/memes/carousel" className="navbar-item">
            Meme Carousel
          </Link>
          <img
            className="py-3 px-2"
            src="https://w7.pngwing.com/pngs/363/279/png-transparent-meme-soundboard-rage-comic-android-internet-meme-android-text-logo-meme.png"
            width="60"
            height="10"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
