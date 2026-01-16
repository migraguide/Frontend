import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from '@/app/contexts/LanguageContext';
import { Header } from '@/app/components/Header';
import { HomePage } from '@/app/pages/HomePage';
import { DocumentsPage } from '@/app/pages/DocumentsPage';
import { JobsPage } from '@/app/pages/JobsPage';
import { SafetyPage } from '@/app/pages/SafetyPage';

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/safety" element={<SafetyPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}
