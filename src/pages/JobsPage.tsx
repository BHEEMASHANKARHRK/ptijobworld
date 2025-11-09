import { Briefcase, Calendar, DollarSign, MapPin, Search, Filter, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import type { Job } from '../types';
import { JOB_ROLES, JOB_CATEGORIES } from '../data/constants';

interface JobsPageProps {
  jobs: Job[];
}

export default function JobsPage({ jobs }: JobsPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('All');
  const [roleFilter, setRoleFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const locations = ['All', ...Array.from(new Set(jobs.map(job => job.location)))];
  const roles = ['All', ...JOB_ROLES];                                               
  const categories = ['All', ...JOB_CATEGORIES];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.skills.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === 'All' || job.location === locationFilter;
    const matchesRole = roleFilter === 'All' || job.jobRole === roleFilter;
    const matchesCategory = categoryFilter === 'All' || job.jobCategory === categoryFilter;
    return matchesSearch && matchesLocation && matchesRole && matchesCategory && job.isActive;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-16">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            animation: 'shimmer 3s infinite'
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 opacity-0" style={{
            animation: 'fadeInUp 0.8s ease-out forwards'
          }}>
            Available Job Opportunities
          </h1>
          <p className="text-xl text-white/90 opacity-0" style={{
            animation: 'fadeInUp 0.8s ease-out 0.2s forwards'
          }}>
            Find your perfect career match from our latest openings
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search & Filter Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8 opacity-0" style={{
          animation: 'fadeInUp 0.6s ease-out 0.3s forwards'
        }}>
          <div className="flex items-center gap-2 mb-4">
            <Filter className="text-blue-600" size={20} />
            <h3 className="text-lg font-semibold text-gray-900">Search & Filter Jobs</h3>
          </div>
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by job title, company, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-white transition-all"
              >
                <option value="All">All Locations</option>
                {locations.filter(l => l !== 'All').map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-white transition-all"
              >
                <option value="All">All Roles</option>
                {roles.filter(r => r !== 'All').map(role => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-white transition-all"
              >
                <option value="All">All Categories</option>
                {categories.filter(c => c !== 'All').map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setLocationFilter('All');
                  setRoleFilter('All');
                  setCategoryFilter('All');
                }}
                className="px-4 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-lg hover:from-gray-200 hover:to-gray-300 transition-all font-medium"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-700 font-medium">
          Showing <span className="text-blue-600 font-bold">{filteredJobs.length}</span> job{filteredJobs.length !== 1 ? 's' : ''}
        </div>

        {/* Jobs Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job, index) => (
            <div
              key={job.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 opacity-0"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`
              }}
            >
              {/* Company Logo/Icon */}
              <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  {job.companyLogoUrl ? (
                    <img
                      src={job.companyLogoUrl}
                      alt={job.companyName}
                      className="w-16 h-16 rounded-lg object-cover bg-white p-2 mb-3"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3">
                      <Briefcase className="text-white" size={32} />
                    </div>
                  )}
                  <h2 className="text-xl font-bold mb-1 line-clamp-2">{job.title}</h2>
                  <p className="text-white/90 font-medium">{job.companyName}</p>
                </div>
              </div>

              {/* Job Details */}
              <div className="p-6">
                {/* Location, Salary, Deadline */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin size={16} className="mr-2 text-blue-600 flex-shrink-0" />
                    <span className="truncate">{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <DollarSign size={16} className="mr-2 text-green-600 flex-shrink-0" />
                    <span className="truncate">{job.salaryRange}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar size={16} className="mr-2 text-orange-600 flex-shrink-0" />
                    <span className="truncate">Apply by: {new Date(job.applyDeadline).toLocaleDateString('en-IN')}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    {job.employmentType}
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    {job.experience}
                  </span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium truncate">
                    {job.qualification}
                  </span>
                </div>

                {/* Skills Preview */}
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Skills:</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{job.skills}</p>
                </div>

                {/* Description Preview */}
                <div className="mb-4">
                  <p className="text-gray-600 text-sm line-clamp-3">{job.description}</p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </button>
                  <a
                    href={`https://wa.me/919108012711?text=Hi, I'm interested in the ${job.title} position at ${job.companyName}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-all text-center"
                  >
                    Apply via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Jobs Found */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
            <Briefcase size={64} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedJob(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  {selectedJob.companyLogoUrl ? (
                    <img
                      src={selectedJob.companyLogoUrl}
                      alt={selectedJob.companyName}
                      className="w-16 h-16 rounded-lg object-cover bg-white p-2"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <Briefcase className="text-white" size={32} />
                    </div>
                  )}
                  <div>
                    <h2 className="text-2xl font-bold mb-1">{selectedJob.title}</h2>
                    <p className="text-white/90 font-semibold">{selectedJob.companyName}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Job Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="text-blue-600" />
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="font-semibold text-gray-900">{selectedJob.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign size={20} className="text-green-600" />
                  <div>
                    <p className="text-xs text-gray-500">Salary</p>
                    <p className="font-semibold text-gray-900">{selectedJob.salaryRange}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={20} className="text-orange-600" />
                  <div>
                    <p className="text-xs text-gray-500">Deadline</p>
                    <p className="font-semibold text-gray-900">{new Date(selectedJob.applyDeadline).toLocaleDateString('en-IN')}</p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {selectedJob.employmentType}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  {selectedJob.experience}
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  {selectedJob.qualification}
                </span>
                {selectedJob.jobRole && (
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                    {selectedJob.jobRole}
                  </span>
                )}
                {selectedJob.jobCategory && (
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                    {selectedJob.jobCategory}
                  </span>
                )}
              </div>

              {/* Skills */}
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Required Skills</h3>
                <p className="text-gray-700 leading-relaxed">{selectedJob.skills}</p>
              </div>

              {/* Description */}
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Job Description</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{selectedJob.description}</p>
              </div>

              {/* Apply Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                <a
                  href={`https://wa.me/919108012711?text=Hi, I'm interested in the ${selectedJob.title} position at ${selectedJob.companyName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                >
                  Apply via WhatsApp
                </a>
                {selectedJob.contactInfo && (
                  <a
                    href={`mailto:${selectedJob.contactInfo}?subject=Application for ${selectedJob.title}`}
                    className="flex-1 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                  >
                    Apply via Email
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}