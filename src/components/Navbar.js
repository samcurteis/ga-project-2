import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            Meme Generator
          </Link>
          <Link to="/memes" className="navbar-item">
            Meme Index
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
