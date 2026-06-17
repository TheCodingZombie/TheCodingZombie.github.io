import { createRoot } from 'react-dom/client';
import { AboutApp } from './AboutApp';

const root = createRoot(document.getElementById('about'));
root.render(
  <AboutApp />
);