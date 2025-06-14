
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FileText, Calendar, User, Clock, Search, Filter, Download } from 'lucide-react';

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

  const getTypeColor = (tipo: string) => {
    switch (tipo) {
      case 'Consulta General':
        return 'bg-blue-100 text-blue-800';
      case 'Especialista':
        return 'bg-purple-100 text-purple-800';
      case 'Laboratorio':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Historial Médico</h1>
          <p className="text-gray-600">Revisa todas tus consultas y tratamientos anteriores</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <Download className="h-4 w-4 mr-2" />
          Descargar Historial
        </Button>
      </div>

      {/* Filtros y Búsqueda */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar por doctor, tipo de consulta o diagnóstico..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant={filterType === 'all' ? 'default' : 'outline'}
                onClick={() => setFilterType('all')}
                size="sm"
              >
                Todos
              </Button>
              <Button
                variant={filterType === 'consulta' ? 'default' : 'outline'}
                onClick={() => setFilterType('consulta')}
                size="sm"
              >
                Consultas
              </Button>
              <Button
                variant={filterType === 'especialista' ? 'default' : 'outline'}
                onClick={() => setFilterType('especialista')}
                size="sm"
              >
                Especialistas
              </Button>
              <Button
                variant={filterType === 'laboratorio' ? 'default' : 'outline'}
                onClick={() => setFilterType('laboratorio')}
                size="sm"
              >
                Laboratorio
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Historial */}
      <div className="space-y-4">
        {filteredHistorial.map((item) => (
          <Card key={item.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{item.tipo}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(item.fecha).toLocaleDateString('es-ES', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {item.doctor}
                      </div>
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.tipo)}`}>
                  {item.tipo}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Diagnóstico</h4>
                <p className="text-gray-700">{item.diagnostico}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Tratamiento</h4>
                <p className="text-gray-700">{item.tratamiento}</p>
              </div>
              
              {item.notas && (
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Notas Adicionales</h4>
                  <p className="text-gray-600 text-sm">{item.notas}</p>
                </div>
              )}
              
              <div className="flex justify-between items-center pt-2 border-t">
                <span className="text-sm text-gray-500">Estado: {item.estado}</span>
                <Button variant="outline" size="sm">
                  Ver Detalles
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredHistorial.length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">No se encontraron registros</h3>
            <p className="text-gray-600">
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
