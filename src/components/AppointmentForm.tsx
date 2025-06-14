
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Calendar as CalendarIcon, User, Mail, Phone, FileText, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  fecha: Date | undefined;
  hora: string;
  especialidad: string;
  motivo: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  telefono?: string;
  fecha?: string;
  hora?: string;
  especialidad?: string;
}

interface AppointmentFormProps {
  onSubmit: (data: FormData) => void;
  isSubmitting: boolean;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    fecha: undefined,
    hora: '',
    especialidad: '',
    motivo: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const especialidades = [
    'Medicina General',
    'Cardiología',
    'Dermatología',
    'Pediatría',
    'Ginecología',
    'Neurología',
    'Traumatología',
    'Oftalmología',
  ];

  const horarios = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  ];

  const validateField = (name: string, value: any): string | undefined => {
    switch (name) {
      case 'nombre':
        if (!value || value.length < 2) return 'El nombre debe tener al menos 2 caracteres';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) return 'El email es requerido';
        if (!emailRegex.test(value)) return 'Ingrese un email válido';
        break;
      case 'telefono':
        const phoneRegex = /^[\d\s\-\+\(\)]{8,}$/;
        if (!value) return 'El teléfono es requerido';
        if (!phoneRegex.test(value)) return 'Ingrese un teléfono válido';
        break;
      case 'fecha':
        if (!value) return 'Seleccione una fecha';
        if (value < new Date()) return 'La fecha no puede ser anterior a hoy';
        break;
      case 'hora':
        if (!value) return 'Seleccione una hora';
        break;
      case 'especialidad':
        if (!value) return 'Seleccione una especialidad';
        break;
    }
    return undefined;
  };

  const handleInputChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, formData[name as keyof FormData]);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach(key => {
      if (key !== 'motivo') { // motivo is optional
        const error = validateField(key, formData[key as keyof FormData]);
        if (error) newErrors[key as keyof FormErrors] = error;
      }
    });

    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Información Personal */}
      <section aria-labelledby="personal-info-heading">
        <h3 id="personal-info-heading" className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <User className="h-5 w-5 text-blue-600" />
          Información Personal
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="nombre" className="text-sm font-medium text-gray-700">
              Nombre Completo *
            </Label>
            <Input
              id="nombre"
              type="text"
              value={formData.nombre}
              onChange={(e) => handleInputChange('nombre', e.target.value)}
              onBlur={() => handleBlur('nombre')}
              className={cn(
                "transition-all duration-200",
                errors.nombre ? "border-red-500 focus:border-red-500" : "focus:border-blue-500"
              )}
              placeholder="Ingrese su nombre completo"
              aria-describedby={errors.nombre ? "nombre-error" : undefined}
              aria-invalid={!!errors.nombre}
            />
            {errors.nombre && (
              <p id="nombre-error" className="text-red-600 text-sm flex items-center gap-1">
                <span className="h-4 w-4">⚠</span>
                {errors.nombre}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Correo Electrónico *
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                className={cn(
                  "pl-10 transition-all duration-200",
                  errors.email ? "border-red-500 focus:border-red-500" : "focus:border-blue-500"
                )}
                placeholder="correo@ejemplo.com"
                aria-describedby={errors.email ? "email-error" : undefined}
                aria-invalid={!!errors.email}
              />
            </div>
            {errors.email && (
              <p id="email-error" className="text-red-600 text-sm flex items-center gap-1">
                <span className="h-4 w-4">⚠</span>
                {errors.email}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefono" className="text-sm font-medium text-gray-700">
              Teléfono *
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="telefono"
                type="tel"
                value={formData.telefono}
                onChange={(e) => handleInputChange('telefono', e.target.value)}
                onBlur={() => handleBlur('telefono')}
                className={cn(
                  "pl-10 transition-all duration-200",
                  errors.telefono ? "border-red-500 focus:border-red-500" : "focus:border-blue-500"
                )}
                placeholder="+1 (555) 123-4567"
                aria-describedby={errors.telefono ? "telefono-error" : undefined}
                aria-invalid={!!errors.telefono}
              />
            </div>
            {errors.telefono && (
              <p id="telefono-error" className="text-red-600 text-sm flex items-center gap-1">
                <span className="h-4 w-4">⚠</span>
                {errors.telefono}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Información de la Cita */}
      <section aria-labelledby="appointment-info-heading">
        <h3 id="appointment-info-heading" className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <CalendarIcon className="h-5 w-5 text-green-600" />
          Información de la Cita
        </h3>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              Fecha de la Cita *
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !formData.fecha && "text-muted-foreground",
                    errors.fecha ? "border-red-500" : ""
                  )}
                  aria-describedby={errors.fecha ? "fecha-error" : undefined}
                  aria-invalid={!!errors.fecha}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formData.fecha ? format(formData.fecha, "PPP", { locale: es }) : "Seleccionar fecha"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={formData.fecha}
                  onSelect={(date) => handleInputChange('fecha', date)}
                  disabled={(date) => date < new Date()}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
            {errors.fecha && (
              <p id="fecha-error" className="text-red-600 text-sm flex items-center gap-1">
                <span className="h-4 w-4">⚠</span>
                {errors.fecha}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="hora" className="text-sm font-medium text-gray-700">
              Hora *
            </Label>
            <Select
              value={formData.hora}
              onValueChange={(value) => handleInputChange('hora', value)}
            >
              <SelectTrigger 
                className={cn(
                  errors.hora ? "border-red-500" : ""
                )}
                aria-describedby={errors.hora ? "hora-error" : undefined}
                aria-invalid={!!errors.hora}
              >
                <SelectValue placeholder="Seleccionar hora" />
              </SelectTrigger>
              <SelectContent>
                {horarios.map((hora) => (
                  <SelectItem key={hora} value={hora}>
                    {hora}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.hora && (
              <p id="hora-error" className="text-red-600 text-sm flex items-center gap-1">
                <span className="h-4 w-4">⚠</span>
                {errors.hora}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="especialidad" className="text-sm font-medium text-gray-700">
              Especialidad *
            </Label>
            <Select
              value={formData.especialidad}
              onValueChange={(value) => handleInputChange('especialidad', value)}
            >
              <SelectTrigger 
                className={cn(
                  errors.especialidad ? "border-red-500" : ""
                )}
                aria-describedby={errors.especialidad ? "especialidad-error" : undefined}
                aria-invalid={!!errors.especialidad}
              >
                <SelectValue placeholder="Seleccionar especialidad" />
              </SelectTrigger>
              <SelectContent>
                {especialidades.map((especialidad) => (
                  <SelectItem key={especialidad} value={especialidad}>
                    {especialidad}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.especialidad && (
              <p id="especialidad-error" className="text-red-600 text-sm flex items-center gap-1">
                <span className="h-4 w-4">⚠</span>
                {errors.especialidad}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Motivo de Consulta */}
      <section aria-labelledby="consultation-reason-heading">
        <h3 id="consultation-reason-heading" className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <FileText className="h-5 w-5 text-purple-600" />
          Motivo de Consulta
        </h3>
        
        <div className="space-y-2">
          <Label htmlFor="motivo" className="text-sm font-medium text-gray-700">
            Descripción (Opcional)
          </Label>
          <Textarea
            id="motivo"
            value={formData.motivo}
            onChange={(e) => handleInputChange('motivo', e.target.value)}
            className="min-h-[100px] resize-none focus:border-blue-500 transition-all duration-200"
            placeholder="Describa brevemente el motivo de su consulta..."
            aria-describedby="motivo-help"
          />
          <p id="motivo-help" className="text-sm text-gray-500">
            Esta información ayudará al médico a prepararse mejor para su consulta.
          </p>
        </div>
      </section>

      {/* Submit Button */}
      <div className="pt-6 border-t border-gray-200">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-3 text-lg font-medium transition-all duration-200 transform hover:scale-[1.02] disabled:transform-none disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Procesando Reserva...
            </>
          ) : (
            'Reservar Cita Médica'
          )}
        </Button>
      </div>
    </form>
  );
};

export default AppointmentForm;
