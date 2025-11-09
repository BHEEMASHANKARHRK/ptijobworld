import { Users, Search, MapPin, TrendingUp, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

// Using candidate data structure internally but displaying as team members
interface TeamMember {
  id: string;
  name: string;
  imageUrl: string;
  location: string;
  placementsCount: number;
  role: string;
  specialization: string;
}

interface TeamMembersPageProps {
  candidates: TeamMember[];
}

function AnimatedCounter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return <span>{count}</span>;
}

export default function TeamMembersPage({ candidates }: TeamMembersPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Transform candidate data to team member display
  const teamMembers = candidates.map(candidate => ({
    ...candidate,
    placementsCount: Math.floor(Math.random() * 50) + 10, // Simulated placement count
    role: candidate.jobTitle || 'Recruitment Specialist',
    specialization: 'Multi-Industry Specialist'
  }));

  const locations = ['All', ...Array.from(new Set(teamMembers.map(m => m.location)))];

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === 'All' || member.location === locationFilter;
    return matchesSearch && matchesLocation;
  });

  const totalPlacements = filteredMembers.reduce((sum, m) => sum + m.placementsCount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-[url('../../public/teams.png')] bg-cover bg-center text-white pt-32 pb-16 px-4 mt-4">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} text-center`}>
            <div className="flex items-center justify-center gap-4 mb-4">
              <h1 className="text-5xl font-bold">Our Expert Team</h1>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Meet our dedicated recruitment professionals who have successfully placed thousands of candidates in their dream careers
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Stats Overview */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Team Members</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">
                  <AnimatedCounter target={filteredMembers.length} duration={1500} />
                </p>
              </div>
              <Users className="text-blue-500" size={40} />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Placements</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {/* <AnimatedCounter target={totalPlacements} duration={2000} />+ */}
                  10000+
                </p>
              </div>
              <TrendingUp className="text-green-500" size={40} />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Locations</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {/* <AnimatedCounter target={locations.length - 1} duration={1500} /> */}
                  4
                </p>
              </div>
              <MapPin className="text-purple-500" size={40} />
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className={`bg-white p-6 rounded-2xl shadow-lg mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
              <input
                type="text"
                placeholder="Search team members by name or role..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
              />
            </div>
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="px-6 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 bg-white transition-all cursor-pointer hover:border-gray-300"
            >
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMembers.map((member, index) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                }}
              >
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Floating Badge */}
                  {/* <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                    <div className="flex items-center gap-1">
                      <Award className="text-yellow-500" size={16} />
                      <span className="text-sm font-bold text-gray-800">Top Performer</span>
                    </div>
                  </div> */}
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>

                  <p className="text-blue-600 font-semibold mb-1 text-sm">
                    {member.role}
                  </p>

                  <div className="flex items-center text-sm text-gray-500 mb-4 mt-4">
                    <MapPin size={16} className="mr-2 text-gray-400" />
                    {member.location}
                  </div>

                  {/* Animated Placement Counter */}
                  {/* <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-600 font-medium mb-1">
                          Successful Placements
                        </p>
                        <p className="text-3xl font-bold text-green-700">
                          <AnimatedCounter target={member.placementsCount} duration={2000 + index * 200} />+
                        </p>
                      </div>
                      <div className="p-3 bg-green-500 rounded-full">
                        <TrendingUp className="text-white" size={24} />
                      </div>
                    </div>
                    <div className="mt-3 bg-green-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-green-500 to-emerald-600 h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${Math.min((member.placementsCount / 60) * 100, 100)}%`,
                          animation: `growWidth 1.5s ease-out ${index * 0.1}s backwards`
                        }}
                      ></div>
                    </div>
                  </div> */}
                </div>
              </div>
            ))}

            {filteredMembers.length === 0 && (
              <div className="col-span-full text-center py-20 bg-white rounded-2xl shadow-lg">
                <Users size={80} className="mx-auto text-gray-300 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">No team members found</h3>
                <p className="text-gray-600">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>

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

        @keyframes growWidth {
          from {
            width: 0%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .group:hover .floating-badge {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}