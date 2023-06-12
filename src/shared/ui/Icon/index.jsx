import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './style/icon.scss';

const Icon = ({icon, size}) => (
	<div className={classNames('icon', icon, size)} />
);

Icon.propTypes = {
	icon: PropTypes.string,
	size: PropTypes.oneOf(['md']),
};

Icon.defaultProps = {
	icon: '',
	size: 'md',
};

export default Icon;
