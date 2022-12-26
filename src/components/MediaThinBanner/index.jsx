import React from 'react';
import PropTypes from 'prop-types';
import './_style.scss';

export default function MediaThinBanner({ imageUrl, text, isTiny }) {
  return (
    <div className={`media-thin-banner ${isTiny && 'tiny'}`}>
      <div className="image-wrapper">
        <img src={imageUrl} alt="" />
      </div>
      {
        text && (
        <div className="label">
          {text}
        </div>
        )
      }
    </div>
  );
}

MediaThinBanner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  text: PropTypes.string,
  isTiny: PropTypes.bool,
};

MediaThinBanner.defaultProps = {
  text: '',
  isTiny: false,
};
