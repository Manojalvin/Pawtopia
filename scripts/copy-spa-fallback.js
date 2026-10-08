import { copyFile } from 'node:fs/promises';

// GitHub Pages serves 404.html for unknown paths. Copying the SPA entry point
// there lets React Router handle direct visits to routes such as /product/:id.
await copyFile('dist/index.html', 'dist/404.html');
