
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Video, Clock, Heart, Stethoscope, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      title: "Reservar Cita",
      description: "Programa una nueva consulta médica",
      icon: Calendar,
      color: "from-blue-600 to-blue-700",
      action: () => navigate('/reservar')
    },
    {
      title: "Cita Virtual",
      description: "Consulta médica por videollamada",
      icon: Video,
      color: "from-green-600 to-green-700",
      action: () => navigate('/cita-virtual')
    },
    {
      title: "Mis Citas",
      description: "Ver y gestionar mis citas programadas",
      icon: Clock,
      color: "from-purple-600 to-purple-700",
      action: () => navigate('/mis-citas')
    }
  ];

  const stats = [
    { label: "Pacientes Atendidos", value: "10,000+", icon: Users },
    { label: "Especialidades", value: "15+", icon: Stethoscope },
    { label: "Años de Experiencia", value: "25+", icon: Heart }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 p-3 rounded-full">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Bienvenido a MediCare Plus
            </h1>
            <p className="text-gray-600 text-lg mt-2">Su salud es nuestra prioridad</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        {quickActions.map((action, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={action.action}>
            <CardHeader className={`bg-gradient-to-r ${action.color} text-white rounded-t-lg`}>
              <CardTitle className="flex items-center gap-3">
                <action.icon className="h-6 w-6" />
                {action.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-600 mb-4">{action.description}</p>
              <Button className={`w-full bg-gradient-to-r ${action.color} hover:opacity-90`}>
                Acceder
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Statistics */}
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Information Section */}
      <Card className="border-blue-200">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
          <CardTitle>Información Importante</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Horarios de Atención</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span>8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span>9:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Emergencias:</span>
                  <span className="text-red-600 font-medium">24/7</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Especialidades Disponibles</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Medicina General</div>
                <div>• Cardiología</div>
                <div>• Dermatología</div>
                <div>• Pediatría</div>
                <div>• Ginecología</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
