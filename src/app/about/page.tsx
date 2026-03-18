
export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 px-6 max-w-7xl mx-auto bg-white dark:bg-[#0B1128] transition-colors duration-300">
      <h1 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white animate-fade-in-up">About Us</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
          Established in 1998 as an electrical maintenance service in Chiplun MIDC, we have evolved into <strong className="text-blue-600 dark:text-blue-400">UNITY ENTERPRISES</strong>—a trusted name in electrical engineering and advanced digital automation solutions. Today, we operate with a strong presence across the Mumbai Suburban MMR region and MIDC Lote Parshuram, Ratnagiri.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="bg-slate-50 dark:bg-[#151e32] p-10 rounded-3xl border border-slate-100 dark:border-blue-900/20 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-lg group">
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">VISION</h2>
            <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
              To lead the future by enabling industries to grow faster through smart digitalization and automation.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-[#151e32] p-10 rounded-3xl border border-slate-100 dark:border-blue-900/20 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-lg group">
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">MISSION</h2>
            <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
              To empower businesses with intelligent, technology-driven solutions that simplify operations, enhance customer experiences, and drive sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}