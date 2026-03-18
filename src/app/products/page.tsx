
export default function ProductsPage() {
    return (
        <main className="min-h-screen pt-24 px-6 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-white">Products and Solutions</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Placeholder Product Cards */}
                {[
                    "Electrical Panels",
                    "Power Factor Control",
                    "Motor Control Centers",
                    "Industrial Automation",
                    "IoT Dashboards",
                    "Energy Monitoring"
                ].map((product, idx) => (
                    <div key={idx} className="bg-[var(--ue-secondary)] p-6 rounded-xl border border-white/5 hover:border-[var(--ue-primary)] transition-colors group cursor-pointer">
                        <div className="h-48 bg-black/20 rounded-lg mb-4 flex items-center justify-center">
                            <span className="text-gray-600">Image Placeholder</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[var(--ue-primary)]">{product}</h3>
                        <p className="text-sm text-gray-400">Description for {product} goes here. High quality and reliable standards.</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
