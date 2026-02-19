import React from 'react';
import { createRoot } from 'react-dom/client';
import EventPage from './components/event/EventPage.jsx';
import './styles/global.css';

createRoot(document.getElementById('root')).render(<EventPage />);
