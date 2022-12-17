import PropTypes from 'prop-types';
import { useState } from 'react';
import './_style.scss';

export default function Collapse({ title, body }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="collapse" aria-expanded={isOpen}>
      <div className="collapse__header" role="button" tabIndex="0" onClick={handleClick} onKeyDown={handleKeyDown}>{title}</div>
      <div className="collapse__content">
        <span className="text-wrapper">
          {body}
        </span>
      </div>
      {isOpen}
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
};
