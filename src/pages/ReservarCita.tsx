
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import AppointmentBooking from '../components/AppointmentBooking';

const ReservarCita = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Reservar Consulta Médica</h1>
        <p className="text-gray-600">Complete el formulario para programar su cita médica</p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <AppointmentBooking />
      </div>
    </div>
  );
};

export default ReservarCita;
