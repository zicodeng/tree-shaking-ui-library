import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ color, ...restProps }) => (
  <span
    {...restProps}
    style={{
      color,
    }}
  />
);

Text.propTypes = {
  color: PropTypes.string,
};

Text.defaultProps = {
  color: 'red',
};

export default Text;
