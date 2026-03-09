import './index.css';
import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';

const rootEl = document.getElementById('root') as HTMLElement;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// In production the root already has server-rendered elements — hydrate it.
// In dev the placeholder comment is not an element, so fall through to createRoot.
if (rootEl.firstElementChild) {
  hydrateRoot(rootEl, app);
} else {
  createRoot(rootEl).render(app);
}
