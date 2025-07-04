import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="w-full px-6 py-20 md:py-32 text-center bg-gradient-to-b from-white to-blue-50">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Insight
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-medium max-w-3xl mx-auto">
          Your Private, AI‑Powered Knowledge Engine
        </p>
        <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
          Insight is an <strong>offline, multimodal AI assistant</strong> that transforms static files into an intelligent, interactive knowledge ecosystem. It ingests massive volumes of documents—including PDFs, Office files, images, and plain text—at scale and provides natural answers enriched with visual context.
        </p>
      </section>

      {/* Problem Section */}
      <section className="w-full px-6 py-20 md:py-28 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          The Challenge Modern Organizations Face
        </h2>
        <p className="text-gray-700 text-lg max-w-4xl mx-auto">
          Modern organizations are overwhelmed by unstructured data—documents, images, spreadsheets, presentations—scattered across silos. Cloud-based AI solutions offer advanced capabilities but at the cost of <strong>security, compliance, and control</strong>.
        </p>
        <p className="mt-4 text-gray-700 text-lg max-w-4xl mx-auto">
          For enterprises and professionals who value privacy, most tools are either too limited, too slow, or overly reliant on third-party infrastructure.
        </p>
      </section>

      {/* Capabilities Section */}
      <section className="w-full px-6 py-20 md:py-28 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          Key Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left text-gray-800">
          <div>
            <h3 className="text-xl font-bold mb-2">High-Speed Ingestion</h3>
            <p>Processes tens of thousands of files per hour, including OCR for image-based documents.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Multimodal Interaction</h3>
            <p>Understands and responds with both text and images for rich, visual answers.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Contextual Memory</h3>
            <p>Keeps conversation history and query context intelligently across sessions.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Offline and Secure</h3>
            <p>Runs entirely locally—no internet access required. Your data never leaves your system.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Controlled Data Lifecycle</h3>
            <p>Enables secure deletion and enforces data sovereignty. You stay in control.</p>
          </div>
        </div>
      </section>

      {/* Core Idea */}
      <section className="w-full px-6 py-20 md:py-28 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">The Core Idea</h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          <strong>Insight transforms static documents and images into a dynamic, interconnected, and emotionally resonant digital environment.</strong>
        </p>
        <p className="mt-4 text-gray-700 text-lg max-w-4xl mx-auto">
          This is more than just search or summarization—it's about <strong>curation, discovery, and deep understanding.</strong> Users don’t just organize files—they interact with them as living, evolving stories.
        </p>
      </section>

      {/* Why Insight */}
      <section className="w-full px-6 py-20 md:py-28 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">Why Insight</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left text-gray-800">
          <div>
            <h3 className="text-xl font-bold mb-2">Privacy by Design</h3>
            <p>No cloud dependency. Built for compliance-heavy sectors like healthcare, finance, defense, and legal.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Speed and Scalability</h3>
            <p>Runs at enterprise-scale throughput on local hardware—without external servers.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">True Multimodal Intelligence</h3>
            <p>Combines advanced vision and language models to give richer, smarter insights.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Adaptable and Contained</h3>
            <p>Deploy as a desktop app, internal server, or modular service—under your control, always.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-6 py-20 md:py-28 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to Take Back Control?</h2>
        <p className="text-gray-700 text-lg max-w-xl mx-auto mb-8">
          Discover what your data can do—without ever giving it away.
        </p>
        <a
          href="#"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-4 rounded-xl transition"
        >
          Get Started with Insight
        </a>
      </section>
    </main>
  );
}
