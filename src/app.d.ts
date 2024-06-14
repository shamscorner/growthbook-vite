// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { GrowthBook } from '$lib/index.ts';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			gb: GrowthBook<Record<string, any>>;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
