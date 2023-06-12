import React from 'react';
import './style/card-header.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const CardHeader = ({className, children}) => (
	<div className={classNames('card-header', className)}>
		{children}
	</div>
);

CardHeader.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node || PropTypes.string,
};

CardHeader.defaultProps = {
	className: '',
	children: '',
};

export default CardHeader;
