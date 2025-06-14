
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FileText, Calendar, User, Clock, Search, Filter, Download, Activity, Stethoscope, FlaskConical } from 'lucide-react';

const HistorialMedico = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const historialData = [
    {
      id: 1,
      fecha: '2024-06-10',
      tipo: 'Consulta General',
      doctor: 'Dr. María González',
      diagnostico: 'Revisión rutinaria - Estado de salud excelente',
      tratamiento: 'Continuar con hábitos saludables',
      notas: 'Paciente en buen estado general. Presión arterial normal.',
      estado: 'Completada'
    },
    {
      id: 2,
      fecha: '2024-05-15',
      tipo: 'Laboratorio',
      doctor: 'Lab. Central',
      diagnostico: 'Análisis de sangre completo',
      tratamiento: 'Resultados dentro de parámetros normales',
      notas: 'Colesterol: 180 mg/dl, Glucosa: 95 mg/dl',
      estado: 'Completada'
    },
    {
      id: 3,
      fecha: '2024-04-20',
      tipo: 'Especialista',
      doctor: 'Dr. Carlos Ruiz (Cardiólogo)',
      diagnostico: 'Evaluación cardiovascular preventiva',
      tratamiento: 'Ejercicio regular, dieta balanceada',
      notas: 'Electrocardiograma normal. Función cardíaca excelente.',
      estado: 'Completada'
    },
    {
      id: 4,
      fecha: '2024-03-08',
      tipo: 'Consulta General',
      doctor: 'Dr. María González',
      diagnostico: 'Gripe estacional',
      tratamiento: 'Reposo, hidratación, paracetamol',
      notas: 'Síntomas leves. Recuperación completa en 5 días.',
      estado: 'Completada'
    }
  ];

  const filteredHistorial = historialData.filter(item => {
    const matchesSearch = item.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.diagnostico.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterType === 'all' || item.tipo.toLowerCase().includes(filterType.toLowerCase());
    
    return matchesSearch && matchesFilter;
  });

  const getTypeIcon = (tipo: string) => {
    switch (tipo) {
      case 'Consulta General':
        return <Stethoscope className="h-5 w-5" />;
      case 'Especialista':
        return <Activity className="h-5 w-5" />;
      case 'Laboratorio':
        return <FlaskConical className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  const getTypeGradient = (tipo: string) => {
    switch (tipo) {
      case 'Consulta General':
        return 'gradient-care';
      case 'Especialista':
        return 'gradient-health';
      case 'Laboratorio':
        return 'gradient-wellness';
      default:
        return 'gradient-primary';
    }
  };

  const getTypeColor = (tipo: string) => {
    switch (tipo) {
      case 'Consulta General':
        return 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border border-blue-200';
      case 'Especialista':
        return 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border border-purple-200';
      case 'Laboratorio':
        return 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200';
      default:
        return 'bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800 border border-gray-200';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gradient">Historial Médico</h1>
          <p className="text-lg text-gray-600">Revisa todas tus consultas y tratamientos anteriores</p>
        </div>
        <Button className="gradient-wellness text-white button-glow shadow-lg hover:shadow-xl transition-all duration-300">
          <Download className="h-4 w-4 mr-2" />
          Descargar Historial
        </Button>
      </div>

      {/* Filtros y Búsqueda */}
      <Card className="glass-card border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 h-5 w-5" />
                <Input
                  placeholder="Buscar por doctor, tipo de consulta o diagnóstico..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant={filterType === 'all' ? 'default' : 'outline'}
                onClick={() => setFilterType('all')}
                size="sm"
                className={filterType === 'all' ? 'gradient-primary text-white' : 'hover:bg-blue-50 border-blue-200'}
              >
                Todos
              </Button>
              <Button
                variant={filterType === 'consulta' ? 'default' : 'outline'}
                onClick={() => setFilterType('consulta')}
                size="sm"
                className={filterType === 'consulta' ? 'gradient-care text-white' : 'hover:bg-cyan-50 border-cyan-200'}
              >
                Consultas
              </Button>
              <Button
                variant={filterType === 'especialista' ? 'default' : 'outline'}
                onClick={() => setFilterType('especialista')}
                size="sm"
                className={filterType === 'especialista' ? 'gradient-health text-white' : 'hover:bg-purple-50 border-purple-200'}
              >
                Especialistas
              </Button>
              <Button
                variant={filterType === 'laboratorio' ? 'default' : 'outline'}
                onClick={() => setFilterType('laboratorio')}
                size="sm"
                className={filterType === 'laboratorio' ? 'gradient-wellness text-white' : 'hover:bg-green-50 border-green-200'}
              >
                Laboratorio
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Historial */}
      <div className="space-y-6">
        {filteredHistorial.map((item, index) => (
          <Card key={item.id} className="glass-card card-hover border-0 shadow-xl overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${getTypeGradient(item.tipo)} float`} style={{ animationDelay: `${index * 0.2}s` }}>
                    {getTypeIcon(item.tipo)}
                    <span className="text-white">{getTypeIcon(item.tipo)}</span>
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gradient">{item.tipo}</CardTitle>
                    <div className="flex items-center gap-6 text-sm text-gray-600 mt-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-blue-500" />
                        <span className="font-medium">
                          {new Date(item.fecha).toLocaleDateString('es-ES', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-green-500" />
                        <span className="font-medium">{item.doctor}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getTypeColor(item.tipo)} shadow-lg`}>
                  {item.tipo}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-bold text-gray-800 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    Diagnóstico
                  </h4>
                  <p className="text-gray-700 pl-4 border-l-2 border-blue-200">{item.diagnostico}</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-bold text-gray-800 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    Tratamiento
                  </h4>
                  <p className="text-gray-700 pl-4 border-l-2 border-green-200">{item.tratamiento}</p>
                </div>
              </div>
              
              {item.notas && (
                <div className="space-y-2">
                  <h4 className="font-bold text-gray-800 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    Notas Adicionales
                  </h4>
                  <p className="text-gray-600 text-sm pl-4 border-l-2 border-purple-200 bg-purple-50 p-3 rounded-r-lg">{item.notas}</p>
                </div>
              )}
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="status-completed w-3 h-3 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-600">Estado: {item.estado}</span>
                </div>
                <Button variant="outline" size="sm" className="gradient-primary text-white border-0 hover:shadow-lg transition-all duration-300">
                  Ver Detalles
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredHistorial.length === 0 && (
        <Card className="glass-card border-0 shadow-lg">
          <CardContent className="text-center py-12">
            <div className="float">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-6" />
            </div>
            <h3 className="text-2xl font-bold text-gradient mb-3">No se encontraron registros</h3>
            <p className="text-gray-600 text-lg">
              {searchTerm || filterType !== 'all' 
                ? 'Intenta cambiar los filtros de búsqueda'
                : 'Aún no tienes historial médico registrado'
              }
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default HistorialMedico;
