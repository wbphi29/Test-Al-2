import { StrictMode } from 'react';
import App from './App.tsx';
import './index.css';
import { ViteSSG } from 'vite-ssg/single-page';

export const createApp = ViteSSG(
  <StrictMode>
    <App />
  </StrictMode>
);
