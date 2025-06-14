
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Settings, 
  Bell, 
  Shield, 
  Globe, 
  Moon, 
  Sun, 
  Smartphone, 
  Mail,
  Lock,
  Key,
  Trash2,
  Save
} from 'lucide-react';

const Configuracion = () => {
  const [settings, setSettings] = useState({
    // Notificaciones
    emailNotifications: true,
    smsNotifications: false,
    appointmentReminders: true,
    medicalUpdates: true,
    
    // Privacidad
    shareDataWithDoctors: true,
    allowMarketingEmails: false,
    enableTwoFactor: false,
    
    // Preferencias
    language: 'es',
    timezone: 'America/Mexico_City',
    theme: 'light',
    
    // Seguridad
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleSettingChange = (key: string, value: boolean | string) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSaveSettings = () => {
    console.log('Configuración guardada:', settings);
    // Aquí se guardarían las configuraciones
  };

  const handleChangePassword = () => {
    if (settings.newPassword !== settings.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    console.log('Cambio de contraseña solicitado');
    // Aquí se cambiaría la contraseña
    setSettings(prev => ({
      ...prev,
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }));
  };

  const handleDeleteAccount = () => {
    if (confirm('¿Estás seguro de que quieres eliminar tu cuenta? Esta acción no se puede deshacer.')) {
      console.log('Eliminación de cuenta solicitada');
      // Aquí se eliminaría la cuenta
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Configuración</h1>
        <p className="text-gray-600">Personaliza tu experiencia y gestiona tu cuenta</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notificaciones */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-blue-600" />
              Notificaciones
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="emailNotifications" className="font-medium">Notificaciones por Email</Label>
                <p className="text-sm text-gray-600">Recibir confirmaciones y recordatorios</p>
              </div>
              <input
                id="emailNotifications"
                type="checkbox"
                checked={settings.emailNotifications}
                onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="smsNotifications" className="font-medium">Notificaciones SMS</Label>
                <p className="text-sm text-gray-600">Mensajes de texto para citas urgentes</p>
              </div>
              <input
                id="smsNotifications"
                type="checkbox"
                checked={settings.smsNotifications}
                onChange={(e) => handleSettingChange('smsNotifications', e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="appointmentReminders" className="font-medium">Recordatorios de Citas</Label>
                <p className="text-sm text-gray-600">24 horas antes de tu cita</p>
              </div>
              <input
                id="appointmentReminders"
                type="checkbox"
                checked={settings.appointmentReminders}
                onChange={(e) => handleSettingChange('appointmentReminders', e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="medicalUpdates" className="font-medium">Actualizaciones Médicas</Label>
                <p className="text-sm text-gray-600">Resultados de laboratorio y reportes</p>
              </div>
              <input
                id="medicalUpdates"
                type="checkbox"
                checked={settings.medicalUpdates}
                onChange={(e) => handleSettingChange('medicalUpdates', e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded"
              />
            </div>
          </CardContent>
        </Card>

        {/* Privacidad */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              Privacidad
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="shareDataWithDoctors" className="font-medium">Compartir datos con médicos</Label>
                <p className="text-sm text-gray-600">Permitir acceso a tu historial médico</p>
              </div>
              <input
                id="shareDataWithDoctors"
                type="checkbox"
                checked={settings.shareDataWithDoctors}
                onChange={(e) => handleSettingChange('shareDataWithDoctors', e.target.checked)}
                className="w-4 h-4 text-green-600 rounded"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="allowMarketingEmails" className="font-medium">Emails promocionales</Label>
                <p className="text-sm text-gray-600">Ofertas y noticias de salud</p>
              </div>
              <input
                id="allowMarketingEmails"
                type="checkbox"
                checked={settings.allowMarketingEmails}
                onChange={(e) => handleSettingChange('allowMarketingEmails', e.target.checked)}
                className="w-4 h-4 text-green-600 rounded"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="enableTwoFactor" className="font-medium">Autenticación de dos factores</Label>
                <p className="text-sm text-gray-600">Seguridad adicional para tu cuenta</p>
              </div>
              <input
                id="enableTwoFactor"
                type="checkbox"
                checked={settings.enableTwoFactor}
                onChange={(e) => handleSettingChange('enableTwoFactor', e.target.checked)}
                className="w-4 h-4 text-green-600 rounded"
              />
            </div>
          </CardContent>
        </Card>

        {/* Preferencias */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-purple-600" />
              Preferencias
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="language">Idioma</Label>
              <select
                id="language"
                value={settings.language}
                onChange={(e) => handleSettingChange('language', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="es">Español</option>
                <option value="en">English</option>
                <option value="fr">Français</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timezone">Zona Horaria</Label>
              <select
                id="timezone"
                value={settings.timezone}
                onChange={(e) => handleSettingChange('timezone', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="America/Mexico_City">Ciudad de México</option>
                <option value="America/New_York">Nueva York</option>
                <option value="Europe/Madrid">Madrid</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label>Tema</Label>
              <div className="flex gap-2">
                <Button
                  variant={settings.theme === 'light' ? 'default' : 'outline'}
                  onClick={() => handleSettingChange('theme', 'light')}
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Sun className="h-4 w-4" />
                  Claro
                </Button>
                <Button
                  variant={settings.theme === 'dark' ? 'default' : 'outline'}
                  onClick={() => handleSettingChange('theme', 'dark')}
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Moon className="h-4 w-4" />
                  Oscuro
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Seguridad */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-red-600" />
              Seguridad
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Contraseña Actual</Label>
              <Input
                id="currentPassword"
                type="password"
                value={settings.currentPassword}
                onChange={(e) => handleSettingChange('currentPassword', e.target.value)}
                placeholder="Ingresa tu contraseña actual"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="newPassword">Nueva Contraseña</Label>
              <Input
                id="newPassword"
                type="password"
                value={settings.newPassword}
                onChange={(e) => handleSettingChange('newPassword', e.target.value)}
                placeholder="Ingresa tu nueva contraseña"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmar Nueva Contraseña</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={settings.confirmPassword}
                onChange={(e) => handleSettingChange('confirmPassword', e.target.value)}
                placeholder="Confirma tu nueva contraseña"
              />
            </div>

            <Button 
              onClick={handleChangePassword}
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={!settings.currentPassword || !settings.newPassword || !settings.confirmPassword}
            >
              <Key className="h-4 w-4 mr-2" />
              Cambiar Contraseña
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Acciones principales */}
      <div className="flex justify-between items-center p-6 bg-gray-50 rounded-lg">
        <div>
          <Button onClick={handleSaveSettings} className="bg-green-600 hover:bg-green-700 mr-4">
            <Save className="h-4 w-4 mr-2" />
            Guardar Configuración
          </Button>
        </div>
        
        <div>
          <Button 
            onClick={handleDeleteAccount}
            variant="destructive"
            className="bg-red-600 hover:bg-red-700"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Eliminar Cuenta
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Configuracion;
