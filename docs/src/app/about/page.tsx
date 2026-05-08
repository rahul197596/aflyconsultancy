export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Afly Consultancy</h1>
          <p className="text-xl text-blue-100">Empowering students to achieve their global education dreams</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower students from diverse backgrounds to pursue quality education globally and achieve their career aspirations through professional guidance, support, and mentorship.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted education consultancy partner, recognized for our commitment to student success, integrity, and transformative educational experiences worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Values</h3>
              <p className="text-gray-700 leading-relaxed">
                We believe in integrity, excellence, student-centricity, and continuous improvement. Every student deserves honest guidance and dedicated support on their educational journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2008</div>
              <h4 className="font-bold mb-2">Founded</h4>
              <p className="text-gray-600 text-sm">Afly Consultancy started with a mission to help students achieve global education goals</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2012</div>
              <h4 className="font-bold mb-2">Expansion</h4>
              <p className="text-gray-600 text-sm">Expanded to multiple cities and established partnerships with 50+ universities</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2018</div>
              <h4 className="font-bold mb-2">Digital Launch</h4>
              <p className="text-gray-600 text-sm">Launched online consultation services to reach students globally</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2024</div>
              <h4 className="font-bold mb-2">Global Leader</h4>
              <p className="text-gray-600 text-sm">Recognized as a leading education consultancy with 500+ successful placements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Arun Sharma', title: 'Founder & CEO', bio: 'With 15+ years in education consultancy' },
              { name: 'Priya Desai', title: 'Head of University Relations', bio: 'Expert in university partnerships and admissions' },
              { name: 'Rajesh Kumar', title: 'Senior Career Counselor', bio: 'Specialized in career planning and mentorship' },
            ].map((member, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-4 flex items-center justify-center text-2xl text-white font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.title}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-blue-100">Students Placed</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-blue-100">Partner Universities</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">20+</div>
              <p className="text-blue-100">Countries Served</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <p className="text-blue-100">Success Rate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
