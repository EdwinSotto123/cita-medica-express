
import React from 'react';
import { Heart, Phone, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="text-center">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 p-3 rounded-full">
          <Heart className="h-8 w-8 text-white" />
        </div>
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            MediCare Plus
          </h1>
          <p className="text-gray-600 text-lg">Centro Médico de Excelencia</p>
        </div>
      </div>
      
      <div className="flex items-center justify-center gap-8 mt-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-blue-600" />
          <span>+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-green-600" />
          <span>Av. Salud 123, Ciudad</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
