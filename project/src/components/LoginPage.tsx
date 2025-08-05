import React, { useState } from 'react';
import { Phone } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validatePhoneNumber = (phone: string) => {
    const indianPhoneRegex = /^[6-9]\d{9}$/;
    return indianPhoneRegex.test(phone);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validatePhoneNumber(phoneNumber)) {
      setIsValid(true);
      onLogin();
    } else {
      setIsValid(false);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setPhoneNumber(value);
      setIsValid(true);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-900">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Planets */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-70 animate-float" />
      <div className="absolute bottom-32 left-16 w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full opacity-60 animate-float-delayed" />
      <div className="absolute top-1/3 left-10 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full opacity-50 animate-float" />

      {/* Login Form */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md">
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 shadow-2xl border border-white/20">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2 font-poppins">
                Welcome
              </h1>
              <p className="text-white/80 font-light">
                Enter your phone number to continue
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <div className="absolute left-12 top-1/2 transform -translate-y-1/2 text-white/60">
                    +91
                  </div>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="Enter 10-digit number"
                    className={`w-full pl-20 pr-4 py-3 bg-white/10 border ${
                      isValid ? 'border-white/30' : 'border-red-400'
                    } rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300`}
                  />
                </div>
                {!isValid && (
                  <p className="text-red-400 text-sm mt-2">
                    Please enter a valid 10-digit Indian phone number
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 glow-effect"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;