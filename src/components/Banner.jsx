import React from 'react';
import PropTypes from 'prop-types';

import { Alert } from '@openedx/paragon';
import { Warning } from '@openedx/paragon/icons';

export const Banner = ({
  children, variant, icon, className,
}) => (
  <Alert variant={variant} className={className} icon={icon}>
    {children}
  </Alert>
);
Banner.defaultProps = {
  icon: Warning,
  variant: 'info',
  className: 'mb-0',
};
Banner.propTypes = {
  variant: PropTypes.string,
  icon: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Banner;
