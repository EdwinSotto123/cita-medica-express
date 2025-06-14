
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Calendar, User, Stethoscope, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import AppointmentForm from './AppointmentForm';
import Header from './Header';

const AppointmentBooking = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleFormSubmit = async (formData: any) => {
    setIsSubmitting(true);
    
    // Simular proceso de envío
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast({
      title: "¡Cita reservada exitosamente!",
      description: `Su cita con ${formData.especialidad} ha sido programada para ${formData.fecha}`,
      duration: 5000,
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      
      <main className="max-w-4xl mx-auto mt-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Information Panel */}
          <div className="md:col-span-1 space-y-6">
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Horarios de Atención
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Lunes - Viernes:</span>
                    <span>8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sábados:</span>
                    <span>9:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Emergencias:</span>
                    <span className="text-red-600 font-medium">24/7</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5" />
                  Especialidades
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Medicina General</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Cardiología</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Dermatología</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Pediatría</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Ginecología</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Form Panel */}
          <div className="md:col-span-2">
            <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Calendar className="h-6 w-6" />
                  Reservar Consulta Médica
                </CardTitle>
                <p className="text-blue-100 mt-2">
                  Complete el formulario para programar su cita médica
                </p>
              </CardHeader>
              <CardContent className="p-8">
                {isSuccess ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800">
                      ¡Cita Reservada Exitosamente!
                    </h3>
                    <p className="text-green-600">
                      Recibirá un correo de confirmación en breve
                    </p>
                    <Button
                      onClick={() => setIsSuccess(false)}
                      className="mt-4 bg-green-600 hover:bg-green-700"
                    >
                      Reservar Otra Cita
                    </Button>
                  </div>
                ) : (
                  <AppointmentForm 
                    onSubmit={handleFormSubmit}
                    isSubmitting={isSubmitting}
                  />
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AppointmentBooking;
