        import { FiTarget, FiUsers, FiMic, FiMessageCircle } from "react-icons/fi";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800 px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Hero */}
        <section className="flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6">
              Welcome to <span className="text-black">D-Mic</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Where ideas meet influence. <strong>D-Mic</strong> is your professional mic — a hybrid of Twitter and LinkedIn for educational conversations. Share your thoughts. Build your voice. Expand your impact.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
              Start Posting on D-Mic
            </button>
          </div>
          <img
            src="https://img.freepik.com/free-vector/telecommuting-concept-illustration_52683-36259.jpg?ga=GA1.1.1269622927.1748846469&semt=ais_hybrid&w=740"
            alt="Telecommuting"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </section>

        {/* What is D-Mic */}
        <section className="flex flex-col lg:flex-row items-center gap-10">
          <img
            src="https://img.freepik.com/free-vector/business-people-discussing-charts_23-2148462714.jpg?ga=GA1.1.1269622927.1748846469&semt=ais_hybrid&w=740"
            alt="Business Discussion"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">What is D-Mic?</h2>
            <p className="text-md text-gray-700 leading-relaxed">
              <strong>D-Mic</strong> is the ultimate convergence of microblogging and professional networking. Post like you tweet, engage like you’re on LinkedIn — except it’s faster, more open, and driven by educators, learners, and leaders.
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-600">
              <li>Post short, insightful thoughts on education and industry trends</li>
              <li>Grow your influence and followers through professional content</li>
              <li>React, comment, and engage like a pro</li>
            </ul>
          </div>
        </section>


{/* Why Choose D-Mic */}
<section className="bg-white rounded-xl shadow-xl p-10">
  <h2 className="text-3xl font-extrabold text-blue-800 mb-10 text-center">
    Why Choose <span className="text-black">D-Mic</span>?
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {/* Card 1 */}
    <div className="flex items-start gap-4">
      <FiTarget className="text-blue-600 text-4xl" />
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-1">Purpose-Driven Posting</h3>
        <p className="text-gray-600">
          Share insights that spark ideas and inform your network — D-Mic posts are short but sharp, tailored for impact.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="flex items-start gap-4">
      <FiUsers className="text-blue-600 text-4xl" />
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-1">Professional Networking</h3>
        <p className="text-gray-600">
          Build authentic relationships with educators, leaders, and change-makers in your field — without the noise.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="flex items-start gap-4">
      <FiMic className="text-blue-600 text-4xl" />
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-1">Your Voice, Amplified</h3>
        <p className="text-gray-600">
          Whether you’re a student or a senior executive, D-Mic gives your voice the reach it deserves in professional circles.
        </p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="flex items-start gap-4">
      <FiMessageCircle className="text-blue-600 text-4xl" />
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-1">Smart Conversations</h3>
        <p className="text-gray-600">
          Foster intelligent discussion on industry trends, innovation, and education — in a space built for thoughtful engagement.
        </p>
      </div>
    </div>
  </div>
</section>



        {/* Final CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Be Heard. Be Professional. Be You.</h2>
          <p className="text-lg text-gray-600 mb-6">Join thousands of thinkers, learners and leaders on D-Mic today.</p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
            Claim Your Voice
          </button>
        </section>
      </div>
    </div>
  );
};

export default About;
