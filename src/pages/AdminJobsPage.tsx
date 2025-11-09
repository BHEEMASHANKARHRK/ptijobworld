import { Edit2, Plus, Trash2, X } from 'lucide-react';
import { useState } from 'react';

const JOB_ROLES = ['Sales Executive', 'Marketing Manager', 'Software Developer', 'HR Manager', 'Customer Support'];
const JOB_CATEGORIES = ['Sales & Marketing', 'IT & Software', 'Human Resources', 'Customer Service', 'Finance'];

export default function AdminJobsPage() {
  const [jobs, setJobs] = useState([
    {
      id: '1',
      title: 'Sales Executive',
      companyName: 'Tech Solutions Inc',
      location: 'Bangalore',
      salaryRange: '₹15,000 - ₹25,000',
      experience: 'Fresher',
      skills: 'Communication, Sales, MS Office',
      employmentType: 'Full-Time',
      qualification: 'Any Graduate',
      description: 'Looking for enthusiastic sales professionals to join our team.',
      applyDeadline: '2025-11-30',
      companyLogoUrl: '',
      contactInfo: 'hr@techsolutions.com',
      jobRole: 'Sales Executive',
      jobCategory: 'Sales & Marketing',
      isActive: true,
      createdAt: new Date()
    },
    {
      id: '2',
      title: 'Marketing Manager',
      companyName: 'Digital Marketing Pro',
      location: 'Mumbai',
      salaryRange: '₹30,000 - ₹45,000',
      experience: '2-4 Years',
      skills: 'Digital Marketing, SEO, Content Strategy',
      employmentType: 'Full-Time',
      qualification: 'MBA/Graduate',
      description: 'Experienced marketing manager needed for growing digital agency.',
      applyDeadline: '2025-12-15',
      companyLogoUrl: '',
      contactInfo: 'careers@digitalmarketing.com',
      jobRole: 'Marketing Manager',
      jobCategory: 'Sales & Marketing',
      isActive: true,
      createdAt: new Date()
    },
    {
      id: '3',
      title: 'Software Developer',
      companyName: 'InnovateTech',
      location: 'Hyderabad',
      salaryRange: '₹40,000 - ₹60,000',
      experience: '1-3 Years',
      skills: 'React, Node.js, JavaScript',
      employmentType: 'Full-Time',
      qualification: 'B.Tech/B.E',
      description: 'Join our development team to build cutting-edge applications.',
      applyDeadline: '2025-12-20',
      companyLogoUrl: '',
      contactInfo: 'jobs@innovatetech.com',
      jobRole: 'Software Developer',
      jobCategory: 'IT & Software',
      isActive: false,
      createdAt: new Date()
    },
    {
      id: '4',
      title: 'HR Executive',
      companyName: 'Global Solutions',
      location: 'Delhi',
      salaryRange: '₹20,000 - ₹35,000',
      experience: '0-2 Years',
      skills: 'Recruitment, Communication, MS Excel',
      employmentType: 'Full-Time',
      qualification: 'MBA in HR',
      description: 'Seeking an HR executive to manage recruitment and employee relations.',
      applyDeadline: '2025-11-25',
      companyLogoUrl: '',
      contactInfo: 'hr@globalsolutions.com',
      jobRole: 'HR Manager',
      jobCategory: 'Human Resources',
      isActive: true,
      createdAt: new Date()
    },
    {
      id: '5',
      title: 'Customer Support Specialist',
      companyName: 'Tech Support Co',
      location: 'Pune',
      salaryRange: '₹18,000 - ₹28,000',
      experience: 'Fresher',
      skills: 'Communication, Problem Solving, CRM',
      employmentType: 'Full-Time',
      qualification: 'Any Graduate',
      description: 'Customer-focused individual needed for our support team.',
      applyDeadline: '2025-12-10',
      companyLogoUrl: '',
      contactInfo: 'careers@techsupport.com',
      jobRole: 'Customer Support',
      jobCategory: 'Customer Service',
      isActive: true,
      createdAt: new Date()
    },
    {
      id: '6',
      title: 'Business Analyst',
      companyName: 'Analytics Pro',
      location: 'Chennai',
      salaryRange: '₹35,000 - ₹50,000',
      experience: '2-5 Years',
      skills: 'Data Analysis, SQL, Business Intelligence',
      employmentType: 'Full-Time',
      qualification: 'B.Tech/MBA',
      description: 'Looking for an analytical mind to drive business insights.',
      applyDeadline: '2025-12-05',
      companyLogoUrl: '',
      contactInfo: 'jobs@analyticspro.com',
      jobRole: 'Software Developer',
      jobCategory: 'IT & Software',
      isActive: true,
      createdAt: new Date()
    }
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    companyName: '',
    location: '',
    salaryRange: '',
    experience: '',
    skills: '',
    employmentType: 'Full-Time',
    qualification: '',
    description: '',
    applyDeadline: '',
    companyLogoUrl: '',
    contactInfo: '',
    jobRole: '',
    jobCategory: '',
    isActive: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingJob) {
      setJobs(jobs.map(job =>
        job.id === editingJob.id
          ? { ...formData, id: job.id, createdAt: job.createdAt }
          : job
      ));
    } else {
      setJobs([...jobs, {
        ...formData,
        id: Date.now().toString(),
        createdAt: new Date()
      }]);
    }
    resetForm();
  };

  const handleEdit = (job) => {
    setEditingJob(job);
    setFormData({
      title: job.title,
      companyName: job.companyName,
      location: job.location,
      salaryRange: job.salaryRange,
      experience: job.experience,
      skills: job.skills,
      employmentType: job.employmentType,
      qualification: job.qualification,
      description: job.description,
      applyDeadline: job.applyDeadline,
      companyLogoUrl: job.companyLogoUrl,
      contactInfo: job.contactInfo,
      jobRole: job.jobRole,
      jobCategory: job.jobCategory,
      isActive: job.isActive
    });
    setIsFormOpen(true);
  };

  const handleDeleteJob = (id) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      setJobs(jobs.filter(job => job.id !== id));
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      companyName: '',
      location: '',
      salaryRange: '',
      experience: '',
      skills: '',
      employmentType: 'Full-Time',
      qualification: '',
      description: '',
      applyDeadline: '',
      companyLogoUrl: '',
      contactInfo: '',
      jobRole: '',
      jobCategory: '',
      isActive: true
    });
    setEditingJob(null);
    setIsFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <style>{`
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
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-slide-in {
          animation: slideIn 0.5s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.4s ease-out forwards;
        }

        .job-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
        }

        .job-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
        }

        .modal-backdrop {
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          animation: modalSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(-50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .btn-hover {
          transition: all 0.3s ease;
        }

        .btn-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }

        .btn-hover:active {
          transform: translateY(0);
        }

        .input-focus {
          transition: all 0.3s ease;
        }

        .input-focus:focus {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(59, 130, 246, 0.2);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 animate-slide-in">
          <div>
            <h1 className="text-[54px] font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Manage Jobs
            </h1>
            <p className="text-gray-600 text-lg ml-2">Add, edit, or remove job listings with ease</p>
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 btn-hover"
          >
            <Plus size={20} />
            Add New Job
          </button>
        </div>

        {isFormOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto modal-backdrop">
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full my-8 modal-content">
              <div className="flex justify-between items-center p-6 border-b bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-2xl">
                <h2 className="text-2xl font-bold text-gray-900">
                  {editingJob ? '✏️ Edit Job' : '➕ Add New Job'}
                </h2>
                <button onClick={resetForm} className="text-gray-400 hover:text-gray-600 transition-colors hover:rotate-90 transition-transform duration-300">
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Job Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent input-focus"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent input-focus"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent input-focus"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Salary Range
                    </label>
                    <input
                      type="text"
                      value={formData.salaryRange}
                      onChange={(e) => setFormData({ ...formData, salaryRange: e.target.value })}
                      placeholder="e.g., ₹15,000 - ₹25,000"
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent input-focus"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Experience Required *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      placeholder="e.g., Fresher or 0-2 Years"
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent input-focus"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Employment Type *
                    </label>
                    <select
                      required
                      value={formData.employmentType}
                      onChange={(e) => setFormData({ ...formData, employmentType: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white input-focus"
                    >
                      <option value="Full-Time">Full-Time</option>
                      <option value="Part-Time">Part-Time</option>
                      <option value="Contract">Contract</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Qualification *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.qualification}
                      onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                      placeholder="e.g., Any Graduate"
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent input-focus"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Apply Deadline *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.applyDeadline}
                      onChange={(e) => setFormData({ ...formData, applyDeadline: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent input-focus"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Job Role *
                    </label>
                    <select
                      required
                      value={formData.jobRole}
                      onChange={(e) => setFormData({ ...formData, jobRole: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white input-focus"
                    >
                      <option value="">Select a role</option>
                      {JOB_ROLES.map(role => (
                        <option key={role} value={role}>{role}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Job Category *
                    </label>
                    <select
                      required
                      value={formData.jobCategory}
                      onChange={(e) => setFormData({ ...formData, jobCategory: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white input-focus"
                    >
                      <option value="">Select a category</option>
                      {JOB_CATEGORIES.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Required Skills *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    placeholder="e.g., Communication, Sales, MS Office"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent input-focus"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Job Description *
                  </label>
                  <textarea
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent input-focus resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Contact Info
                  </label>
                  <input
                    type="text"
                    value={formData.contactInfo}
                    onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                    placeholder="Email or phone"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent input-focus"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Logo URL
                  </label>
                  <input
                    type="text"
                    value={formData.companyLogoUrl}
                    onChange={(e) => setFormData({ ...formData, companyLogoUrl: e.target.value })}
                    placeholder="https://example.com/logo.png"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent input-focus"
                  />
                </div>

                <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                  <input
                    type="checkbox"
                    id="isActive"
                    checked={formData.isActive}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="isActive" className="ml-3 text-sm font-semibold text-gray-700">
                    Active (visible to candidates)
                  </label>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleSubmit}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl btn-hover"
                  >
                    {editingJob ? '✓ Update Job' : '✓ Add Job'}
                  </button>
                  <button
                    onClick={resetForm}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all btn-hover"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              className="job-card bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 hover:border-blue-200 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${job.isActive
                      ? 'bg-green-100 text-green-700 shadow-sm'
                      : 'bg-red-100 text-red-700 shadow-sm'
                      }`}>
                      {job.isActive ? '✓ Active' : '✕ Inactive'}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">{job.title}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{job.companyName}</p>
                </div>
              </div>

              <div className="space-y-2.5 mb-5 bg-gray-50 p-4 rounded-xl">
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="font-semibold text-base">📍</span>
                  <span className="font-medium">{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="font-semibold text-base">💼</span>
                  <span className="font-medium">{job.experience}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="font-semibold text-base">💰</span>
                  <span className="font-medium">{job.salaryRange}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="font-semibold text-base">⏰</span>
                  <span className="font-medium">{job.employmentType}</span>
                </div>
              </div>

              <div className="border-t pt-4 flex gap-2">
                <button
                  onClick={() => handleEdit(job)}
                  className="flex-1 bg-blue-50 text-blue-600 px-4 py-2.5 rounded-xl font-semibold hover:bg-blue-100 transition-all flex items-center justify-center gap-2 btn-hover border-2 border-blue-100 hover:border-blue-200"
                >
                  <Edit2 size={16} />
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteJob(job.id)}
                  className="flex-1 bg-red-50 text-red-600 px-4 py-2.5 rounded-xl font-semibold hover:bg-red-100 transition-all flex items-center justify-center gap-2 btn-hover border-2 border-red-100 hover:border-red-200"
                >
                  <Trash2 size={16} />
                  Delete
                </button>
              </div>
            </div>
          ))}

          {jobs.length === 0 && (
            <div className="col-span-full text-center py-20 bg-white rounded-2xl shadow-lg animate-scale-in">
              <div className="text-6xl mb-4">📋</div>
              <p className="text-gray-600 text-lg font-semibold">No jobs added yet</p>
              <p className="text-gray-500 mt-2">Click "Add New Job" to get started</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}