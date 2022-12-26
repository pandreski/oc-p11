import React from 'react';
import PropTypes from 'prop-types';
import './_style.scss';

export default function HostProfile({ name, imageUrl }) {
  const getFirstName = () => {
    const wordsArr = name.split(' ');
    return wordsArr.shift();
  };

  const getLastName = () => {
    const wordsArr = name.split(' ');
    const last = wordsArr.slice(1);
    return last.join(' ');
  };

  return (
    <div className="host-profile">
      <div className="name">
        {getFirstName()}
        <br />
        {getLastName()}
      </div>
      <img src={imageUrl} alt={name} />
    </div>
  );
}

HostProfile.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
