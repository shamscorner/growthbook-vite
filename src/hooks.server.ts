import type { Handle } from '@sveltejs/kit';
import { growthbook } from './growthbook.js';

export const handle: Handle = async ({ event, resolve }) => {
	await growthbook.init({ streaming: true });
	event.locals.gb = growthbook;
	return await resolve(event);
};
