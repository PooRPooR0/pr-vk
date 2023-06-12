import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Messenger from '../../pages/Messenger/index.jsx';
import Login from '../../pages/Login/index.jsx';

export default createBrowserRouter([
	{
		path: '/',
		element: <Messenger />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/vk-login',
		element() {
			return null;
		},
	},
]);
