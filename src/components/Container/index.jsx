import PropTypes from 'prop-types';
import './_style.scss';

export default function Container({ children }) {
  return (
    <div className="container">
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
