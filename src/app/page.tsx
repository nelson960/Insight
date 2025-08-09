import Image from "next/image";
import ScrollAnimation from "./components/ScrollAnimation";
import FloatingLines from "./components/FloatingLines";
import TypewriterText from "./components/TypewriterText";
import NoiseTexture from "./components/NoiseTexture";
import ContactPopup from "./components/ContactPopup";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 relative">
      <FloatingLines />
      <NoiseTexture />
      {/* Hero Section */}
      <section className="w-full px-4 sm:px-6 py-16 sm:py-20 md:py-32 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-wide text-gray-900 relative">
          <span className="relative inline-block">
            <span className="absolute inset-0 text-white blur-sm opacity-40 transform scale-105">Insight</span>
            <span className="relative z-10">Insight</span>
          </span>
        </h1>
        <h2 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 tracking-wide px-2">
          Private AI Infrastructure for High-Risk Industries
        </h2>
      </section>

      {/* Value Proposition */}
      <section className="w-full px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-center relative z-10">
        <ScrollAnimation animation="fade-up">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 tracking-wide">
            Cloudless. Modular. Actionable.
          </h3>
        </ScrollAnimation>
        <ScrollAnimation animation="fade-up" delay={100}>
          <p className="text-base sm:text-lg md:text-xl max-w-4xl mx-auto text-gray-700 leading-relaxed mb-6 px-2">
            Insight is an offline, on-premise AI system built for organizations with strict privacy, security, and compliance needs.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animation="fade-up" delay={200}>
          <p className="text-base sm:text-lg max-w-4xl mx-auto text-gray-600 leading-relaxed px-2">
            Designed for industries like law, healthcare, government, and defense — Insight enables intelligent file interaction through modular AI agents that handle real work, not just chat.
          </p>
        </ScrollAnimation>
      </section>

      {/* Elegant Divider */}
      <div className="w-full flex justify-center py-12">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
      </div>
      
      
      
      {/* How It Works */}
      <section id="how-it-works" className="w-full px-4 sm:px-6 py-16 sm:py-20 md:py-28 text-center relative z-10">
        <ScrollAnimation animation="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 tracking-wide text-gray-900">How It Works</h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto mt-8 sm:mt-12">
          <ScrollAnimation animation="scale" delay={100}>
            <div className="text-center group cursor-pointer px-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-lg shadow-blue-200/50 group-hover:shadow-xl group-hover:shadow-blue-300/50 group-hover:scale-110 transition-all duration-300">
                <span className="text-xl sm:text-2xl font-bold text-blue-700">1</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 tracking-wide">Upload Documents or Images</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Local files stay on your hardware — no internet, no external API.</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="scale" delay={200}>
            <div className="text-center group cursor-pointer px-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center shadow-lg shadow-purple-200/50 group-hover:shadow-xl group-hover:shadow-purple-300/50 group-hover:scale-110 transition-all duration-300">
                <span className="text-xl sm:text-2xl font-bold text-purple-700">2</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 tracking-wide">Insight Detects the Task</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">User queries control everything. Smart routing identifies file types and directs agents to appropriate actions.</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="scale" delay={300}>
            <div className="text-center group cursor-pointer px-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center shadow-lg shadow-green-200/50 group-hover:shadow-xl group-hover:shadow-green-300/50 group-hover:scale-110 transition-all duration-300">
                <span className="text-xl sm:text-2xl font-bold text-green-700">3</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 tracking-wide">Agents Take Over</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Modular AI agents analyze, extract, compare, summarize, and organize your data.</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="scale" delay={400}>
            <div className="text-center group cursor-pointer px-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full flex items-center justify-center shadow-lg shadow-indigo-200/50 group-hover:shadow-xl group-hover:shadow-indigo-300/50 group-hover:scale-110 transition-all duration-300">
                <span className="text-xl sm:text-2xl font-bold text-indigo-700">4</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 tracking-wide">Get Structured Results</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Insight returns clean outputs: summaries, comparisons, extracted info, organized folders — all inside your private network.</p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Elegant Divider */}
      <div className="w-full flex justify-center py-12">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
      </div>
      
      {/* Who It's For */}
      <section id="who-its-for" className="w-full px-4 sm:px-6 py-16 sm:py-20 md:py-28 text-center relative z-10">
        <ScrollAnimation animation="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 tracking-wide text-gray-900">
            Industries
          </h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto mt-8 sm:mt-12">
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="group bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg shadow-gray-200/30 hover:shadow-2xl hover:shadow-gray-300/40 transition-all duration-500 border border-gray-100/50 hover:border-blue-200/50 cursor-pointer hover:scale-105 hover:-translate-y-2 h-28 sm:h-32 flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 tracking-wide">Legal</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Contract analysis and compliance</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={200}>
            <div className="group bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg shadow-gray-200/30 hover:shadow-2xl hover:shadow-gray-300/40 transition-all duration-500 border border-gray-100/50 hover:border-green-200/50 cursor-pointer hover:scale-105 hover:-translate-y-2 h-28 sm:h-32 flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 tracking-wide">Healthcare</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Medical record analysis</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={300}>
            <div className="group bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg shadow-gray-200/30 hover:shadow-2xl hover:shadow-gray-300/40 transition-all duration-500 border border-gray-100/50 hover:border-purple-200/50 cursor-pointer hover:scale-105 hover:-translate-y-2 h-28 sm:h-32 flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 tracking-wide">Government</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Secure document processing</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={400}>
            <div className="group bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg shadow-gray-200/30 hover:shadow-2xl hover:shadow-gray-300/40 transition-all duration-500 border border-gray-100/50 hover:border-amber-200/50 cursor-pointer hover:scale-105 hover:-translate-y-2 h-28 sm:h-32 flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 tracking-wide">Finance</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Risk assessment and reporting</p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Elegant Divider */}
      <div className="w-full flex justify-center py-12">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
      </div>
      
      
      {/* CTA */}
      <section id="contact" className="w-full px-4 sm:px-6 py-16 sm:py-20 md:py-28 text-center relative z-10">
        <ScrollAnimation animation="scale" delay={200}>
          <ContactPopup />
        </ScrollAnimation>
      </section>
    </main>
  );
}
