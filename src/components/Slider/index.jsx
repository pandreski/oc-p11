/* eslint-disable no-unused-expressions */
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './_style.scss';

export default function Slider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [items, setItems] = useState([]);

  // Update "active" slide according to "currentSlide" value
  useEffect(() => {
    const tempItems = [];

    slides.forEach((slide, i) => {
      let isActive = false;

      if (i === currentSlide) {
        isActive = true;
      }

      tempItems.push({
        slide,
        isActive,
      });
    });

    setItems(tempItems);
  }, [currentSlide]);

  // Update active slide index
  const handleChange = (direction) => {
    switch (direction) {
      case 'next':
        currentSlide < (slides.length - 1) ? setCurrentSlide(currentSlide + 1) : setCurrentSlide(0);
        break;
      case 'prev':
        currentSlide > 0 ? setCurrentSlide(currentSlide - 1) : setCurrentSlide(slides.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className="slider">
      <div className="slider__wrapper">
        {items.map((item) => (
          <div className="slide" key={uuidv4()} data-active={item.isActive}>
            <img src={item.slide} alt="" />
          </div>
        ))}
      </div>
      {
        slides.length > 1 && (
          <>
            <div className="counter">{`${currentSlide + 1}/${slides.length}`}</div>
            <button type="button" onClick={() => handleChange('prev')} className="prev">Précédent</button>
            <button type="button" onClick={() => handleChange('next')} className="next">Suivant</button>
          </>
        )
      }
    </div>
  );
}

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};
