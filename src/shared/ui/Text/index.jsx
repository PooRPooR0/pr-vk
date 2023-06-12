import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './style/text.scss';

const Text = ({className, children, component, font, color, weight, size}) => {
	const getProps = () => ({className: classNames('text', className, `text_font_${font}`, `text_color_${color}`, `text_weight_${weight}`, `text_size_${size}`)});

	switch (component) {
		case 'h1':
			return (
				<h1 {...getProps()}>{children}</h1>
			);
		case 'h4':
			return (
				<h4 {...getProps()}>{children}</h4>
			);
		default:
			return (
				<span {...getProps()}>{children}</span>
			);
	}
};

Text.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node || PropTypes.string,
	component: PropTypes.string,
	font: PropTypes.oneOf(['Inter', 'Montserrat']),
	color: PropTypes.oneOf(['main', 'disabled']),
	weight: PropTypes.oneOf([400, 500, 700]),
	size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

Text.defaultProps = {
	className: '',
	children: '',
	component: 'span',
	font: 'Inter',
	color: 'main',
	weight: 400,
	size: 'md',
};

export default Text;
