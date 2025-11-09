import { CreditCard as Edit2, Plus, Trash2, X } from 'lucide-react';
import { useState } from 'react';
import type { SelectedCandidate } from '../types';

interface AdminCandidatesPageProps {
  candidates: SelectedCandidate[];
  onAddCandidate: (candidate: Omit<SelectedCandidate, 'id' | 'createdAt'>) => void;
  onUpdateCandidate: (id: string, candidate: Omit<SelectedCandidate, 'id' | 'createdAt'>) => void;
  onDeleteCandidate: (id: string) => void;
}

export default function AdminCandidatesPage({
  candidates,
  onAddCandidate,
  onUpdateCandidate,
  onDeleteCandidate
}: AdminCandidatesPageProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingCandidate, setEditingCandidate] = useState<SelectedCandidate | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    jobTitle: '',
    companyName: '',
    location: '',
    dateOfJoining: '',
    contactInfo: '',
    imageUrl: '',
    remarks: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCandidate) {
      onUpdateCandidate(editingCandidate.id, formData);
    } else {
      onAddCandidate(formData);
    }
    resetForm();
  };

  const handleEdit = (candidate: SelectedCandidate) => {
    setEditingCandidate(candidate);
    setFormData({
      name: candidate.name,
      jobTitle: candidate.jobTitle,
      companyName: candidate.companyName,
      location: candidate.location,
      dateOfJoining: candidate.dateOfJoining,
      contactInfo: candidate.contactInfo,
      imageUrl: candidate.imageUrl,
      remarks: candidate.remarks
    });
    setIsFormOpen(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      jobTitle: '',
      companyName: '',
      location: '',
      dateOfJoining: '',
      contactInfo: '',
      imageUrl: '',
      remarks: ''
    });
    setEditingCandidate(null);
    setIsFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Manage Teams Candidates</h1>
            <p className="text-gray-600">Add, edit, or remove success stories</p>
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Plus size={20} />
            Add Candidate
          </button>
        </div>

        {isFormOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full my-8">
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-2xl font-bold text-gray-900">
                  {editingCandidate ? 'Edit Candidate' : 'Add Selected Candidate'}
                </h2>
                <button onClick={resetForm} className="text-gray-400 hover:text-gray-600">
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Candidate Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Job Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      placeholder="e.g., Kalaburagi"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date of Joining *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.dateOfJoining}
                      onChange={(e) => setFormData({ ...formData, dateOfJoining: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      placeholder="Optional"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Image URL *
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                    placeholder="https://example.com/photo.jpg"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">Professional photo recommended</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Remarks
                  </label>
                  <textarea
                    value={formData.remarks}
                    onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                    rows={3}
                    placeholder="e.g., Excellent performance in training"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {formData.imageUrl && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preview
                    </label>
                    <img
                      src={formData.imageUrl}
                      alt="Preview"
                      className="w-32 h-32 object-cover rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/150?text=Invalid+URL';
                      }}
                    />
                  </div>
                )}

                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    {editingCandidate ? 'Update Candidate' : 'Add Candidate'}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {candidates.map((candidate) => (
            <div key={candidate.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden bg-gray-200">
                <img
                  src={candidate.imageUrl}
                  alt={candidate.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-1">{candidate.name}</h3>
                <p className="text-sm text-blue-600 font-semibold mb-1">{candidate.jobTitle}</p>
                <p className="text-sm text-gray-600 mb-2">{candidate.companyName}</p>
                <p className="text-xs text-gray-500 mb-3">{candidate.location}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(candidate)}
                    className="flex-1 p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-center gap-1"
                  >
                    <Edit2 size={16} />
                    <span className="text-sm">Edit</span>
                  </button>
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to delete this candidate?')) {
                        onDeleteCandidate(candidate.id);
                      }
                    }}
                    className="flex-1 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center justify-center gap-1"
                  >
                    <Trash2 size={16} />
                    <span className="text-sm">Delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {candidates.length === 0 && (
            <div className="col-span-full text-center py-16 bg-white rounded-xl">
              <p className="text-gray-600">No candidates added yet. Click "Add Candidate" to get started.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
