import { Renderer } from 'better-svelte-email';
import { emailList, createEmail } from 'better-svelte-email/preview';

const renderer = new Renderer({}, 'src/routes/layout.css');

export function load() {
	const emails = emailList({
		path: '/src/lib/emails' // optional, defaults to '/src/lib/emails'
	});

	return { emails };
}

export const actions = {
	...createEmail({ renderer })
};
