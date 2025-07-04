import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex items-center justify-center px-4 py-10">
      <div className="backdrop-blur-lg bg-white/60 border border-white/30 shadow-2xl rounded-3xl p-10 md:p-16 max-w-3xl w-full text-center transition-all">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
          Insight
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 font-medium mb-6">
          Your Private, AI‑Powered Knowledge Engine
        </p>
        <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
          Insight is an <strong>offline, multimodal AI assistant</strong> that transforms static files into an intelligent, interactive knowledge ecosystem.
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          It ingests massive volumes of documents—including PDFs, Office files, images,
          and plain text—at scale, and provides natural answers enriched with visual context.
        </p>

        <div className="mt-8">
          <a
            href="#"
            className="inline-block bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </main>
  );
}

