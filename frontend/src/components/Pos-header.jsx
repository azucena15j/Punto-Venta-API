export default function PosHeader() {
    return (
        <div className="w-full">
            {/* Navigation Header */}
            <header className="bg-white px-6 py-4 shadow-sm">
                <nav className="flex items-center justify-between max-w-6xl mx-auto">
                    <div className="text-2xl font-bold text-cyan-500">POS-ting</div>
                    <div className="flex items-center space-x-8">
                        <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">Productos</button>
                        <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">Carrito</button>
                        <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">Pedido</button>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="relative h-80 bg-gradient-to-r from-orange-400 via-orange-300 to-cyan-400 overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
                    {/* Left Side - POS Terminal */}
                    <div className="flex items-center space-x-6">
                        {/* POS Terminal Icon */}
                        <div className="relative">
                            <div className="w-32 h-24 bg-white rounded-lg shadow-lg relative">
                                {/* Screen */}
                                <div className="absolute top-2 left-2 right-2 h-8 bg-gray-100 rounded border-2 border-gray-300">
                                    <div className="flex items-center justify-center h-full">
                                        <div className="flex space-x-1">
                                            <div className="w-8 h-1 bg-gray-400 rounded"></div>
                                            <div className="w-6 h-1 bg-gray-400 rounded"></div>
                                            <div className="w-4 h-1 bg-gray-400 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                                {/* Keypad */}
                                <div className="absolute bottom-2 left-2 right-2">
                                    <div className="grid grid-cols-3 gap-1">
                                        {[...Array(9)].map((_, i) => (
                                            <div key={i} className="w-3 h-2 bg-cyan-500 rounded-sm"></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* Speech Bubble */}
                            <div className="absolute -top-4 -right-8 bg-white rounded-lg px-3 py-1 shadow-md">
                                <div className="flex space-x-1">
                                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                </div>
                                <div className="absolute bottom-0 left-4 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-white transform translate-y-full"></div>
                            </div>
                        </div>

                        {/* POS-ting Text */}
                        <div className="text-white text-5xl font-bold">POS-ting</div>
                    </div>

                    {/* Right Side - Food Image */}
                    <div className="relative">
                        <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl bg-white p-4">
                            <img
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sQnqjZRrRDnDA0rF7ULc9wBdE5iSe2.png"
                                alt="Hamburger with fries and condiments"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
