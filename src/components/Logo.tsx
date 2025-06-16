
import React from 'react';
import { TrendingUp } from 'lucide-react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <div className="bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 p-3 rounded-xl shadow-lg shadow-gold-500/30">
          <TrendingUp className="w-8 h-8 text-black" />
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold-300 rounded-full animate-pulse"></div>
      </div>
      <div className="ml-4">
        <h1 className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300 bg-clip-text text-transparent">
            Lead
          </span>
          <span className="text-white ml-2">
            Prospect
          </span>
        </h1>
        <p className="text-xs text-gold-200 font-light tracking-wider uppercase">
          Agence Web
        </p>
      </div>
    </div>
  );
};

export default Logo;
