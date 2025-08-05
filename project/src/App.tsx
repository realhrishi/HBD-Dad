import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import BirthdayPage from './components/BirthdayPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen">
      {!isLoggedIn ? (
        <LoginPage onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <BirthdayPage />
      )}
    </div>
  );
}

export default App;