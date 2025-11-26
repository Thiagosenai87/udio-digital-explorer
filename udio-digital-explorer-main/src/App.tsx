import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Modulos from "./pages/Modulos";
import Module1 from "./pages/Module1";
import Module2 from "./pages/Module2";
import Module3 from "./pages/Module3";
import Module4 from "./pages/Module4";
import Laboratorio from "./pages/Laboratorio";
import Quiz from "./pages/Quiz";
import Creditos from "./pages/Creditos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modulos" element={<Modulos />} />
          <Route path="/modulo/1" element={<Module1 />} />
          <Route path="/modulo/2" element={<Module2 />} />
          <Route path="/modulo/3" element={<Module3 />} />
          <Route path="/modulo/4" element={<Module4 />} />
          <Route path="/laboratorio" element={<Laboratorio />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/creditos" element={<Creditos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
