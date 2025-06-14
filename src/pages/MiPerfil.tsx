
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Phone, Mail, MapPin, Calendar, Edit3, Save, X, Heart, Shield } from 'lucide-react';

const MiPerfil = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    nombre: 'Juan Carlos Pérez',
    email: 'juan.perez@email.com',
    telefono: '+1 (555) 123-4567',
    fechaNacimiento: '1985-03-15',
    direccion: 'Av. Principal 123, Ciudad',
    tipoSangre: 'O+',
    alergias: 'Penicilina, Polen',
    contactoEmergencia: 'María Pérez - +1 (555) 987-6543'
  });

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log('Datos guardados:', profileData);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gradient">Mi Perfil</h1>
          <p className="text-lg text-gray-600">Gestiona tu información personal y médica</p>
        </div>
        <div className="flex gap-3">
          {isEditing ? (
            <>
              <Button onClick={handleSave} className="gradient-wellness text-white button-glow shadow-lg hover:shadow-xl transition-all duration-300">
                <Save className="h-4 w-4 mr-2" />
                Guardar
              </Button>
              <Button onClick={handleCancel} variant="outline" className="border-2 hover:bg-gray-50">
                <X className="h-4 w-4 mr-2" />
                Cancelar
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)} className="gradient-primary text-white button-glow shadow-lg hover:shadow-xl transition-all duration-300">
              <Edit3 className="h-4 w-4 mr-2" />
              Editar Perfil
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Información Personal */}
        <Card className="glass-card card-hover border-0 shadow-2xl">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-3 rounded-full gradient-care">
                <User className="h-6 w-6 text-white" />
              </div>
              <span className="text-gradient">Información Personal</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="nombre" className="text-sm font-semibold text-gray-700">Nombre Completo</Label>
              <Input
                id="nombre"
                value={profileData.nombre}
                onChange={(e) => handleInputChange('nombre', e.target.value)}
                disabled={!isEditing}
                className={`transition-all duration-300 ${!isEditing ? 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200' : 'border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'}`}
              />
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="email" className="text-sm font-semibold text-gray-700">Correo Electrónico</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 h-5 w-5" />
                <Input
                  id="email"
                  type="email"
                  value={profileData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  disabled={!isEditing}
                  className={`pl-12 transition-all duration-300 ${!isEditing ? 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200' : 'border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'}`}
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="telefono" className="text-sm font-semibold text-gray-700">Teléfono</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 h-5 w-5" />
                <Input
                  id="telefono"
                  value={profileData.telefono}
                  onChange={(e) => handleInputChange('telefono', e.target.value)}
                  disabled={!isEditing}
                  className={`pl-12 transition-all duration-300 ${!isEditing ? 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200' : 'border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'}`}
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="fechaNacimiento" className="text-sm font-semibold text-gray-700">Fecha de Nacimiento</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500 h-5 w-5" />
                <Input
                  id="fechaNacimiento"
                  type="date"
                  value={profileData.fechaNacimiento}
                  onChange={(e) => handleInputChange('fechaNacimiento', e.target.value)}
                  disabled={!isEditing}
                  className={`pl-12 transition-all duration-300 ${!isEditing ? 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200' : 'border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'}`}
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="direccion" className="text-sm font-semibold text-gray-700">Dirección</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500 h-5 w-5" />
                <Input
                  id="direccion"
                  value={profileData.direccion}
                  onChange={(e) => handleInputChange('direccion', e.target.value)}
                  disabled={!isEditing}
                  className={`pl-12 transition-all duration-300 ${!isEditing ? 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200' : 'border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'}`}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Información Médica */}
        <Card className="glass-card card-hover border-0 shadow-2xl">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-3 rounded-full gradient-health">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-gradient-health">Información Médica</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="tipoSangre" className="text-sm font-semibold text-gray-700">Tipo de Sangre</Label>
              <Input
                id="tipoSangre"
                value={profileData.tipoSangre}
                onChange={(e) => handleInputChange('tipoSangre', e.target.value)}
                disabled={!isEditing}
                className={`transition-all duration-300 ${!isEditing ? 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200' : 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200'}`}
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="alergias" className="text-sm font-semibold text-gray-700">Alergias</Label>
              <Input
                id="alergias"
                value={profileData.alergias}
                onChange={(e) => handleInputChange('alergias', e.target.value)}
                disabled={!isEditing}
                className={`transition-all duration-300 ${!isEditing ? 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200' : 'border-orange-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200'}`}
                placeholder="Separar por comas"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="contactoEmergencia" className="text-sm font-semibold text-gray-700">Contacto de Emergencia</Label>
              <Input
                id="contactoEmergencia"
                value={profileData.contactoEmergencia}
                onChange={(e) => handleInputChange('contactoEmergencia', e.target.value)}
                disabled={!isEditing}
                className={`transition-all duration-300 ${!isEditing ? 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200' : 'border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200'}`}
                placeholder="Nombre - Teléfono"
              />
            </div>

            <div className="glass-card p-6 rounded-xl gradient-wellness/10 border border-emerald-200">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-emerald-800 mb-2">Información Importante</h4>
                  <p className="text-sm text-emerald-700 leading-relaxed">
                    Mantén tu información médica actualizada para recibir la mejor atención posible.
                    Esta información es confidencial y solo será compartida con tu equipo médico.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MiPerfil;
