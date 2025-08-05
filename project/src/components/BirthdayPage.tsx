import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const BirthdayPage: React.FC = () => {
  const [countdown, setCountdown] = useState(10);
  const [showSurprise, setShowSurprise] = useState(false);
  const [showCake, setShowCake] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showNote, setShowNote] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowSurprise(true);
          setTimeout(() => setShowCake(true), 500);
          setTimeout(() => setShowFireworks(true), 1500);
          setTimeout(() => setShowMessage(true), 2500);
          setTimeout(() => setShowNote(true), 3000);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
      {/* Creamy Background Swirls */}
      <div className="absolute inset-0">
        {/* Multiple colorful paint spots - more vibrant and less blurry */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-yellow-400/60 to-orange-400/60 rounded-full blur-xl animate-swirl" />
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-br from-pink-400/60 to-red-400/60 rounded-full blur-xl animate-swirl-reverse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/50 to-blue-400/50 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-10 right-1/4 w-48 h-48 bg-gradient-to-br from-green-400/50 to-teal-400/50 rounded-full blur-xl animate-float" />
        
        {/* Additional colorful spots - more vibrant and numerous */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-indigo-400/55 to-violet-400/55 rounded-full blur-lg animate-float-delayed" />
        <div className="absolute bottom-20 left-1/3 w-56 h-56 bg-gradient-to-br from-rose-400/55 to-pink-500/55 rounded-full blur-xl animate-swirl" />
        <div className="absolute top-16 left-2/3 w-40 h-40 bg-gradient-to-br from-cyan-400/50 to-blue-500/50 rounded-full blur-lg animate-float" />
        <div className="absolute bottom-1/4 right-1/3 w-44 h-44 bg-gradient-to-br from-lime-400/55 to-green-500/55 rounded-full blur-lg animate-swirl-reverse" />
        <div className="absolute top-2/3 left-16 w-36 h-36 bg-gradient-to-br from-amber-400/60 to-yellow-500/60 rounded-full blur-lg animate-float-delayed" />
        <div className="absolute bottom-16 right-20 w-28 h-28 bg-gradient-to-br from-fuchsia-400/55 to-purple-500/55 rounded-full blur-md animate-float" />
        <div className="absolute top-40 right-1/2 w-52 h-52 bg-gradient-to-br from-emerald-400/50 to-teal-500/50 rounded-full blur-xl animate-swirl" />
        <div className="absolute bottom-40 left-1/2 w-48 h-48 bg-gradient-to-br from-orange-400/55 to-red-500/55 rounded-full blur-lg animate-swirl-reverse" />
        
        {/* Even more paint spots for fuller background */}
        <div className="absolute top-8 left-1/2 w-24 h-24 bg-gradient-to-br from-violet-400/50 to-purple-500/50 rounded-full blur-md animate-float" />
        <div className="absolute top-1/3 right-8 w-36 h-36 bg-gradient-to-br from-coral-400/50 to-pink-500/50 rounded-full blur-lg animate-swirl-reverse" />
        <div className="absolute bottom-8 left-8 w-32 h-32 bg-gradient-to-br from-turquoise-400/50 to-cyan-500/50 rounded-full blur-lg animate-float-delayed" />
        <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-gradient-to-br from-mint-400/50 to-green-500/50 rounded-full blur-md animate-swirl" />
        <div className="absolute bottom-1/3 right-8 w-40 h-40 bg-gradient-to-br from-peach-400/50 to-orange-500/50 rounded-full blur-lg animate-float" />
        <div className="absolute top-3/4 left-1/3 w-20 h-20 bg-gradient-to-br from-lavender-400/50 to-indigo-500/50 rounded-full blur-sm animate-swirl-reverse" />
        <div className="absolute top-12 right-1/3 w-44 h-44 bg-gradient-to-br from-salmon-400/50 to-red-500/50 rounded-full blur-lg animate-float-delayed" />
        <div className="absolute bottom-12 left-1/4 w-38 h-38 bg-gradient-to-br from-sky-400/50 to-blue-500/50 rounded-full blur-lg animate-swirl" />
        <div className="absolute top-1/6 left-1/6 w-26 h-26 bg-gradient-to-br from-chartreuse-400/50 to-lime-500/50 rounded-full blur-md animate-float" />
        <div className="absolute bottom-1/6 right-1/6 w-34 h-34 bg-gradient-to-br from-magenta-400/50 to-fuchsia-500/50 rounded-full blur-lg animate-swirl-reverse" />
      </div>

      {/* Hanging Gift Tag - Only show after countdown */}
      {showNote && (
        <div className="absolute top-8 right-8 z-50 animate-fade-in">
          <div className="flex flex-col items-end">
            <div className="w-0.5 h-16 bg-gradient-to-b from-yellow-600 to-yellow-700 animate-string-sway" />
            <div className="bg-gradient-to-br from-cream-100 to-yellow-50 p-4 rounded-lg shadow-lg border-2 border-yellow-300 transform rotate-3 hover:rotate-0 transition-transform duration-300 max-w-xs">
              <p className="text-gray-800 font-poppins text-sm text-center leading-relaxed">
                Happy birthday to the best dad ever{' '}
                <Heart className="inline w-4 h-4 text-red-500 fill-current" />
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Countdown */}
      {!showSurprise && (
        <>
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-pulse mb-4">
                {countdown}
              </div>
              <p className="text-2xl md:text-3xl text-gray-600 font-poppins">
                Get ready for a surprise...
              </p>
            </div>
          </div>
        </>
      )}

      {/* Birthday Surprise */}
      {showSurprise && (
        <div className="flex flex-col items-center justify-center min-h-screen relative">
          {/* Fireworks */}
          {showFireworks && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full animate-firework"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    backgroundColor: `hsl(${Math.random() * 360}, 80%, 60%)`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          )}

          {/* Happy Birthday Message */}
          {showMessage && (
            <div className="z-30 mb-8">
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-sparkle text-center font-poppins">
                🎉 Happy Birthday! 🎉
              </h1>
            </div>
          )}

          {/* Birthday Cake */}
          {showCake && (
            <div className="relative z-20 mt-8">
              <div className="cake-container animate-cake-rise">
                {/* Multi-layered Birthday Cake inspired by reference image */}
                <div className="relative">
                  {/* Candles */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="relative">
                        {/* Candle stick with stripes */}
                        <div className={`w-2 h-8 rounded-full shadow-sm ${
                          i % 2 === 0 
                            ? 'bg-gradient-to-b from-red-400 to-red-600' 
                            : i % 3 === 0 
                              ? 'bg-gradient-to-b from-blue-400 to-blue-600'
                              : 'bg-gradient-to-b from-green-400 to-green-600'
                        }`} />
                        {/* Candle flame */}
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-2.5 h-3 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-full animate-candle-flame shadow-lg" />
                      </div>
                    ))}
                  </div>
                  
                  {/* Top Layer - Chocolate with pink frosting */}
                  <div className="w-28 h-10 bg-gradient-to-b from-amber-800 to-amber-900 rounded-t-lg mx-auto relative shadow-lg">
                    {/* Pink wavy frosting on top */}
                    <div className="absolute -top-1 left-0 right-0 h-3 bg-gradient-to-b from-pink-300 to-pink-400 rounded-t-lg" 
                         style={{clipPath: 'polygon(0 50%, 10% 30%, 20% 50%, 30% 20%, 40% 50%, 50% 30%, 60% 50%, 70% 20%, 80% 50%, 90% 30%, 100% 50%, 100% 100%, 0% 100%)'}} />
                    {/* Colorful sprinkles */}
                    <div className="absolute top-1 left-2 w-1 h-1 bg-red-500 rounded-full" />
                    <div className="absolute top-2 left-6 w-1 h-1 bg-blue-500 rounded-full" />
                    <div className="absolute top-1 right-4 w-1 h-1 bg-green-500 rounded-full" />
                    <div className="absolute top-3 right-2 w-1 h-1 bg-yellow-500 rounded-full" />
                  </div>
                  
                  {/* Middle Layer - Vanilla with purple frosting */}
                  <div className="w-36 h-12 bg-gradient-to-b from-yellow-200 to-yellow-300 rounded-t-lg mx-auto relative shadow-lg">
                    {/* Purple wavy frosting */}
                    <div className="absolute -top-1 left-0 right-0 h-3 bg-gradient-to-b from-purple-300 to-purple-400 rounded-t-lg"
                         style={{clipPath: 'polygon(0 50%, 10% 20%, 20% 50%, 30% 30%, 40% 50%, 50% 20%, 60% 50%, 70% 30%, 80% 50%, 90% 20%, 100% 50%, 100% 100%, 0% 100%)'}} />
                    {/* Colorful decorations */}
                    <div className="absolute top-1 left-3 w-1 h-1 bg-red-500 rounded-full" />
                    <div className="absolute top-2 left-8 w-1 h-1 bg-green-500 rounded-full" />
                    <div className="absolute top-1 right-6 w-1 h-1 bg-blue-500 rounded-full" />
                    <div className="absolute top-3 right-3 w-1 h-1 bg-orange-500 rounded-full" />
                  </div>
                  
                  {/* Bottom Layer - Chocolate with pink frosting */}
                  <div className="w-44 h-14 bg-gradient-to-b from-amber-800 to-amber-900 rounded-t-lg mx-auto relative shadow-lg">
                    {/* Pink wavy frosting */}
                    <div className="absolute -top-1 left-0 right-0 h-4 bg-gradient-to-b from-pink-300 to-pink-400 rounded-t-lg"
                         style={{clipPath: 'polygon(0 50%, 8% 30%, 16% 50%, 24% 20%, 32% 50%, 40% 30%, 48% 50%, 56% 20%, 64% 50%, 72% 30%, 80% 50%, 88% 20%, 96% 50%, 100% 50%, 100% 100%, 0% 100%)'}} />
                    {/* More colorful decorations */}
                    <div className="absolute top-2 left-4 w-1 h-1 bg-red-500 rounded-full" />
                    <div className="absolute top-1 left-10 w-1 h-1 bg-blue-500 rounded-full" />
                    <div className="absolute top-3 left-16 w-1 h-1 bg-green-500 rounded-full" />
                    <div className="absolute top-2 right-8 w-1 h-1 bg-yellow-500 rounded-full" />
                    <div className="absolute top-1 right-4 w-1 h-1 bg-purple-500 rounded-full" />
                    <div className="absolute top-3 right-12 w-1 h-1 bg-orange-500 rounded-full" />
                  </div>
                  
                  {/* Cake Plate - Purple like in reference */}
                  <div className="w-48 h-3 bg-gradient-to-b from-purple-300 to-purple-400 rounded-full mx-auto shadow-xl relative">
                    <div className="absolute inset-x-1 inset-y-0 h-2 bg-gradient-to-b from-purple-200 to-purple-300 rounded-full opacity-80" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BirthdayPage;