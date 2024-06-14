# growthbook-vite

This is an unofficial Growthbook library for Sveltekit projects until they release their official one. This is based on their JS-sdk.

Check out the official website [`Growthbook`](https://www.growthbook.io/).

Read more about this in their official [Github repository](https://github.com/growthbook/growthbook).

## How to use

### Method 1

Run the below command to install the package.

```bash
npm i @shamscorner/growthbook-vite
```

Then import the package in your project.

```javascript
import { Growthbook } from '@shamscorner/growthbook-vite';
```

Then you have to setup everything by yourself. Follow the js-sdk documentation to setup the growthbook instance.

### Method 2

**OR**, you can import growthbook instance directly.

```javascript
import { growthbook } from '@shamscorner/growthbook-vite/setup';
```

Put the below environment variables in your `.env` file. You can update the values based on your project.

```env
PUBLIC_GROWTHBOOK_API_HOST=https://cdn.growthbook.io
PUBLIC_GROWTHBOOK_CLIENT_KEY=xxx
PUBLIC_GROWTHBOOK_IS_ENABLE_DEV_MODE=true
```

We take care of the setup for you. You can directly use the `growthbook` instance in your project.
