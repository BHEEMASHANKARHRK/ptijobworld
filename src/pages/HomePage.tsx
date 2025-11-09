import { ArrowRight, Award, Building2, MapPin, Users, Briefcase, Code, TrendingUp, Users2, PhoneCall, Zap, Heart, Star } from 'lucide-react';
import { Instagram, Facebook, Linkedin, Phone } from 'lucide-react';
import type { SelectedCandidate } from '../types';
import { branches } from '../data/mockData';

interface HomePageProps {
    candidates: SelectedCandidate[];
    onNavigate: (page: string) => void;
}

const jobRoles = [
    { icon: Code, title: 'IT Software Engineer', color: 'from-blue-500 to-blue-600', count: '1,250+' },
    { icon: Briefcase, title: 'MNC & Non IT', color: 'from-purple-500 to-purple-600', count: '890+' },
    { icon: TrendingUp, title: 'Accountant & Tally', color: 'from-green-500 to-green-600', count: '650+' },
    { icon: PhoneCall, title: 'BPO / Telecallers', color: 'from-orange-500 to-orange-600', count: '1,120+' },
    { icon: Zap, title: 'Voice/Non-Voice', color: 'from-red-500 to-red-600', count: '980+' },
    { icon: TrendingUp, title: 'Sales/Marketing', color: 'from-indigo-500 to-indigo-600', count: '760+' },
    { icon: Briefcase, title: 'Indoor/Store Executive', color: 'from-cyan-500 to-cyan-600', count: '540+' },
    { icon: Briefcase, title: 'Civil/Mechanical', color: 'from-yellow-500 to-yellow-600', count: '430+' },
    { icon: Users2, title: 'HR / Admin', color: 'from-pink-500 to-pink-600', count: '620+' },
    { icon: Heart, title: 'Nurse / Healthcare', color: 'from-rose-500 to-rose-600', count: '380+' },
    { icon: Code, title: 'Web Development', color: 'from-teal-500 to-teal-600', count: '890+' },
    { icon: Briefcase, title: 'Data Entry', color: 'from-lime-500 to-lime-600', count: '710+' },
    { icon: TrendingUp, title: 'Digital Marketing', color: 'from-amber-500 to-amber-600', count: '560+' },
    { icon: PhoneCall, title: 'Customer Support', color: 'from-emerald-500 to-emerald-600', count: '920+' },
    { icon: Zap, title: 'Operations Manager', color: 'from-violet-500 to-violet-600', count: '450+' },
    { icon: Briefcase, title: 'Logistics', color: 'from-fuchsia-500 to-fuchsia-600', count: '380+' },
    { icon: Users2, title: 'Recruitment', color: 'from-sky-500 to-sky-600', count: '290+' },
    { icon: Heart, title: 'Medical Coding', color: 'from-red-400 to-red-500', count: '340+' },
    { icon: Code, title: 'Quality Assurance', color: 'from-blue-400 to-blue-500', count: '520+' },
    { icon: TrendingUp, title: 'Business Analyst', color: 'from-purple-400 to-purple-500', count: '410+' },
];

const companies = [
  { name: 'Tech Mahindra', logo: 'https://logo.clearbit.com/techmahindra.com', category: 'IT' },
  { name: 'Teleperformance', logo: 'https://logo.clearbit.com/teleperformance.com', category: 'BPO' },
  { name: 'Startek', logo: 'https://logo.clearbit.com/startek.com', category: 'BPO' },
  { name: 'Wipro', logo: 'https://logo.clearbit.com/wipro.com', category: 'IT' },
  { name: 'Accenture', logo: 'https://logo.clearbit.com/accenture.com', category: 'IT' },
  { name: 'TCS', logo: 'https://logo.clearbit.com/tcs.com', category: 'IT' },
  { name: 'HCL', logo: 'https://logo.clearbit.com/hcltech.com', category: 'IT' },
  { name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com', category: 'IT' },
  { name: 'Flipkart', logo: 'https://logo.clearbit.com/flipkart.com', category: 'E-commerce' },
  { name: 'Capgemini', logo: 'https://logo.clearbit.com/capgemini.com', category: 'Consulting' },
  { name: 'Cognizant', logo: 'https://logo.clearbit.com/cognizant.com', category: 'Consulting' },
  { name: 'Concentrix', logo: 'https://logo.clearbit.com/concentrix.com', category: 'BPO' },
  { name: 'Genpact', logo: 'https://logo.clearbit.com/genpact.com', category: 'BPO' },
  { name: 'IBM', logo: 'https://logo.clearbit.com/ibm.com', category: 'IT' },
  { name: 'Axis Bank', logo: 'https://logo.clearbit.com/axisbank.com', category: 'Finance' },
  { name: 'HDFC Bank', logo: 'https://logo.clearbit.com/hdfcbank.com', category: 'Finance' },
  { name: 'ICICI Bank', logo: 'https://logo.clearbit.com/icicibank.com', category: 'Finance' },
  { name: 'Bajaj Finance', logo: 'https://logo.clearbit.com/bajajfinserv.in', category: 'Finance' },
  { name: 'Mahindra', logo: 'https://logo.clearbit.com/mahindra.com', category: 'Automotive' },
  { name: 'Maruti Suzuki', logo: 'https://logo.clearbit.com/marutisuzuki.com', category: 'Automotive' },
  { name: 'Jio', logo: 'https://logo.clearbit.com/jio.com', category: 'Telecom' },
  { name: 'L&T', logo: 'https://logo.clearbit.com/larsentoubro.com', category: 'Engineering' },
  { name: 'Paytm', logo: 'https://logo.clearbit.com/paytm.com', category: 'Startup' },
  { name: 'IndiGo', logo: 'https://logo.clearbit.com/goindigo.in', category: 'Aviation' },
];

const scrollingCompanies = [...companies, ...companies, ...companies];

export default function HomePage({ candidates, onNavigate }: HomePageProps) {
    return (
        <div className="min-h-screen bg-white w-full overflow-x-hidden">

            {/* Hero Section with Video */}
            <section className="relative w-full bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Content Overlay */}
                    <div className="relative z-20 text-center mb-8 sm:mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                            Find Your Dream Career
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
                            Connect with top employers and discover opportunities across India
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
                            <button 
                                onClick={() => onNavigate('candidates')}
                                className="w-full sm:w-auto bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
                            >
                                <Briefcase size={20} />
                                Browse Opportunities
                            </button>
                            <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
                                Register Now
                            </button>
                        </div>
                    </div>

                    {/* Video Section */}
                    <div className="relative z-10 w-full max-w-6xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                        <video
                            ref={(video) => {
                                if (video && !video.dataset.initialized) {
                                    video.dataset.initialized = 'true';
                                    const sources = [
                                        "/video/1.mp4",
                                        "/video/2.mp4",
                                        "/video/3.mp4",
                                        "/video/4.mp4",
                                        "/video/5.mp4"
                                    ];
                                    let index = 0;
                                    video.src = sources[index];
                                    video.addEventListener("ended", () => {
                                        index = (index + 1) % sources.length;
                                        video.src = sources[index];
                                        video.play();
                                    });
                                }
                            }}
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            playsInline
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <div className="text-center p-6 sm:p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-transform hover:scale-110 shadow-lg">
                                <Users className="text-white" size={32} />
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">10,000+</h3>
                            <p className="text-gray-600 text-base sm:text-lg font-medium">Candidates Placed</p>
                        </div>
                        <div className="text-center p-6 sm:p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-transform hover:scale-110 shadow-lg">
                                <Building2 className="text-white" size={32} />
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">15,000+</h3>
                            <p className="text-gray-600 text-base sm:text-lg font-medium">Partner Companies</p>
                        </div>
                        <div className="text-center p-6 sm:p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 sm:col-span-2 lg:col-span-1">
                            <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-transform hover:scale-110 shadow-lg">
                                <MapPin className="text-white" size={32} />
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">4</h3>
                            <p className="text-gray-600 text-base sm:text-lg font-medium">Branch Locations</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Job Categories - Responsive Grid */}
            <section className="w-full py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                            Explore Job Categories
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            Find your perfect role across diverse industries
                        </p>
                    </div>

                    {/* Responsive Grid: 2 cols mobile, 3 tablet, 4 desktop, 5 large screens */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                        {jobRoles.map((role, index) => {
                            const IconComponent = role.icon;
                            return (
                                <div
                                    key={index}
                                    className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                                    style={{
                                        animation: `fadeInUp 0.5s ease-out ${index * 0.05}s backwards`
                                    }}
                                >
                                    <div className={`bg-gradient-to-br ${role.color} rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center justify-center text-center`}>
                                        <div className="bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-lg mb-2 sm:mb-3 group-hover:bg-white/30 transition-colors">
                                            <IconComponent size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
                                        </div>
                                        <h3 className="font-bold text-xs sm:text-sm md:text-base mb-1 sm:mb-2 leading-tight">
                                            {role.title}
                                        </h3>
                                        <p className="text-[10px] sm:text-xs opacity-90 font-semibold">
                                            {role.count} Jobs
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="text-center mt-8 sm:mt-12">
                        <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto">
                            View All Categories
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Trusted Companies Section */}
            <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                            <Star className="text-yellow-500 fill-current" size={24} />
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                                Trusted by 100+ Companies
                            </h2>
                            <Star className="text-yellow-500 fill-current hidden sm:block" size={24} />
                        </div>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                            We partner with industry leaders to provide exceptional opportunities
                        </p>
                    </div>

                    {/* Double Row Animated Scrolling */}
                    <div className="space-y-6 sm:space-y-8">
                        {/* Top Row - Forward Scroll */}
                        <div className="relative overflow-hidden">
                            <div className="flex animate-scroll-forward">
                                {scrollingCompanies.slice(0, scrollingCompanies.length/2).map((company, idx) => (
                                    <div
                                        key={`top-${idx}`}
                                        className="flex-shrink-0 mx-2 sm:mx-4 bg-white border border-gray-200 rounded-lg sm:rounded-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 sm:gap-3 md:gap-4 min-w-[200px] sm:min-w-[240px] md:min-w-[280px] group"
                                    >
                                        <div className="relative flex-shrink-0">
                                            <img
                                                src={company.logo}
                                                alt={`${company.name} logo`}
                                                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                                                    if (fallback) fallback.style.display = 'flex';
                                                }}
                                            />
                                            <div className="hidden w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg items-center justify-center text-white font-bold text-[10px] sm:text-xs">
                                                {company.name.split(' ').map(w => w[0]).join('')}
                                            </div>
                                        </div>
                                        <div className="min-w-0">
                                            <p className="font-bold text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap truncate">
                                                {company.name}
                                            </p>
                                            <span className="text-[10px] sm:text-xs text-gray-500 bg-gray-100 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                                                {company.category}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Row - Reverse Scroll */}
                        <div className="relative overflow-hidden">
                            <div className="flex animate-scroll-reverse">
                                {scrollingCompanies.slice(scrollingCompanies.length/2).map((company, idx) => (
                                    <div
                                        key={`bottom-${idx}`}
                                        className="flex-shrink-0 mx-2 sm:mx-4 bg-white border border-gray-200 rounded-lg sm:rounded-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 sm:gap-3 md:gap-4 min-w-[200px] sm:min-w-[240px] md:min-w-[280px] group"
                                    >
                                        <div className="relative flex-shrink-0">
                                            <img
                                                src={company.logo}
                                                alt={`${company.name} logo`}
                                                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                                                    if (fallback) fallback.style.display = 'flex';
                                                }}
                                            />
                                            <div className="hidden w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg items-center justify-center text-white font-bold text-[10px] sm:text-xs">
                                                {company.name.split(' ').map(w => w[0]).join('')}
                                            </div>
                                        </div>
                                        <div className="min-w-0">
                                            <p className="font-bold text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap truncate">
                                                {company.name}
                                            </p>
                                            <span className="text-[10px] sm:text-xs text-gray-500 bg-gray-100 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                                                {company.category}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Stats Badge */}
                    <div className="text-center mt-8 sm:mt-12 md:mt-16">
                        <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 bg-white rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 shadow-lg border border-gray-200">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-xs sm:text-sm text-gray-700 font-semibold">100+ Companies</span>
                            </div>
                            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-pulse"></div>
                                <span className="text-xs sm:text-sm text-gray-700 font-semibold">15+ Industries</span>
                            </div>
                            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full animate-pulse"></div>
                                <span className="text-xs sm:text-sm text-gray-700 font-semibold">Global Presence</span>
                            </div>
                        </div>
                    </div>
                </div>

                <style>{`
                    @keyframes scroll-forward {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    @keyframes scroll-reverse {
                        0% { transform: translateX(-50%); }
                        100% { transform: translateX(0); }
                    }
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    .animate-scroll-forward {
                        animation: scroll-forward 80s linear infinite;
                        display: flex;
                        width: max-content;
                    }
                    .animate-scroll-reverse {
                        animation: scroll-reverse 80s linear infinite;
                        display: flex;
                        width: max-content;
                    }
                    .animate-scroll-forward:hover,
                    .animate-scroll-reverse:hover {
                        animation-play-state: paused;
                    }
                `}</style>
            </section>

            {/* Teams Section */}
            <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 sm:mb-12 gap-4">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-3">
                                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-xl">
                                    <Award className="text-white" size={28} />
                                </div>
                                Our Teams
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-gray-600">
                                Meet professionals who found their dream careers with us
                            </p>
                        </div>
                        <button
                            onClick={() => onNavigate('candidates')}
                            className="hidden lg:flex items-center gap-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            View All Team Members 
                            <ArrowRight size={20} />
                        </button>
                    </div>

                    <div className="relative">
                        <div className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto pb-6 sm:pb-8 scrollbar-hide snap-x snap-mandatory">
                            {candidates.map((candidate) => (
                                <div
                                    key={candidate.id}
                                    className="flex-shrink-0 w-64 sm:w-72 md:w-80 snap-start"
                                >
                                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 border border-gray-100">
                                        <div className="h-56 sm:h-64 md:h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 relative">
                                            <img
                                                src={candidate.imageUrl}
                                                alt={candidate.name}
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                            />
                                            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                                                Active
                                            </div>
                                        </div>
                                        <div className="p-4 sm:p-5 md:p-6">
                                            <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-1 sm:mb-2">{candidate.name}</h3>
                                            <p className="text-blue-600 font-semibold text-base sm:text-lg mb-1 sm:mb-2">{candidate.jobTitle}</p>
                                            <p className="text-gray-700 mb-3 sm:mb-4 font-medium text-sm sm:text-base">{candidate.companyName}</p>
                                            <div className="flex items-center text-gray-500 text-sm">
                                                <MapPin size={16} className="mr-2" />
                                                {candidate.location}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => onNavigate('candidates')}
                        className="lg:hidden flex items-center gap-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 mx-auto mt-6 sm:mt-8"
                    >
                        View All Team Members 
                        <ArrowRight size={20} />
                    </button>
                </div>
            </section>

            {/* Branches Section */}
            <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">Our Branches</h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
                        Strategically located offices to serve you across key regions
                    </p>
                    
                    {/* Responsive Grid: 1 col mobile, 2 cols tablet, 3 cols desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {branches.map((branch, index) => (
                            <div
                                key={branch.city}
                                className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 transform hover:-translate-y-2 border border-gray-100"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                                }}
                            >
                                {/* Office Name */}
                                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg">
                                        <MapPin className="text-white" size={20} />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{branch.city} Office</h3>
                                </div>

                                {/* Address */}
                                <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed border-l-4 border-blue-500 pl-3 sm:pl-4">
                                    {branch.address}
                                </p>

                                {/* Phone Numbers */}
                                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                                    {branch.phones.map((phone) => (
                                        <a
                                            key={phone}
                                            href={`tel:${phone}`}
                                            className="flex items-center gap-2 sm:gap-3 text-gray-900 hover:text-blue-600 font-semibold transition-all duration-300 group"
                                        >
                                            <div className="bg-green-100 p-1.5 sm:p-2 rounded-lg group-hover:bg-green-500 group-hover:text-white transition-colors">
                                                <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
                                            </div>
                                            <span className="text-sm sm:text-base lg:text-lg">{phone}</span>
                                        </a>
                                    ))}
                                </div>

                                {/* Social Media Links */}
                                <div className="pt-4 sm:pt-6 border-t border-gray-200">
                                    <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 font-semibold uppercase tracking-wider">
                                        Connect With Us
                                    </p>
                                    <div className="flex gap-2 sm:gap-3">
                                        {/* Instagram */}
                                        <a
                                            href={branch.instagram || "https://instagram.com"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                                        >
                                            <Instagram className="text-white" size={18} />
                                        </a>

                                        {/* Facebook */}
                                        <a
                                            href={branch.facebook || "https://facebook.com"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg sm:rounded-xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                                        >
                                            <Facebook className="text-white" size={18} />
                                        </a>

                                        {/* LinkedIn */}
                                        <a
                                            href={branch.linkedin || "https://linkedin.com"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg sm:rounded-xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                                        >
                                            <Linkedin className="text-white" size={18} />
                                        </a>

                                        {/* JustDial */}
                                        <a
                                            href={branch.justdialUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg sm:rounded-xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200"
                                        >
                                            <img
                                                src="/jd.png"
                                                alt="JustDial"
                                                className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-blue-100">
                        Join thousands of professionals who found their dream careers
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="w-full sm:w-auto bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl">
                            Create Your Profile
                        </button>
                        <button 
                            onClick={() => onNavigate('candidates')}
                            className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
                        >
                            Browse All Opportunities
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}