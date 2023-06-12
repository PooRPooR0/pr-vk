import React from 'react';
import './style/card.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Card = ({className, children}) => (
	<div className={classNames('card', className)}>
		{children}
	</div>
);

Card.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node || PropTypes.string,
};

Card.defaultProps = {
	className: '',
	children: '',
};

export default Card;
