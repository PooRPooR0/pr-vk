import React from 'react';
import Header from '../../widgets/Header/index.jsx';
import Dialogs from '../../widgets/Dialogs/index.jsx';
import {Container, Stack} from '@mui/material';

import './style/messenger.scss';

const Messenger = () => (
	<>
		<Header/>
		<Container className='messenger__content'>
			<Stack direction='row' spacing={2.5}>
				<Dialogs className='messenger__dialogs'/>
			</Stack>
		</Container>
	</>
);

export default Messenger;
