
import {
	Quasar,
	Loading
} from 'quasar';

import '@quasar/extras/material-icons/material-icons.css';

// import quasarUserOptions from '@/quasar-user-options';
import '@/styles/quasar.sass';

export default async ({
	framework
}) => {
	const options = Object.assign({
			config: {},
			plugins: []
		});
		// ,
		// quasarUserOptions);

	try {
		if (options.plugins[Loading] == null)
			options.plugins.push(Loading);
	}
	catch (err) {
		console.log(err);
	}

	framework.use(Quasar, options);
};
