import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './_style.scss';

export default function Card({ imageUrl, title, id }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <figure>
        <div className="figure-wrapper">
          <div className="image-wrapper">
            <img src={imageUrl} alt={title} />
          </div>
          <figcaption>{title}</figcaption>
        </div>
      </figure>
    </Link>
  );
}

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
