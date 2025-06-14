
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Video, Calendar, Clock, User, Phone } from 'lucide-react';

const CitaVirtual = () => {
  const [isConnecting, setIsConnecting] = useState(false);

  const handleStartCall = () => {
    setIsConnecting(true);
    // Simular conexión
    setTimeout(() => {
      setIsConnecting(false);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Cita Virtual</h1>
        <p className="text-gray-600">Consulta médica por videollamada</p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Video Call Interface */}
        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-3">
              <Video className="h-6 w-6" />
              Videollamada
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              {isConnecting ? (
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Conectando...</p>
                </div>
              ) : (
                <div className="text-center">
                  <Video className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Videollamada no iniciada</p>
                </div>
              )}
            </div>
            <div className="space-y-3">
              <Button 
                className="w-full bg-green-600 hover:bg-green-700" 
                onClick={handleStartCall}
                disabled={isConnecting}
              >
                <Video className="h-4 w-4 mr-2" />
                {isConnecting ? 'Conectando...' : 'Iniciar Videollamada'}
              </Button>
              <Button variant="outline" className="w-full">
                <Phone className="h-4 w-4 mr-2" />
                Llamada de Audio
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Appointment Info */}
        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-3">
              <Calendar className="h-6 w-6" />
              Información de la Cita
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <User className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-medium">Dr. María González</p>
                <p className="text-sm text-gray-600">Medicina General</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <Clock className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium">Hoy, 15:30</p>
                <p className="text-sm text-gray-600">Duración: 30 minutos</p>
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-semibold mb-3">Preparación para la consulta:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Tenga a mano su documento de identidad</li>
                <li>• Prepare la lista de medicamentos actuales</li>
                <li>• Esté en un lugar bien iluminado</li>
                <li>• Verifique su conexión a internet</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CitaVirtual;
