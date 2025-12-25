import { Renderer } from 'better-svelte-email';
import { emailList, createEmail, sendEmail } from 'better-svelte-email/preview';
import { env } from '$env/dynamic/private';
import layoutCSS from '../layout.css?raw';

const renderer = new Renderer({ customCSS: layoutCSS });

export function load() {
	const emails = emailList({
		path: '/src/lib/emails' // optional, defaults to '/src/lib/emails'
	});

	return { emails };
}

export const actions = {
	...createEmail({ renderer }),
	...sendEmail({ renderer, resendApiKey: env.RESEND_API_KEY })
};
