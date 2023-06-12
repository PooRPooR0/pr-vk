import React from 'react';
import {Container} from '@mui/material';

import './style/header.scss';
import Logo from '../../shared/ui/Logo/index.jsx';

const Header = () => (
	<div className='header'>
		<Container>
			<Logo/>
		</Container>
	</div>
);

export default Header;
