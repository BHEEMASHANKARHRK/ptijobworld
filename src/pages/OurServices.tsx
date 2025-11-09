import { Code, Building2, Calculator, Phone, Megaphone, Package, Wrench, Users, Heart, Briefcase, BookOpen, ArrowRight, Car, Plane, GraduationCap, Factory, Stethoscope, Banknote, Home, Ship, Fuel, Cpu, Layers, UserRound, Bell, User, Flame, Search } from 'lucide-react';
import { useState } from 'react';

interface OurServicesProps {
  onNavigate: (page: string) => void;
}

// Job Sectors - Industry categories
const jobSectors = [
  'IT & Software',
  'MNC Companies',
  'Finance & Banking',
  'Civil & Mechanical',
  'Construction Industry',
  'Manufacturing Industries',
  'Car & Bike Showroom',
  'Retail Industry',
  'Hospital & Healthcare',
  'Pharma Industry',
  'BPO & Customer Service',
  'BBA, BCOM & BBM',
  'MBA & MCA',
  'BE & Diploma',
  'Core Industries',
  'ITI (Welder, Fitter, Electrician)',
  'Tour & Travel',
  'Work From Home',
  'Work From Office',
  'Offshore Mumbai',
  'Oil & Gas Industry',
  'Teaching & Education',
  'Sales & Marketing',
  'HR & Administration',
  'Internship Programs',
  'Hotel Industry'
];

// Job Roles - Specific positions and job titles
const jobRoles = [
  { icon: Code, title: 'IT Software Engineer', gradient: 'from-blue-500 to-cyan-500' },
  { icon: Code, title: 'Software Developer', gradient: 'from-blue-500 to-indigo-500' },
  { icon: Code, title: 'Web Developer', gradient: 'from-cyan-500 to-blue-500' },
  { icon: Code, title: 'Mobile App Developer', gradient: 'from-purple-500 to-blue-500' },
  { icon: Code, title: 'Data Scientist', gradient: 'from-green-500 to-blue-500' },
  { icon: Code, title: 'Cloud Engineer', gradient: 'from-blue-500 to-teal-500' },
  { icon: Code, title: 'Data Analyst', gradient: 'from-teal-500 to-blue-500' },
  { icon: Building2, title: 'MNC Executive', gradient: 'from-purple-500 to-pink-500' },
  { icon: Cpu, title: 'Hardware & Software Engineer', gradient: 'from-gray-600 to-blue-500' },
  { icon: Layers, title: 'SAP (All Modules)', gradient: 'from-purple-500 to-indigo-500' },
  { icon: Calculator, title: 'Accountant', gradient: 'from-green-500 to-emerald-500' },
  { icon: Calculator, title: 'Tally Operator', gradient: 'from-emerald-500 to-green-500' },
  { icon: Calculator, title: 'Financial Analyst', gradient: 'from-green-500 to-cyan-500' },
  { icon: Phone, title: 'BPO Executive', gradient: 'from-orange-500 to-red-500' },
  { icon: Phone, title: 'Telecaller', gradient: 'from-red-500 to-orange-500' },
  { icon: Phone, title: 'Customer Support', gradient: 'from-orange-500 to-yellow-500' },
  { icon: Megaphone, title: 'Voice Process Executive', gradient: 'from-indigo-500 to-purple-500' },
  { icon: Megaphone, title: 'Non-Voice Process', gradient: 'from-purple-500 to-indigo-500' },
  { icon: Megaphone, title: 'Sales Executive', gradient: 'from-pink-500 to-rose-500' },
  { icon: Megaphone, title: 'Marketing Executive', gradient: 'from-rose-500 to-pink-500' },
  { icon: Megaphone, title: 'BDE (Business Development)', gradient: 'from-rose-500 to-pink-600' },
  { icon: Megaphone, title: 'Digital Marketing', gradient: 'from-purple-500 to-blue-500' },
  { icon: Package, title: 'Store Executive', gradient: 'from-amber-500 to-orange-500' },
  { icon: UserRound, title: 'CRM Executive', gradient: 'from-blue-500 to-cyan-500' },
  { icon: Package, title: 'Sales Man / Sales Girl', gradient: 'from-orange-500 to-yellow-500' },
  { icon: Bell, title: 'Receptionist', gradient: 'from-pink-500 to-purple-500' },
  { icon: Package, title: 'Retail Executive', gradient: 'from-yellow-500 to-orange-500' },
  { icon: Wrench, title: 'Civil Engineer', gradient: 'from-slate-500 to-gray-600' },
  { icon: Wrench, title: 'Mechanical Engineer', gradient: 'from-gray-600 to-slate-500' },
  { icon: Wrench, title: 'Site Engineer', gradient: 'from-gray-500 to-blue-500' },
  { icon: Users, title: 'HR Executive', gradient: 'from-teal-500 to-cyan-500' },
  { icon: Users, title: 'Admin Executive', gradient: 'from-cyan-500 to-teal-500' },
  { icon: Heart, title: 'Nurse', gradient: 'from-red-500 to-pink-500' },
  { icon: Heart, title: 'Healthcare Assistant', gradient: 'from-pink-500 to-red-500' },
  { icon: Heart, title: 'Medical Representative', gradient: 'from-red-500 to-rose-500' },
  { icon: Car, title: 'Showroom Executive', gradient: 'from-blue-500 to-indigo-500' },
  { icon: Car, title: 'Automobile Advisor', gradient: 'from-indigo-500 to-blue-500' },
  { icon: GraduationCap, title: 'BBA', gradient: 'from-purple-500 to-indigo-500' },
  { icon: GraduationCap, title: 'BCOM', gradient: 'from-indigo-500 to-purple-500' },
  { icon: GraduationCap, title: 'BBM', gradient: 'from-purple-500 to-blue-500' },
  { icon: GraduationCap, title: 'MBA', gradient: 'from-blue-500 to-purple-500' },
  { icon: GraduationCap, title: 'MCA', gradient: 'from-purple-500 to-cyan-500' },
  { icon: GraduationCap, title: 'BE', gradient: 'from-cyan-500 to-blue-500' },
  { icon: GraduationCap, title: 'Diploma Engineer', gradient: 'from-blue-500 to-cyan-500' },
  { icon: Flame, title: 'Fire & Safety', gradient: 'from-red-500 to-orange-600' },
  { icon: Wrench, title: 'ITI Fitter', gradient: 'from-orange-500 to-amber-500' },
  { icon: Wrench, title: 'ITI Welder', gradient: 'from-amber-500 to-orange-500' },
  { icon: Wrench, title: 'ITI Electrician', gradient: 'from-yellow-500 to-orange-500' },
  { icon: Home, title: 'Work From Home', gradient: 'from-green-500 to-emerald-500' },
  { icon: Building2, title: 'Work From Office', gradient: 'from-blue-500 to-cyan-500' },
  { icon: Ship, title: 'Offshore Mumbai', gradient: 'from-indigo-500 to-purple-500' },
  { icon: Fuel, title: 'Oil & Gas Engineer', gradient: 'from-yellow-500 to-orange-500' },
  { icon: Factory, title: 'Manufacturing Executive', gradient: 'from-gray-500 to-blue-500' },
  { icon: Stethoscope, title: 'Pharma Representative', gradient: 'from-red-500 to-pink-500' },
  { icon: Banknote, title: 'Banking Executive', gradient: 'from-green-500 to-emerald-500' },
  { icon: User, title: 'Helper', gradient: 'from-gray-500 to-gray-700' },
  { icon: User, title: 'Office Boy', gradient: 'from-gray-600 to-gray-500' },
  { icon: Car, title: 'Driver', gradient: 'from-indigo-500 to-blue-600' }
];

export default function OurServices({ onNavigate }: OurServicesProps) {
  const [hoveredSector, setHoveredSector] = useState<number | null>(null);
  const [hoveredRole, setHoveredRole] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAllRoles, setShowAllRoles] = useState(false);
  const [showAllSectors, setShowAllSectors] = useState(false);

  // Filter job roles based on search
  const filteredRoles = jobRoles.filter(role =>
    role.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter sectors based on search
  const filteredSectors = jobSectors.filter(sector =>
    sector.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Show limited number of items initially
  const displayedRoles = showAllRoles ? filteredRoles : filteredRoles.slice(0, 16);
  const displayedSectors = showAllSectors ? filteredSectors : filteredSectors.slice(0, 12);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-br from-blue-600 via-purple-700 to-pink-600 overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Shimmer Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 animate-shimmer" style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            transform: 'translateX(-100%)',
          }}></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute -top-20 -right-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-white/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-white/30 rounded-full blur-3xl"></div>
        </div>

        {/* Hero Content */}
        <div className="relative flex items-center justify-center text-center px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 opacity-0 leading-tight" style={{
              animation: 'fadeInUp 0.8s ease-out 0.2s forwards'
            }}>
              FIND THE JOB THAT FITS YOUR LIFE
              <span className="block text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent mt-2 sm:mt-3">
                Find the right job Sectors
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8 opacity-0 px-4" style={{
              animation: 'fadeInUp 0.8s ease-out 0.4s forwards'
            }}>
              We offer ten thousand job vacancies right now
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto opacity-0 px-4" style={{
              animation: 'fadeInUp 0.8s ease-out 0.6s forwards'
            }}>
              <div className="relative">
                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-white/70 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search job roles or sectors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-4 sm:pr-6 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-sm sm:text-base"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        
        {/* Jobs By Sectors Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <BookOpen className="text-blue-600" size={36} />
              <span>Explore By Industry Sectors</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-4 sm:mb-6 px-4">
              Browse opportunities across diverse industry categories and sectors
            </p>
            <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Responsive Grid: 1 col mobile, 2 cols tablet, 3 cols desktop, 4 cols large */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-12">
            {displayedSectors.map((sector, index) => {
              const isHovered = hoveredSector === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredSector(index)}
                  onMouseLeave={() => setHoveredSector(null)}
                  className="group relative opacity-0"
                  style={{
                    animation: `floatIn 0.6s ease-out ${index * 0.05}s forwards`,
                  }}
                >
                  <div className="relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden cursor-pointer h-28 sm:h-32 flex items-center justify-center">
                    {/* Animated Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>

                    {/* Glowing Border Effect */}
                    <div
                      className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                    ></div>

                    {/* Title */}
                    <h3 className="relative text-base sm:text-lg font-semibold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 text-center px-2">
                      {sector}
                    </h3>

                    {/* Animated Line */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 sm:h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-500 ${
                          isHovered ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Show More/Less Button for Sectors */}
          {filteredSectors.length > 12 && (
            <div className="text-center mb-12 sm:mb-16">
              <button
                onClick={() => setShowAllSectors(!showAllSectors)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 inline-flex items-center gap-2 shadow-lg text-sm sm:text-base"
              >
                {showAllSectors ? 'Show Less Sectors' : `Show All ${filteredSectors.length} Sectors`}
                <ArrowRight size={18} className={`transform transition-transform ${showAllSectors ? 'rotate-90' : 'rotate-0'}`} />
              </button>
            </div>
          )}
        </div>

        {/* Jobs By Roles Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <Briefcase className="text-blue-600" size={36} />
              <span>Find Your Perfect Role</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-4 sm:mb-6 px-4">
              Discover specific job positions and roles tailored to your skills
            </p>
            <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Responsive Grid: 2 cols mobile, 3 cols tablet, 4 cols desktop, 5 cols large */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 mb-8 sm:mb-12">
            {displayedRoles.map((role, index) => {
              const Icon = role.icon;
              const isHovered = hoveredRole === index;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredRole(index)}
                  onMouseLeave={() => setHoveredRole(null)}
                  className="relative bg-white border-2 border-blue-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-4 sm:py-5 hover:border-blue-600 hover:shadow-xl transition-all text-center font-medium text-gray-800 cursor-pointer transform hover:-translate-y-1 opacity-0 group"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 0.03}s forwards`
                  }}
                >
                  {/* Icon */}
                  <div className="mb-2 sm:mb-3 flex justify-center">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${role.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>

                  {/* Role Title */}
                  <span className={`relative z-10 text-xs sm:text-sm md:text-base ${isHovered ? 'text-blue-600 font-semibold' : ''} transition-colors duration-300 leading-tight block`}>
                    {role.title}
                  </span>

                  {/* Glow effect on hover */}
                  {isHovered && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} rounded-lg sm:rounded-xl blur-lg opacity-20 -z-10`}></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Show More/Less Button for Roles */}
          {filteredRoles.length > 16 && (
            <div className="text-center mb-12 sm:mb-16">
              <button
                onClick={() => setShowAllRoles(!showAllRoles)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 inline-flex items-center gap-2 shadow-lg text-sm sm:text-base"
              >
                {showAllRoles ? 'Show Less Roles' : `Show All ${filteredRoles.length} Roles`}
                <ArrowRight size={18} className={`transform transition-transform ${showAllRoles ? 'rotate-90' : 'rotate-0'}`} />
              </button>
            </div>
          )}
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-100 transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2 sm:mb-3">50+</div>
            <div className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Specialized Job Roles</div>
            <p className="text-sm sm:text-base text-gray-600">Specific positions across all industries</p>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-100 transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl sm:text-5xl font-bold text-purple-600 mb-2 sm:mb-3">25+</div>
            <div className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Industry Sectors</div>
            <p className="text-sm sm:text-base text-gray-600">Diverse sectors and categories</p>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-100 transform hover:scale-105 transition-transform duration-300 md:col-span-1">
            <div className="text-4xl sm:text-5xl font-bold text-green-600 mb-2 sm:mb-3">1000+</div>
            <div className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Active Opportunities</div>
            <p className="text-sm sm:text-base text-gray-600">Current jobs waiting for you</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
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

        @keyframes floatIn {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-shimmer {
          animation: shimmer 3s infinite;
        }

        /* Hide scrollbar for mobile */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}