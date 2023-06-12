import React from 'react';
import Card from '../../shared/ui/Card/Index.jsx';
import CardHeader from '../../shared/ui/CardHeader/index.jsx';
import Logo from '../../shared/ui/Logo/index.jsx';
import './style/login.scss';
import Text from '../../shared/ui/Text/index.jsx';
import {useTranslation} from 'i18nano';
import Button from '../../shared/ui/Button/index.jsx';
import Icon from '../../shared/ui/Icon/index.jsx';
import {Container} from '@mui/material';

const Login = () => {
	const t = useTranslation();

	const authHandler = () => {
		window.location.href = 'https://oauth.vk.com/authorize?client_id=prvk&display=page&redirect_uri=localhost&response_type=token';
	};

	return (
		<Container className='login__container'>
			<Card className='login'>
				<CardHeader>
					<Text component='h4' weight={500} size='lg'>{t('Heading.Login')}</Text>
					<Logo/>
				</CardHeader>
				<div className='login__body'>
					<Text>{t('Text.Login_start')}</Text>
					<div className='login__button-wrapper'>
						<Button onClick={authHandler}>{t('Button.Auth')}<Icon icon='arrow-right-circle'/></Button>
					</div>
					<Text color='disabled'>{t('Text.Login_end')}</Text>
				</div>
			</Card>
		</Container>
	);
};

export default Login;
