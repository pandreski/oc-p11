import PropTypes from 'prop-types';
import './_style.scss';

export default function Tag({ label }) {
  return (
    <div className="tag">{label}</div>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
};
