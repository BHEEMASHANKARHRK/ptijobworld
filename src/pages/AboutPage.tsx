import { Award, CheckCircle, Target, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About PTI Job World</h1>
          <p className="text-xl text-blue-100">
            Your trusted partner in career success since establishment
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            PTI Job World Placement is a professional recruitment and training organization that connects career-oriented candidates with reputed employers across India. Our goal is to empower individuals through career guidance, professional training, and transparent recruitment services.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We specialize in both fresher and experienced placements across industries like IT, Banking, Sales, Marketing, Administration, Customer Support, and Technical roles. With dedicated branches in Kalaburagi, Solapur, and Raichur, PTI has helped hundreds of candidates achieve their career dreams.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our experienced team ensures that every candidate receives personalized attention and real job opportunities suited to their skills and qualifications. We believe in building long-term relationships with both candidates and employers, ensuring mutual growth and satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Target className="text-blue-600" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To become the most trusted and preferred recruitment partner in Karnataka, known for our integrity, professionalism, and commitment to transforming lives through meaningful employment opportunities.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Award className="text-green-600" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To bridge the gap between talented job seekers and quality employers by providing comprehensive career support, skill development, and genuine placement opportunities that lead to long-term career success.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Users className="text-blue-600" size={36} />
            Why Choose PTI Jobs World?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Verified and genuine job opportunities from reputed companies',
              'Personalized career guidance and counseling',
              'Free job placement assistance and support',
              'Regular updates on latest job openings',
              'Professional resume building and interview preparation',
              'Direct connection with hiring managers',
              'Post-placement support and follow-up',
              'Training programs to enhance employability skills'
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Job Placement</h3>
              <p className="text-gray-700">
                Connecting candidates with the right opportunities across various industries and experience levels.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Career Counseling</h3>
              <p className="text-gray-700">
                Expert guidance to help you make informed career decisions and identify your strengths.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Skill Development</h3>
              <p className="text-gray-700">
                Training programs designed to enhance your skills and increase your employability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}