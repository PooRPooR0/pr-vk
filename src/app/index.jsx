import React from 'react';
import {Provider} from 'react-redux';
import store from './store/store.js';
import {RouterProvider} from 'react-router-dom';
import router from './router/router.jsx';
import {TranslationProvider} from 'i18nano';
import translations from './translations/translations.js';
import './style/reset.scss';
import './style/fonts.scss';
import './style/vars.scss';
import './style/app.scss';

const App = () => (
	<Provider store={store}>
		<TranslationProvider language='ru' translations={translations}>
			<RouterProvider router={router}/>
		</TranslationProvider>
	</Provider>
);

export default App;
