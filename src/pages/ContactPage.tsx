import { Mail, MapPin, Phone, Clock, Send, FileText, Instagram, Facebook, Linkedin } from 'lucide-react';
import { useState } from 'react';

// Branch data - replace with your actual data import
const branches = [
    {
        city: 'Kalaburagi',
        address: '1st floor, Asian business centre, Kalaburagi',
        phones: ['9108012711', '7411174069'],
        justdialUrl: 'https://www.justdial.com/Gulbarga/Pti-Job-World-Placement-Near-Lahoti-Petrol-Bunk-College-Road-Gulbarga/9999P8472-8472-211020123150-B8U8_BZDET',
        instagram: 'https://www.instagram.com/ptijobsworld',
        facebook: 'https://www.facebook.com/ptijobsworld',
        linkedin: 'https://www.linkedin.com/company/ptijobsworld'
    },
    {
        city: 'Solapur',
        address: '2nd floor, Vyas building, Opp. City Post office, chaupad, Navi peth, Solapur',
        phones: ['9591409911', '9272021110'],
        justdialUrl: 'https://www.justdial.com/Solapur/Pti-Job-World-Placement-Opposite-City-Post-Office-Chaupad-Navi-Peth/9999PX217-X217-230728095529-M4A8_BZDET',
        instagram: 'https://www.instagram.com/ptijobsworld',
        facebook: 'https://www.facebook.com/ptijobsworld',
        linkedin: 'https://www.linkedin.com/company/ptijobsworld'
    },
    {
        city: 'Raichur',
        address: '1st floor, Beroon kille, Oppo. Ek minar Masjid, Raichur',
        phones: ['8861531411', '6364099034'],
        justdialUrl: 'https://www.justdial.com/Raichur/Pti-Job-World-Placement-Near-Old-Hospital-Station-Road-Raichur/9999P8532-8532-250127141930-N5T6_BZDET',
        instagram: 'https://www.instagram.com/ptijobsworld',
        facebook: 'https://www.facebook.com/ptijobsworld',
        linkedin: 'https://www.linkedin.com/company/ptijobsworld'
    }
];

export default function ContactPage() {
    const [hoveredBranch, setHoveredBranch] = useState<number | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        branch: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us! We will get back to you soon.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleFormClick = () => {
        window.open('https://forms.gle/k7pYHZ3etazyuFDQ6', '_blank');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-20">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 animate-shimmer" style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    }}></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 opacity-0" style={{
                        animation: 'fadeInUp 0.8s ease-out forwards'
                    }}>
                        Contact Us
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto opacity-0" style={{
                        animation: 'fadeInUp 0.8s ease-out 0.2s forwards'
                    }}>
                        Get in touch with our team at any of our branch locations
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Branch Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {branches.map((branch, index) => (
                        <div
                            key={branch.city}
                            onMouseEnter={() => setHoveredBranch(index)}
                            onMouseLeave={() => setHoveredBranch(null)}
                            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-500 opacity-0"
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s forwards`
                            }}
                        >
                            {/* Gradient Header */}
                            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                <div className="relative z-10">
                                    <MapPin className="mb-3 animate-bounce" size={32} />
                                    <h2 className="text-2xl font-bold mb-2">{branch.city} Office</h2>
                                    <div className="h-1 w-20 bg-white rounded group-hover:w-32 transition-all duration-300"></div>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 space-y-5">
                                {/* Address */}
                                <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 p-2 rounded-lg">
                                        <MapPin className="text-blue-600" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                                        <p className="text-gray-700 text-sm leading-relaxed">{branch.address}</p>
                                    </div>
                                </div>

                                {/* Phone Numbers */}
                                <div className="flex items-start gap-3">
                                    <div className="bg-green-100 p-2 rounded-lg">
                                        <Phone className="text-green-600" size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                                        <div className="space-y-1">
                                            {branch.phones.map((phone: string) => (
                                                <a
                                                    key={phone}
                                                    href={`tel:${phone}`}
                                                    className="block text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm"
                                                >
                                                    📞 {phone}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Social Media */}
                                <div className="pt-4 border-t border-gray-200">
                                    <h3 className="text-xs text-gray-500 mb-3 font-semibold uppercase tracking-wide">Connect With Us</h3>
                                    <div className="flex gap-3">
                                        <a
                                            href={branch.instagram || "https://instagram.com"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/social relative w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                                        >
                                            <Instagram className="text-white" size={20} />
                                        </a>
                                        <a
                                            href={branch.facebook || "https://facebook.com"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/social relative w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                                        >
                                            <Facebook className="text-white" size={20} />
                                        </a>
                                        <a
                                            href={branch.linkedin || "https://linkedin.com"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/social relative w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                                        >
                                            <Linkedin className="text-white" size={20} />
                                        </a>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="space-y-3 pt-2">
                                    <a
                                        href={branch.justdialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all text-center transform hover:scale-105 shadow-md"
                                    >
                                        View on JustDial →
                                    </a>
                                    <button
                                        onClick={handleFormClick}
                                        className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all text-center transform hover:scale-105 shadow-md flex items-center justify-center gap-2"
                                    >
                                        <FileText size={20} />
                                        Fill the Form Now
                                    </button>
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            {hoveredBranch === index && (
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 pointer-events-none"></div>
                            )}
                        </div>
                    ))}
                </div>

        
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden opacity-0" style={{
                    animation: 'fadeInUp 0.8s ease-out 0.5s forwards'
                }}>
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                        <div className="flex items-center gap-3 mb-2">
                            <Mail size={32} />
                            <h2 className="text-3xl font-bold">Send Us a Message</h2>
                        </div>
                        <p className="text-blue-100">Fill out the form below and we'll get back to you as soon as possible</p>
                    </div>

                    <div className="p-8">
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="group">
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div className="group">
                                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="branch" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Preferred Branch
                                </label>
                                <select
                                    id="branch"
                                    value={formData.branch}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-white transition-all"
                                >
                                    <option value="">Select a branch</option>
                                    {branches.map((branch) => (
                                        <option key={branch.city} value={branch.city}>
                                            {branch.city}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all resize-none"
                                    placeholder="Tell us how we can help you..."
                                ></textarea>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="group w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-3 shadow-lg transform hover:scale-105"
                            >
                                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>

                {/* Office Hours */}
                <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200 shadow-lg opacity-0" style={{
                    animation: 'fadeInUp 0.8s ease-out 0.7s forwards'
                }}>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-600 p-3 rounded-lg">
                            <Clock className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-0 md:ml-14">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <p className="text-gray-700">
                                <span className="font-bold text-blue-600">Monday - Saturday:</span>
                                <span className="ml-2">10:00 AM - 7:00 PM</span>
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <p className="text-gray-700">
                                <span className="font-bold text-red-600">Sunday:</span>
                                <span className="ml-2">Closed</span>
                            </p>
                        </div>
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

                .animate-shimmer {
                    animation: shimmer 3s infinite;
                }
            `}</style>
        </div>
    );
}