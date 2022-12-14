import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Container({ children }) {
  const Wrapper = styled.div`
    padding: 0 20px;

    @media screen and (min-width: 768px) {
      max-width: 720px;
      margin: 0 auto;
      padding: 0;
    }
    @media screen and (min-width: 992px) {
      max-width: 960px;
    }
    @media screen and (min-width: 1200px) {
      max-width: 1140px;
    }
    @media screen and (min-width: 1400px) {
      max-width: 1240px;
    }
  `;

  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
