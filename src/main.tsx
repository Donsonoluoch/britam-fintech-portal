import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BankProvider } from './context/BankContext'; // Ensure this path is correct
import './index.css';

// 1. Lazy load the app for performance (Britam requirement)
const App = lazy(() => import('./App'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 2. Wrap the Provider around the Suspense and App */}
    <BankProvider>
      <Suspense fallback={
        <div className="h-screen w-screen flex items-center justify-center bg-gray-50">
          <div className="text-blue-900 font-bold animate-pulse text-xl">
            BRITAM BETALAB PORTAL...
          </div>
        </div>
      }>
        <App />
      </Suspense>
    </BankProvider>
  </React.StrictMode>
);