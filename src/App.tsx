
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ReservarCita from "./pages/ReservarCita";
import CitaVirtual from "./pages/CitaVirtual";
import MisCitas from "./pages/MisCitas";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservar" element={<ReservarCita />} />
            <Route path="/cita-virtual" element={<CitaVirtual />} />
            <Route path="/mis-citas" element={<MisCitas />} />
            <Route path="/perfil" element={<div className="text-center py-12"><h2 className="text-2xl font-bold">Mi Perfil - En construcción</h2></div>} />
            <Route path="/historial" element={<div className="text-center py-12"><h2 className="text-2xl font-bold">Historial Médico - En construcción</h2></div>} />
            <Route path="/configuracion" element={<div className="text-center py-12"><h2 className="text-2xl font-bold">Configuración - En construcción</h2></div>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
