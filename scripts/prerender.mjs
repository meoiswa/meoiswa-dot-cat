// Pre-render script: builds the SSR bundle, renders the app to HTML,
// pretty-prints and injects it into the client-built index.html, then
// removes the temporary SSR bundle.
import { build } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const serverDir = path.join(distDir, 'server');

// 1. Build the SSR bundle into dist/server/
await build({
  root,
  logLevel: 'warn',
  build: {
    ssr: 'src/entry-server.tsx',
    outDir: 'dist/server',
    emptyOutDir: true,
  },
});

// 2. Render the app to an HTML string
const { render } = await import(path.join(serverDir, 'entry-server.js'));
const { html: appHtml } = render();

// 3. Inject the rendered HTML into the client-built template
const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
const injected = template.replace('<!--app-html-->', appHtml);

fs.writeFileSync(path.join(distDir, 'index.html'), injected);

// 4. Remove the SSR bundle — only needed during the build step
fs.rmSync(serverDir, { recursive: true });

console.log('✓ Pre-render complete');
