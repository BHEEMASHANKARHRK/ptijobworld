import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import OurServicesPage from './pages/OurServices'; // Add this import
import CandidatesPage from './pages/CandidatesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminJobsPage from './pages/AdminJobsPage';
import AdminCandidatesPage from './pages/AdminCandidatesPage';
import AdminLoginPage from './pages/AdminLoginPage';
import { mockJobs, mockCandidates } from './data/mockData';
import type { Job, SelectedCandidate } from './types';

function App() {
  // --- PTI Jobs Placement States ---
  const [currentPage, setCurrentPage] = useState('home');
  const [isAdmin, setIsAdmin] = useState(false);
  const [jobs, setJobs] = useState<Job[]>(mockJobs);
  const [candidates, setCandidates] = useState<SelectedCandidate[]>(mockCandidates);

  // --- Admin Login ---
  const handleLogin = (password: string): boolean => {
    if (password === 'admin123') {
      setIsAdmin(true);
      setCurrentPage('admin-jobs');
      return true;
    }
    return false;
  };

  // --- Navigation ---
  const handleNavigate = (page: string) => {
    if (page === 'admin') {
      setIsAdmin(false);
      setCurrentPage('admin-login');
    } else if (page === 'home' && isAdmin) {
      setIsAdmin(false);
      setCurrentPage('home');
    } else {
      setCurrentPage(page);
    }
  };

  // --- Job Handlers ---
  const handleAddJob = (jobData: Omit<Job, 'id' | 'createdAt'>) => {
    const newJob: Job = {
      ...jobData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setJobs([newJob, ...jobs]);
  };

  const handleUpdateJob = (id: string, jobData: Omit<Job, 'id' | 'createdAt'>) => {
    setJobs(
      jobs.map(job =>
        job.id === id ? { ...jobData, id, createdAt: job.createdAt } : job
      )
    );
  };

  const handleDeleteJob = (id: string) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  // --- Candidate Handlers ---
  const handleAddCandidate = (candidateData: Omit<SelectedCandidate, 'id' | 'createdAt'>) => {
    const newCandidate: SelectedCandidate = {
      ...candidateData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setCandidates([newCandidate, ...candidates]);
  };

  const handleUpdateCandidate = (id: string, candidateData: Omit<SelectedCandidate, 'id' | 'createdAt'>) => {
    setCandidates(
      candidates.map(candidate =>
        candidate.id === id ? { ...candidateData, id, createdAt: candidate.createdAt } : candidate
      )
    );
  };

  const handleDeleteCandidate = (id: string) => {
    setCandidates(candidates.filter(candidate => candidate.id !== id));
  };

  // --- Admin Login Page ---
  if (currentPage === 'admin-login') {
    return <AdminLoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      {/* --- Main App Navigation --- */}
      <Navigation
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isAdmin={isAdmin}
      />

      {/* --- Page Routing --- */}
      {currentPage === 'home' && (
        <HomePage candidates={candidates} onNavigate={handleNavigate} />
      )}

      {currentPage === 'jobs' && <JobsPage jobs={jobs} />}

      {/* Add this new route for Services page */}
      {currentPage === 'services' && (
        <OurServicesPage onNavigate={handleNavigate} />
      )}

      {currentPage === 'candidates' && (
        <CandidatesPage candidates={candidates} />
      )}

      {currentPage === 'about' && <AboutPage />}

      {currentPage === 'contact' && <ContactPage />}

      {currentPage === 'admin-jobs' && isAdmin && (
        <AdminJobsPage
          jobs={jobs}
          onAddJob={handleAddJob}
          onUpdateJob={handleUpdateJob}
          onDeleteJob={handleDeleteJob}
        />
      )}

      {currentPage === 'admin-candidates' && isAdmin && (
        <AdminCandidatesPage
          candidates={candidates}
          onAddCandidate={handleAddCandidate}
          onUpdateCandidate={handleUpdateCandidate}
          onDeleteCandidate={handleDeleteCandidate}
        />
      )}

      {/* --- Footer --- */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-semibold text-lg">PTI Job World</p>
              <p className="text-gray-400 text-sm text-left">Train, Consult, Place</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-2">
                Kalaburagi • Solapur • Raichur • Bengaluru
              </p>
              {/* <button
                onClick={() => handleNavigate('admin')}
                className="text-gray-500 hover:text-gray-300 text-xs"
              >
                Admin Login
              </button> */}
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>&copy; 2025 PTI Job World. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;