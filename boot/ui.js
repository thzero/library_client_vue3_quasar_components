
import {
	Quasar,
	Loading
	// Notify
} from 'quasar';

import '@quasar/extras/material-icons/material-icons.css';

// import quasarUserOptions from '@/quasar-user-options';
import '@/styles/quasar.sass';

export default async ({
	framework,
	options
}) => {
	const options1 = Object.assign({
			config: {},
			plugins: []
		}, options);

	try {
		if (options1.plugins[Loading] == null)
			// options1.plugins.push(Loading);
			if (Array.isArray(options1.plugins))
				options1.plugins.push(Loading);
			else
				options.plugins.Loading = Loading;
			// if (options1.plugins[Notify] == null) {
			// 	options1.plugins.push(Notify);
			// 	options1.config = { /* look at QuasarConfOptions from the API card */ };
			// }
	}
	catch (err) {
		console.log(err);
	}

	framework.use(Quasar, options1);
};
