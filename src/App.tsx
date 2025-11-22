import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AvaliacaoInicial from "./pages/AvaliacaoInicial";
import Configuracoes from "./pages/Configuracoes";
import CrencasIntermediarias from "./pages/CrencasIntermediarias";
import ModeloIceberg from "./pages/ModeloIceberg";
import ModeloArvore from "./pages/ModeloArvore";
import PensamentosAutomaticos from "./pages/PensamentosAutomaticos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/avaliacao-inicial" element={<AvaliacaoInicial />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          <Route path="/crencas-intermediarias" element={<CrencasIntermediarias />} />
          <Route path="/modelo-iceberg" element={<ModeloIceberg />} />
          <Route path="/modelo-arvore" element={<ModeloArvore />} />
          <Route path="/pensamentos-automaticos" element={<PensamentosAutomaticos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
