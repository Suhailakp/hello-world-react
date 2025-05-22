import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => <h1>Hello, World!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);

