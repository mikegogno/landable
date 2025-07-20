import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Marketing from './pages/Marketing';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import ResumeBuilder from './pages/ResumeBuilder';
import CoverLetterGenerator from './pages/CoverLetterGenerator';
import Settings from './pages/Settings';
import Pricing from './pages/Pricing';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Marketing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/pricing" element={<Pricing />} />
          
          {/* Dashboard routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/resume" element={<ResumeBuilder />} />
          <Route path="/dashboard/resume/:id" element={<ResumeBuilder />} />
          <Route path="/dashboard/cover-letter" element={<CoverLetterGenerator />} />
          <Route path="/dashboard/cover-letter/:id" element={<CoverLetterGenerator />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          
          {/* Fallback routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;