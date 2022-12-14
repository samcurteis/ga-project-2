const MemeCard = ({ name, url }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <div className="card">
      <div className="card-header">
        <h4 className="card-header-title has-background-dark has-text-white">
          {name}
        </h4>
      </div>
      <div className="card-image">
        <figure className="image image is-1by1">
          <img src={url} name={name} loading="lazy" width="255" height="255" />
        </figure>
      </div>
    </div>
  </div>
);

export default MemeCard;
