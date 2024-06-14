import {
	PUBLIC_GROWTHBOOK_API_HOST,
	PUBLIC_GROWTHBOOK_CLIENT_KEY,
	PUBLIC_GROWTHBOOK_IS_ENABLE_DEV_MODE
} from '$env/static/public';
import { GrowthBook } from '$lib/index.js';

export const growthbook = new GrowthBook({
	apiHost: PUBLIC_GROWTHBOOK_API_HOST,
	clientKey: PUBLIC_GROWTHBOOK_CLIENT_KEY,
	enableDevMode: PUBLIC_GROWTHBOOK_IS_ENABLE_DEV_MODE === 'true',
	trackingCallback: (experiment, result) => {
		// TODO: Use your real analytics tracking system
		console.log('Viewed Experiment', {
			experimentId: experiment.key,
			variationId: result.key
		});
	}
});
