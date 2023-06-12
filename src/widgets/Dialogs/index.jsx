import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './style/dialogs.scss';

const Dialogs = ({className}) => {
	const baseClassName = classNames('dialogs', className);

	return (
		<div className={baseClassName}>
			<div className='dialogs__header'>

			</div>
			<div className='dialogs__content'>

			</div>
		</div>
	);
};

Dialogs.propTypes = {
	className: PropTypes.string,
};

Dialogs.defaultProps = {
	className: '',
};

export default Dialogs;
