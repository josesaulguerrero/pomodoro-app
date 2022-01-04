/* eslint-disable no-restricted-globals */
import { clientsClaim } from "workbox-core";
// import { CacheableResponse } from "workbox-cacheable-response";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate, CacheFirst } from "workbox-strategies";

// const {skipWaiting} = window.self as ServiceWorkerGlobalScope

clientsClaim();
(self as unknown as ServiceWorkerGlobalScope).skipWaiting();
precacheAndRoute((self as unknown as ServiceWorkerGlobalScope).__WB_MANIFEST);

registerRoute(
	({ request }) => request.destination === "image",
	new CacheFirst({
		cacheName: "images",
		plugins: [
			new ExpirationPlugin({
				maxEntries: 60,
				maxAgeSeconds: 30 * 24 * 60 * 60,
			}),
		],
	})
);

registerRoute(
	({ request }) =>
		request.destination === "script" || request.destination === "style",
	new StaleWhileRevalidate({
		cacheName: "static-resources",
	})
);
