
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Calendar, 
  Video, 
  Clock, 
  User, 
  FileText, 
  Settings, 
  Heart,
  Home,
  Phone,
  MapPin
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Inicio", url: "/", icon: Home },
  { title: "Reservar Cita", url: "/reservar", icon: Calendar },
  { title: "Cita Virtual", url: "/cita-virtual", icon: Video },
  { title: "Mis Citas", url: "/mis-citas", icon: Clock },
  { title: "Mi Perfil", url: "/perfil", icon: User },
  { title: "Historial Médico", url: "/historial", icon: FileText },
  { title: "Configuración", url: "/configuracion", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className="border-r border-blue-100">
      <SidebarHeader className="p-6 border-b border-blue-100">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-full">
            <Heart className="h-6 w-6 text-white" />
          </div>
          {state === "expanded" && (
            <div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                MediCare Plus
              </h2>
              <p className="text-sm text-gray-600">Centro Médico</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegación Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={({ isActive }) => 
                        `flex items-center gap-3 p-3 rounded-lg transition-colors ${
                          isActive 
                            ? 'bg-blue-100 text-blue-700 font-medium' 
                            : 'text-gray-700 hover:bg-blue-50'
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      {state === "expanded" && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {state === "expanded" && (
          <SidebarGroup className="mt-auto">
            <SidebarGroupLabel>Contacto</SidebarGroupLabel>
            <SidebarGroupContent>
              <div className="p-4 space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-green-600" />
                  <span>Av. Salud 123, Ciudad</span>
                </div>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
