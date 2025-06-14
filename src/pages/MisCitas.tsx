
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, Video, Phone, Edit, Trash2 } from 'lucide-react';

const MisCitas = () => {
  const [citas] = useState([
    {
      id: 1,
      fecha: '2024-06-15',
      hora: '10:00',
      medico: 'Dr. Juan Pérez',
      especialidad: 'Cardiología',
      tipo: 'presencial',
      estado: 'confirmada'
    },
    {
      id: 2,
      fecha: '2024-06-18',
      hora: '15:30',
      medico: 'Dra. María González',
      especialidad: 'Medicina General',
      tipo: 'virtual',
      estado: 'pendiente'
    },
    {
      id: 3,
      fecha: '2024-06-20',
      hora: '09:15',
      medico: 'Dr. Carlos Ruiz',
      especialidad: 'Dermatología',
      tipo: 'presencial',
      estado: 'confirmada'
    }
  ]);

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'confirmada': return 'bg-green-100 text-green-800';
      case 'pendiente': return 'bg-yellow-100 text-yellow-800';
      case 'cancelada': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Mis Citas</h1>
        <p className="text-gray-600">Gestiona todas tus citas médicas</p>
      </div>

      <div className="grid gap-4">
        {citas.map((cita) => (
          <Card key={cita.id} className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    {cita.tipo === 'virtual' ? (
                      <Video className="h-6 w-6 text-blue-600" />
                    ) : (
                      <User className="h-6 w-6 text-blue-600" />
                    )}
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg">{cita.medico}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEstadoColor(cita.estado)}`}>
                        {cita.estado}
                      </span>
                    </div>
                    <p className="text-gray-600">{cita.especialidad}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{cita.fecha}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{cita.hora}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  {cita.tipo === 'virtual' && cita.estado === 'confirmada' && (
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <Video className="h-4 w-4 mr-1" />
                      Unirse
                    </Button>
                  )}
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4 mr-1" />
                    Editar
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                    <Trash2 className="h-4 w-4 mr-1" />
                    Cancelar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Calendar className="h-4 w-4 mr-2" />
          Reservar Nueva Cita
        </Button>
      </div>
    </div>
  );
};

export default MisCitas;
