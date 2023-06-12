import React from 'react';
import './style/button.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({className, children, onClick, disabled}) => (
	<button disabled={disabled} onClick={onClick} className={classNames('button', className)}>
		<span className='button__content'>{children}</span>
	</button>
);

Button.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node || PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	className: '',
	children: '',
	disabled: false,
	onClick() {},
};

export default Button;
