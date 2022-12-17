/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import StarFull from '../../assets/images/star-full.svg';
import StarEmpty from '../../assets/images/star-empty.svg';
import './_style.scss';

export default function Rating({ length }) {
  const getStars = () => {
    const stars = [];
    let i = 0;

    while (i < length) {
      stars.push(1);
      i += 1;
    }

    while (i < 5) {
      stars.push(0);
      i += 1;
    }

    return stars;
  };

  return (
    <div className="rating">
      {getStars().map((isFull, i) => (
        isFull ? (
          <img key={`star-${i}`} className="star" src={StarFull} alt="" />
        ) : (
          <img key={`star-${i}`} className="star" src={StarEmpty} alt="" />
        )
      ))}
    </div>
  );
}

Rating.propTypes = {
  length: PropTypes.number.isRequired,
};
