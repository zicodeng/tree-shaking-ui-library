import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '../Text';

const Header = ({ color, ...restProps }) => (
  <header
    style={{
      backgroundColor: 'yellow',
    }}
  >
    <Text color={color} {...restProps} />
  </header>
);

Header.propTypes = {
  color: PropTypes.string,
};

Header.defaultProps = {
  color: 'red',
};

export default Header;
